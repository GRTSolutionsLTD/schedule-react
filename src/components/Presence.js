import React from 'react'
import {connect} from 'react-redux'
import {addenter,addexit} from '../actions/PresenceAction'
import moment from 'moment';
import ModalExample from '../components/AlertTry'
import { Button } from 'reactstrap';

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
        let time= moment(new Date());    
        this.props.addEnter(this.state.user,time);
    }
    
    AddExitclick=()=>{
        alert("exite done");

        let time= moment(new Date()) ;   
        this.props.addExit(this.state.user,time);
    }
    
    render() {
        debugger;
        return <div>
            {/* {this.props.data.map((a, i) =><div key={i}> <p >{a.Name}</p></div>)} */}
            {/* <button style={{ backgroundColor: "green" }} onClick={this.AddEnterclick} >Enter</button> */}
            <ModalExample buttonLabel="Alert" />
             
            <Button color="success" onClick={this.AddEnterclick}>Enter</Button>
            <Button color="danger" onClick={this.AddExitclick}>Exit</Button>
            {/* <button className="c-button" style={{ backgroundColor: "green" ,color:"white" }} onClick={this.AddEnterclick}>Enter</button>
            <button className="c-button" style={{ backgroundColor: "red" ,color:"white"}} onClick={this.AddExitclick} >Exit</button> */}
           
        </div>
    }
}

const mapStateToProps = (store, ownprops) => {

    return {
        
        PresenceList: store.PresenceList,
        data: store.PresenceReportReducer.data,
        newUser:store.ReLogIn.newUser,
        // length: store.RePresence.data.length
    }
}
const mapDispatchToProps = (dispatch) => {
    
    return {
        addEnter: (user,time) => {dispatch(addenter(user,time))},
        addExit: (user,time) => dispatch(addexit(user,time)),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Presence)
