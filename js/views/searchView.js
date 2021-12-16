function SearchResultsView(props) {
    return (
        <div> 
            { 
                props.searchResults.map(result => {
                    return (
                        <span className="searchResult" key={result["id"]} onClick={e => {props.dishChosen(result["id"]); window.location.hash="#details"}}>
                            <img src={"https://spoonacular.com/recipeImages/" + result["image"]} height="100px" />
                            <div>
                                {result["title"]}
                            </div>
                            
                        </span>
                    )
                })
            }
        </div>
    )
}