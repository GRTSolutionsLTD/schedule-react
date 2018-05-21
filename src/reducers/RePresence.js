import moment from "moment";


const users=
[{id:'1',name:"Miri",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00",sum:1},
{id:'2',name:"Chany",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00",sum:1},
{id:'3',name:"Lea",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"12:00",sum:3}];

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
        //     let len= u.length;
        //    if(len!==undefined)
        // u[len-1].exit=action.out;
        // else
        u.exit=action.exit;
        const startDate = moment(u.enter);
        const timeEnd = moment(u.exit);
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

export default RePresence



