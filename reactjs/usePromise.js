function usePromise(promise) {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect( function() {
    setData(null); setError(null);

    let cancelled = false;
    if (promise) {
      promise
        .then( (data) => { if (!cancelled) setData(data); })
        .catch( (error) => { if (!cancelled) setError(error); })
    }

    return function() {cancelled = true; }

  }, [promise])

  return [data, error];
}
