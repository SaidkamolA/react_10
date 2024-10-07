const initialState = {
    items:[


    ],
    page:1,
    limit:5

}


function ItemReducer(state=initialState, action){
    switch(action.type){
        case 'SET_ITEMS':
            return {
                ...state.items,'items':action.payload
            }
        default:
            return state
    }



};
export default ItemReducer; 