function DetailsPresenter(props) {

    /**
     * currentDish: id
     */


    const [currentDish, setCurrentDish ] = React.useState(props.model.currentDish);    
    const [dishes, setDishes] = React.useState(props.model.dishes);
    const [people, setPeople] = React.useState(props.model.numberOfGuests);
    const [currentDishData, setCurrentDishData] = React.useState(props.model.currentDishDetails);
    const [currentDishError, setCurrentDishError] = React.useState(props.model.currentDishError);

    React.useEffect(() => {
        props.model.addObserver(() => {
            setCurrentDish(props.model.currentDish);
            setPeople(props.model.numberOfGuests);
            setDishes(props.model.dishes);
            setCurrentDishData(props.model.currentDishDetails);
            setCurrentDishError(props.model.currentDishError);
        })
    }, [])

    return promiseNoData(currentDish, currentDishData, currentDishError) ||
            <DetailsView isDishInMenu={dishes.find(d => d.id == currentDish)} 
                        people={people}
                        dish={currentDishData}
                        dishAdded={dish => props.model.addToMenu(dish)}/>
}