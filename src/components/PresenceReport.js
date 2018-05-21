import React from 'react'
import{ readJson } from '../actions/readJsonAction'
import {getAllUsers} from '../actions/presenceAction'
import { connect } from 'react-redux';
import Date from '../components/DatePicker'
import moment from "moment";
import 'bootstrap/dist/css/bootstrap.min.css'
// import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
class User extends React.Component {
  
  render(){
    return(
  
      <tr>
      <td>{this.props.user.ID}</td>
      <td>{this.props.user.Name}</td>
      <td>{moment(this.props.user.date).format("MM-DD-YYYY")}</td>
      <td>{moment(this.props.user.FromHour).format("HH-mm")}</td>
      <td>{moment(this.props.user.ToHour).format("HH-mm")}</td>
      
      </tr>
    );
  }
}
class PresenceReport extends React.Component {
constructor(props)
{
  super(props);
this.props.readJson();
}

  render(){
    
    return (
   
  <main>
   
    <div>
    <table className="table-hover table">
    <thead className="thead-light">
    <tr>
      <th   scope="col">id</th >
      <th   scope="col">name</th >   
      <th   scope="col">date</th >   
      <th   scope="col">from an hour</th >
      <th   scope="col">to an hour</th >
    
      </tr>
  </thead>
    
      {this.props.data.map((user)=><User user={user}/>)}
    </table >    
 <Date   className="form-control dateInput" /> 
      
 <button onClick={this.props.getAllUsers}>The whole list</button>
    </div>
    </main>
    )
  }
}
function mapStateToProps(store, ownProps) {
  return {
      data: store.PresenceReportReducer.filterList  
  };
}
function mapDispatchToProps(dispatch) {
  return {
    readJson: () => dispatch(readJson()), 
<<<<<<< HEAD
         getAllUsers:()=>dispatch(getAllUsers()),
=======
      
       getAllUsers:()=>dispatch(getAllUsers()),
>>>>>>> bd75092e60064201c0947b7c3e58da11b45801c9
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresenceReport);

