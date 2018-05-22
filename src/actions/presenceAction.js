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
  export const getAllUsers =() => {
    return {
      type: types.GET_ALL_USERS
    };
  }

