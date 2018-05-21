import * as types from '../constants/ActionTypes'
export const logIn = (User) => {
  return {
    type: types.LogIn,
    User:User
  };
}