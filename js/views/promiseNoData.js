function promiseNoData(promise, data, error) {
    if (!promise && !data && !error) {
        return (
            <span>no data</span>
        )
    }

    if (promise && 
        !data &&
        !error) {
            return (
                <div>
                    <img src="http://www.csc.kth.se/~cristi/loading.gif" />
                </div>
            )
        }

    if (promise &&
        !data &&
        error) {
            return (<span>{error}</span>)
        }

    if (promise && data && error === null) { 
        return false; 
    }
}