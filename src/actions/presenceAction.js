import * as types from '../constants/ActionTypes'

import moment from "moment";

export const addenter = (User,time) => {
 
  return { 
    type: types.ADD_ENTER,
    User:{
       ID:User.ID,
      Name:User.Name,
      date:moment(new Date()).format("MM-DD-YYYY") ,
      FromHour:time,
    }
  };
 
}
export const addexit =(User,time) => {
    return {
      type: types.ADD_EXIT,
      User:User,
      ToHour:time,
    };
  }
  export const getAllUsers =() => {
    return {
      type: types.GET_ALL_USERS,
  
    };
  }
