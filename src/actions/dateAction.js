
import * as types from '../constants/ActionTypes'

export function filterByDate(date,data){
    var filterList=[];
    filterList = Object.assign([], data);
    filterList=filterList.filter(user=>user.date===date.toString())    
    return{type:types.FILTER_BY_DATR,list:filterList};     
       
}