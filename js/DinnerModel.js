class DinnerModel {
    constructor(guests = 2, dishes = [], currentDish = null, observers = []) { 
        this.observers = observers;
        this.dishes = dishes;
        this.currentDish = currentDish;

        this.setNumberOfGuests(guests);
    }

    setDishes(dishes) {
        this.dishes = [...dishes];
        this.notifyObservers();
    }

    setNumberOfGuests(x){ 
        if (this.numberOfGuests == x) { return; }


        if(x < 1) throw ("Minimum amounts of guests are 1"); 
        if(!Number.isInteger(x)) throw ("The number needs to be an integer");
        this.numberOfGuests= x;
        this.notifyObservers();
    }
    
    addToMenu(dish) {

        let alreadyIn = false;

        this.dishes.forEach(d => {
            if (d.id == dish.id) { alreadyIn = true }
        })

        if (!alreadyIn) {
            this.dishes = [...this.dishes, dish]
            this.notifyObservers();
        } else { alert(dish.title + " is already in menu!")}
    }

    removeFromMenu(id) {
        let changed = false;

        this.dishes = this.dishes.filter(x => {
            if (x.id == id) { changed = true; }
            return x.id != id;
        })

        if (!changed) { return; }

        this.notifyObservers();
    }

    setCurrentDish(id) { 
        if (this.currentDish === id) { return; } //DONE
        this.currentDish = id; //DONE

        this.currentDishDetails = null; this.currentDishError = null; //DONE
        this.notifyObservers(); //DONE

        if (this.currentDish) { // TODO
            DishSource.getDishDetails(id)
                .then( (data) => {
                    this.currentDishDetails = duplicate(data);
                    this.notifyObservers()
                })
                .catch( (error) => {
                    this.currentDishError = error;
                    this.notifyObservers()
                })
        } 
    }

    addObserver(callback) {
        // Adding a callback function to this.observer via spread syntax
        this.observers = [...this.observers, callback];
    }

    removeObserver(callback) {
        // Removing a callback function from this.observer via Array.prototype.filter()
        this.observers = this.observers.filter((value) => {
            return value != callback
        })
    }

    notifyObservers() {
        this.observers.forEach( callback => {
            try { 
                setTimeout( () => {
                    callback(); 
                }, 0);
            }
            catch(error) { console.error(error); }
        })
    }
}

function Ingredients(dishArr) {
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

function duplicate(dish) {
    const result = {};
    dish.extendedIngredients.forEach(i => {
        if (!result[i.id]) {
            result[i.id] = {...i}
        } else {
            result[i.id].amount += i.amount;
        }
    })

    dish.extendedIngredients = Object.values(result);
    return dish;
}
