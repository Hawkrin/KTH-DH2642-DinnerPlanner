function ShowPresenter(props) {
    const [hashState, setHashState] = React.useState(window.location.hash)

    React.useEffect(() => {
        window.addEventListener("hashchange", () => { setHashState(window.location.hash)})

        return () => {  }

    }, [window.location.hash])

    if (hashState != props.hash) {
        return (
            <div className="hidden">
                {props.children}
            </div>
        )
    } else {
        return (
            <div className="">
                {props.children}
            </div>
        )
    }

}