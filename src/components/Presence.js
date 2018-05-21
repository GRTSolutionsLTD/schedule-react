import React from 'react'
import {connect} from 'react-redux'
import {addenter,addexit} from '../actions/PresenceAction'
import moment from 'moment';
class Presence extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            user:this.props.newUser
        }
    }
    AddEnterclick=()=>{
        alert("enter done");   
        debugger;
        let time= moment(new Date()).format("HH:mm");    
        this.props.addEnter(this.state.user,time);
    }
    
    AddExitclick=()=>{
        alert("exite done");
        let time= moment(new Date()).format("HH:mm") ;   
        this.props.addExit(this.state.user,time);
    }
    
    render() {
        debugger;
        return <div>
            {this.props.data.map((a, i) =><div key={i}> <p >{a.name}</p></div>)}
            {/* <button style={{ backgroundColor: "green" }} onClick={this.AddEnterclick} >Enter</button> */}
            <button className="c-button" style={{ backgroundColor: "green" ,color:"white" }} onClick={this.AddEnterclick}>Enter</button>
            <button className="c-button" style={{ backgroundColor: "red" ,color:"white"}} onClick={this.AddExitclick} >Exit</button>
        </div>
    }
}

const mapStateToProps = (store, ownprops) => {

    return {
        
        PresenceList: store.PresenceList,
        data: store.RePresence.data,
        newUser:store.ReLogIn.newUser,
        length: store.RePresence.data.length
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addEnter: (user,time) => {dispatch(addenter(user,time))},
        addExit: (user,time) => dispatch(addexit(user,time)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Presence)
