function DetailsView(props) {
    return (
        <div>
            <div className="border">
                <h3 className="title">{props.dish["title"]}</h3>
                <div id="header">
                <img className="image" src={props.dish["image"]}/>
                <div className="summary" id="topInfo">
                        <h5 className="priceHeader">{"Price: " + props.dish["pricePerServing"]}</h5>
                        <h5>{"for " + props.people + " guests: " + props.dish["pricePerServing"] * props.people}</h5>
                    </div>
                </div>
                <div className="ingredients" id="ingredients">
                    <table>
                        <tbody>
                            {
                                props.dish.extendedIngredients.map(ingredient => {
                                    return (
                                        <tr key={ingredient["id"]}>
                                            <td>
                                                {ingredient["name"]}
                                            </td>
                                            <td>
                                                {ingredient["measures"]["metric"]["amount"]}
                                            </td>
                                            <td>
                                                {ingredient["measures"]["metric"]["unitShort"]}
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
                <div>
                    <p className="instructions">{props.dish["instructions"]}</p>
                </div>
                <div>
                    <a href={props.dish["sourceUrl"]}>More information </a>
                </div>
            </div>
            <div className= "buttons">
                <div className="buttonIngrediant">
                    <button disabled={props.isDishInMenu === true}
                        onClick={() => {props.dishAdded(props.dish); window.location.hash = "#search"}}
                    > Add to menu! </button>
                    <button onClick={e => window.location.hash ="#search"}> Cancel </button>
                </div>
            </div>
        </div>
    )
}