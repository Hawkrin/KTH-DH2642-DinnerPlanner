function SidebarPresenter(props) {

    const [numberOfGuests, setNumberOfGuests ] = React.useState(props.model.numberOfGuests);
    const [dishes, setDishes] = React.useState(props.model.dishes);

    React.useEffect(() => {
        props.model.addObserver(() => {
            setNumberOfGuests(props.model.numberOfGuests);
            setDishes(props.model.dishes);
        })
    }, [])
    
    return <SidebarView guests = {numberOfGuests}
                        dishes = {dishes} 
                        setGuests = {(g) => {props.model.setNumberOfGuests(g)}}
                        removeDish = {(id) => {props.model.removeFromMenu(id)} }
                        dishChoice = {(id) => { props.model.setCurrentDish(id); }}
                        />
}