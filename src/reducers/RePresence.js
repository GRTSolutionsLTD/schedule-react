import moment from "moment";


const users=
[{id:'1',name:"Miri",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00",sum:1},
{id:'2',name:"Chany",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"10:00",sum:1},
{id:'3',name:"Lea",date:moment(new Date()).format("MM-DD-YYYY"),enter:"9:00",exit:"12:00",sum:3}];

const RePresence = (state = { data: users }, action) => {

}
export default RePresence



