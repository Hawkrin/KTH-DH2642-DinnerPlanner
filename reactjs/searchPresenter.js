function SearchPresenter(props) {
    
    

    const [promise, setPromise] = React.useState(null);
    const [searchQuery, setSearchQuery] = React.useState("");
    const [searchType, setSearchType] = React.useState("");
    const [amountOfSearches, setAmountOfSearches] = React.useState(40);

    const [content, setContent] = React.useState(null);

    React.useEffect(() => {
            setPromise(DishSource.searchDishes({number: amountOfSearches}))
            setContent(document.getElementsByClassName("mainContent")["0"])
    }, [])

    if (content) {
        content.addEventListener("scroll", (e) => {
            e.preventDefault()
            if (content["scrollHeight"] - content["scrollTop"] === content["clientHeight"]) {
                setAmountOfSearches(amountOfSearches + 20)
                //content["scrollTo"](0, content["scrollHeight"] - content["clientHeight"] - 50);                
            }
        })
    }

    React.useEffect(() => {
        setPromise(DishSource.searchDishes({number: amountOfSearches}))
    }, [amountOfSearches])

    const [data, error] = usePromise(promise);

    return (
        <React.Fragment>
            <SearchFormView options={["starter", "main course", "dessert"]}
                                             onText={(value) => { setSearchQuery(value); }} 
                                             onDishType={(value) => { setSearchType(value); }}
                                             onSearch={() => { 

                                                 if(searchQuery != "" && searchType != "") {
                                                    setPromise(DishSource.searchDishes({"type": searchType, "query": searchQuery}))
                                                    return;
                                                }

                                                 if (searchQuery != "" && searchType == "") {
                                                    setPromise(DishSource.searchDishes({"query": searchQuery}))
                                                    return;
                                                 }

                                                 if (searchQuery == "" && searchType != "") {
                                                    setPromise(DishSource.searchDishes({"type": searchType})); 
                                                 }

                                                 return;
                                                } 
                                             }
                                             />
            { promiseNoData(promise, data, error) ||
                <SearchResultsView searchResults={data}
                dishChosen={e => props.model.setCurrentDish(e) }
              /> }

        </React.Fragment>
    )
}