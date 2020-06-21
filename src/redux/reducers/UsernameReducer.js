import Type from '../actions/Type'

const initialState = {
    data: ""
}

export default (state=initialState, action)=>{
    switch (action.type) {
        case Type.GET_USERNAME_FULFILLED:
            const data = action.payload
            return Object.assign({}, state, {
                data
            })
    
        default:
            return state
    }
}