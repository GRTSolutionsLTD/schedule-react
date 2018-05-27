import * as types from '../constants/ActionTypes'
import axios from 'axios'
export function readJson() {
    var list
    return function (dispatch) {
        return axios.get('http://localhost:8080/getPresence')
            .then((response) => {
                list = response.data;
                dispatch(readData(list));
            })
            .catch(error => {
                throw (error);
            });
    }
}


function readData(list){
   return  { type: types.READ_JSON, list: list }
}