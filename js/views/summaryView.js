function compareIngredients(a,b){
    if (a.name === b.name) throw "ingredients names are not unique"
    if(a.aisle < b.aisle) return -1;
    if (a.aisle > b.aisle) return 1
    return 0
}

function SummaryView(props) { 
    return (
        <div>
            <h3>Dinner for {props.persons} guests:</h3>
            <div>
                <table className="t"> 
                    <tbody>  
                        <tr className="title">
                            <td>Ingredient</td>
                            <td>Aisle</td>
                            <td>Quantity</td>
                        </tr>
                        {
                            props.ingredients.map( i => {return (
                            
                                <tr key={i["id"]}>
                                    <td>{i["name"]}</td>
                                    <td>{i["aisle"]}</td>
                                    <td>{(i["amount"] * props.persons).toFixed(2) + " " + i["measures"]["metric"]["unitShort"]}</td>
                                </tr>
                                
                            )})   
                        } 
                    </tbody>
                </table>
                <button onClick={e => window.location.hash = "#search"}>Back to search</button>
            </div>
        </div>
    )
}