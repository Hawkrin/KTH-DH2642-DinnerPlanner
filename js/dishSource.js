const DishSource = {
    apiCall(params) {
        return fetch(BASE_URL + params, {
            "method": "GET",
            "headers": {
                "X-Mashape-Key": API_KEY,
                "x-rapidapi-host": "spoonacular-recipe-food-nutrition-v1.p.rapidapi.com",
            } 
        })
        .then(response => { 
            if (response.status != 200) { 
                throw "Could not fetch data."
            } 
            return response
        })
        .then(response => response.json());
    },
    searchDishes(params) { return DishSource.apiCall("recipes/search?" + new URLSearchParams(params)).then(data => data["results"])},
    searchXDiches(params) { return DishSource.apiCall("recipes/search?" + new URLSearchParams(params)).then(data => data["results"])},
    getDishDetails(id) { return DishSource.apiCall("recipes/" + id + "/information").then(data => data) }
};
