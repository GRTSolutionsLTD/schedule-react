
import * as types from '../constants/ActionTypes'
export function deleteUser(userId){
    
    return{type:types.DELETE_USER,UserId:userId};
}

export function getAllUsers(){
    
    return{type:types.GET_ALL_USERS};
}