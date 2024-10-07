export const loadItems = ()=>{


    return async (dispatch) =>{
        const responce = await fetch('https://rickandmortyapi.com/api/character')
        const data = await responce.json();
        dispatch({type:'SET_ITEMS' ,payload:data.results})
    
    }

}