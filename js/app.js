function defaultRoute() {
    let known = false;
    ["#search", "#summary", "#details"]
        .find((knownRoute) => {if (window.location.hash === knownRoute) {known = true; return; }})

    if (!known) { window.location.hash = "#search" }
}


function App(props) {

    window.addEventListener("hashchange", () => {defaultRoute()});



    

    return (
        <div className="flexParent"> 
            <div className="sidebar debug"><SidebarPresenter model={props.model} /></div>
            <div className="mainContent debug" id="test">
                <ShowPresenter hash="#search"><SearchPresenter model={props.model} /></ShowPresenter>
                <ShowPresenter hash="#details"><DetailsPresenter model={props.model} /></ShowPresenter>  
                <ShowPresenter hash="#summary"><SummaryPresenter model={props.model}/></ShowPresenter>  
            </div> 
        </div>
    );
}
