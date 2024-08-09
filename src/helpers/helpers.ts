 const retriveLocalStorageData =<T,>(key:string) =>{
    const pairJson = localStorage.getItem(key)|| '';
    if(!pairJson){
        return {} as T;
    }
    let tokenRefreshPair = JSON.parse(pairJson)
     return tokenRefreshPair as T;
 }
 export {retriveLocalStorageData}