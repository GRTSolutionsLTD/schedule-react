import moment from "moment";
const users=
[{ID:1,Name:"Mina",date:new Date(),FromHour:new Date(),ToHour:new Date()},
{ID:2,Name:"Lea",date:new Date(),FromHour:new Date(),ToHour:new Date()},
{ID:3,Name:"Rachel",date:new Date(),FromHour:new Date(),ToHour:new Date()},
{ID:4,Name:"Shana",date:new Date(),FromHour:new Date(),ToHour:new Date()},
{ID:5,Name:"Lira",date:new Date(),FromHour:new Date(),ToHour:new Date()}];


const reducer = (state ={data:users,filterList:users}, action) => {
    const newState = { ...state };
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
       
       
            case 'ADD_ENTER':
                newState.data.push(action.User);
                return newState;
            case 'ADD_EXIT':
           {
               debugger;
    
    
               let u=newState.data.find(p=>p.ID===action.User.ID);
            u.ToHour=action.ToHour;
            const startDate = moment(u.FromHour);
            const timeEnd = moment(u.ToHour);
            const diff = timeEnd.diff(startDate);
            const diffDuration = moment.duration(diff);
    
            //------------------------------------------------------------
            //קוד בשביל מירי להצגה בטבלה
            console.log("Hours:", diffDuration.hours());
            console.log("Minutes:", diffDuration.minutes());
            //-------------------------------------------------------------
           
            u.sum= diffDuration;
            // newState.data.push(u);
            return newState;
        }
            default:
                return state
        }
 
    }

export default reducer