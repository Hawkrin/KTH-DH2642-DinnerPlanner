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

    const [persons, setPersons ] = React.useState(props.model.numberOfGuests);
    const [ingredients, setIngredients] = React.useState(getIngredients(props.model.dishes));

    React.useEffect(() => {
        props.model.addObserver(() => {
            setPersons(props.model.numberOfGuests);
            setIngredients(getIngredients(props.model.dishes));
        })
    }, [])
    
    return <SummaryView 
                persons={persons} 
                ingredients={ingredients}    
            />
}