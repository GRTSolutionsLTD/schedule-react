import moment from "moment";


const users=
[{id:'1',name:"Miri",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00"},
{id:'2',name:"Chany",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00"},
{id:'3',name:"Lea",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00"}];

const RePresence = (state = { data: users }, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'ADD_ENTER':
            newState.data.push(action.User);
            return newState;
        case 'ADD_EXIT':
       {
           debugger;
           let u=newState.data.find(p=>p.id===action.User.id);
            // newState.data.filter(p=>p.id!==action.User.id);
           //לא בטוח שצריך
            let len= u.length;
           if(len!==undefined)
        u[len-1].exit=action.out;
        else
        u.exit=action.out;
        // newState.data.push(u);
        return newState;
    }
        default:
            return state
    }
}

export default RePresence



