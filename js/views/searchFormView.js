function SearchFormView(props) {

    return (
        <div>
            <input onInput={e => props.onText(e.target.value)}></input>
            <select onChange={e => props.onDishType(e.target.value)}>
                <option>Choose:</option>
                {props.options.map((opt, id) => <option key={id}>{opt}</option>)}
            </select>
            <button onClick={ e => props.onSearch(e.target.value) }>Search!</button>
            <button onClick={ e => window.location.hash="#summary" }>Summary</button>
        </div>
    )
}