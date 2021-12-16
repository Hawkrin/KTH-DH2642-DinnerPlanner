const REF = "dinnermodel" + 58
function persistModel(model){
    model.addObserver(function(){
         	firebase.database().ref(REF).set({  // object literal
                guests: model.numberOfGuests,
                dishes: model.dishes,
                currentDish: model.currentDish
		    });
    });

    firebase.database().ref(REF).on("value", function(data) {
        let loadingFromFirebase = false;
        model.addObserver(() => { if (loadingFromFirebase) { return; } })
        loadingFromFirebase = false;
        if (data.val()) {
            model.setNumberOfGuests(data.val().guests);
            if (data.val().currentDish) {
                model.setCurrentDish(data.val().currentDish);
            }

            if (data.val().dishes) {
                model.setDishes(data.val().dishes);
            } 
        }
    })
}
