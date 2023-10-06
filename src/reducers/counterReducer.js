
const initialState = {
    value : 0
}
 
export const counterReducer = (state=initialState,action) => {
    switch(action.type){
        case 'add':
            return {...state, value:state.value+1}
        case 'sub':
            return {...state, value:state.value-1} 
        case 'random' :
            return {...state,value:state.value+action.payload}    
        default :
            return state               
    }
}
