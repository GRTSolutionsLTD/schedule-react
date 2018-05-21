import * as types from '../constants/ActionTypes'

import moment from "moment";

export const addenter = (User,time) => {
 
  return { 
    type: types.ADD_ENTER,
    User:{
       id:User.id,
      name:User.name,
      date:moment(new Date()).format("MM-DD-YYYY") ,
      enter:time,
    }
  };
 
}
export const addexit =(User,time) => {
    return {
      type: types.ADD_EXIT,
      User:User,
      exit:time,
    };
  }
<<<<<<< HEAD
  export const getAllUsers =(User,time) => {
    return {
      type: types.GET_ALL_USERS
    };
  }
 
=======
 export const getAllUsers=(User,time)=>{
   return{
     type:types.GET_ALL_USERS
   };
 }
>>>>>>> 5251c4baeae731704db7dc144f59088f1be23251
