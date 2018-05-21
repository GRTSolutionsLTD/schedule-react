
import * as types from '../constants/ActionTypes'
export function filterByDate(date){
    
    return{
         
        type:types.FILTER_BY_DATR,date:date};
}