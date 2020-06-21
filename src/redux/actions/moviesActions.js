import types from './Type'
import {UserContract, PostContract} from '../../setup'
const urlBase = 'https://api.themoviedb.org/3/movie/'
const urlSearch = 'https://api.themoviedb.org/3/'
const key = '0a070bb0bba73e47907b3e215c006705'

const getAllPosts = async() => {
    let arr = []
    let n = PostContract.getNumberOfPosts()
    console.log(n.toNumber())
    for(let i = 0; i < n.toNumber(); i++){
        arr.push(PostContract.getPost(i))
    }
    return arr
}

const getAllUsers = async() => {
    let arr = []
    let n = UserContract.getNumberOfUsers()
    console.log(n.toNumber())
    for(let i = 0; i < n.toNumber(); i++){
        arr.push(UserContract.getUser(i))
    }
    return arr
}

const getName = async(address) => {
    return UserContract.getUsername(address)
}

export const getPosts = ()=>dispatch=>{
    dispatch( {
        type: types.GET_POSTS,
        payload: getAllPosts()
    })
}

export const getUsers = ()=>dispatch=>{
    dispatch( {
        type: types.GET_USERS,
        payload: getAllUsers()
    })
}

export const getUsername = (address)=>dispatch=>{
    dispatch( {
        type: types.GET_USERNAME,
        payload: getName(address)
    })
}

export const addUser = async(username)=>dispatch=>{
    dispatch( {
        type: types.ADD_USERNAME,
        payload: UserContract.addUser(username)
    })
}