import moment from "moment";

const NewUser ={ 
    ID: 0,
    Name: "",
    date:moment(new Date()).format("MM-DD-YYYY") ,
    enter:moment(new Date()).format("HH:mm") ,
    exit:moment(new Date()).format("HH:mm") ,
    sum:0
};



const ReLogIn = (state = { newUser: NewUser }, action) => {
    const newState = { ...state };
    switch (action.type) {
        case 'LogIn':{
            newState.newUser=action.User;
            return newState;
        }
        default:
            return state
    }
}

export default ReLogIn


