



const initialState = {
    user:{
        name:'',
        email: ''

    },
    items:[]

}


function reducer(state=initialState, action){
    switch(action.type){
        case  'SET_USER':
            return {
                ...state,
                'user': action.payload
            }
        case 'SET_ITEMS':
            return {
                ...state.items,'items':action.payload
            }
        default:
            return state
    }



};
export default reducer;