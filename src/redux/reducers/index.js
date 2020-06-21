import {combineReducers} from 'redux'
import post from './PostReducer'
import username from './UsernameReducer'
import user from './UserReducer'

export default combineReducers({
    post, username, user
})