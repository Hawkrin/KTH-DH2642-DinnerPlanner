const types=["starter", "main course", "dessert"];
function dishType(dish){
    if(dish["dishTypes"]){
    	const tp= dish["dishTypes"].filter(value => types.includes(value));
    	if(tp.length)
	        return tp[0];
    }
    return "";
}

function compareDishes(a,b){
    let ai= types.indexOf(dishType(a));
    let bi= types.indexOf(dishType(b));
    
    if (ai < bi) return -1
    if (ai > bi) return 1
    return 0 
}


function getTotalPrice(dishes, guests) {
    let totalPrice = 0;
    dishes.forEach(dish => { 
        totalPrice += dish.pricePerServing;   
    });
    return totalPrice*guests;
}

function SidebarView(props) {
    
    return (
        <div>
            <button onClick={e => props.setGuests(props.guests - 1)} disabled={props.guests <= 1}>-</button>
            <span>{props.guests}</span>
            <button onClick={e => props.setGuests(props.guests + 1)}>+</button>

            <table>
                <tbody> 
                    { 
                        props.dishes.map(dish => {
                            return (
                                <tr key={dish["id"]}>
                                    <td>
                                        <button onClick={e => props.removeDish(dish["id"])}>x</button>
                                    </td>
                                    <td>
                                        <a href="#" onClick={e => {e.preventDefault(); props.dishChoice(dish["id"]); window.location.hash="#details"} }>{dish["title"]}</a>
                                    </td>
                                    <td>
                                        {dishType(dish)}
                                    </td>
                                    <td className="prices">
                                        {dish["pricePerServing"].toFixed(2)}
                                    </td>
                                </tr>
                            )
                        })
                    }
                    <tr>
                        <td></td>
                        <td>
                            Total:
                        </td>
                        <td></td>
                        <td>
                            {getTotalPrice(props.dishes, props.guests).toFixed(2)}
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
}