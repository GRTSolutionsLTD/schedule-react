const users=
[{ID:1,FromHour:"9:00",ToHour:"10:00",date:"10-10-2017"},
{ID:2,FromHour:"4:00",ToHour:"12:00",date:"10-10-2017"},
{ID:3,FromHour:"4:00",ToHour:"12:00",date:"10-10-2017"},
{ID:4,FromHour:"5:00",ToHour:"11:00",date:"05-18-2018"},
{ID:5,FromHour:"5:00",ToHour:"11:00",date:"05-18-2018"}];


const reducer = (state ={data:users,filterList:users}, action) => {
    switch (action.type) {
        
        case 'DELETE_USER': {  
            return{ 
                ...state, data: state.data.filter(user => user.ID !== action.UserId) 
                };
           
              }
        case 'FILTER_BY_DATR':{
          
           
            return{               
                ...state,filterList:action.list            
                };
            
        }
        case 'GET_ALL_USERS' :
        {
            return{               
                ...state,filterList:state.data            
                };
        }  
        default:
            return state;
    }
}
export default reducer