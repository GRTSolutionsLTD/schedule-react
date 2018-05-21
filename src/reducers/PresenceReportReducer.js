const users=
[{ID:1,FromHour:"9:00",ToHour:"10:00",date:"10/10/2018"},
{ID:2,FromHour:"4:00",ToHour:"12:00",date:"10/10/2017"},
{ID:3,FromHour:"5:00",ToHour:"11:00",date:"05/18/2018"}];
const filterList=[];

const reducer = (state ={data:users}, action) => {
    switch (action.type) {
        
        case 'DELETE_USER': {  
            return{ 
                ...state, data: state.data.filter(user => user.ID !== action.UserId) 
                };
           
              }
        case 'FILTER_BY_DATR':{
            this.filterList=users;
            return{ 
                ...state,data:state.data.filter(user=>user.date===action.date.toString())
                };
            
        }
            
        default:
            return state;
    }
}
export default reducer