function getIngredients(dishArr) {
    const result = {};
    dishArr.forEach(dish => {
        dish.extendedIngredients.forEach(i => {
            if (!result[i.id]) {
                result[i.id]={...i}
            } else {
                result[i.id].amount += i.amount
            }
        })
    })

    return Object.values(result);
}

function SummaryPresenter(props) {
    return <SummaryView 
                persons={props.model.numberOfGuests} 
                ingredients = {getIngredients(props.model.dishes)}    
            />
}