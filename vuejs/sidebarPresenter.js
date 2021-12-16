function SidebarPresenter(props) {
    return <SidebarView guests = {props.model.numberOfGuests}
                        dishes = {props.model.dishes}
                        setGuests = {(g) => props.model.setNumberOfGuests(g)}
                        removeDish = {(id) => {console.log(id); props.model.removeFromMenu(id)} }
                        dishChoice = {(id) => { props.model.setCurrentDish(id); }}
            />
}