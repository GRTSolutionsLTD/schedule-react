import React from 'react'
import{ readJson } from '../actions/readJsonAction'
<<<<<<< HEAD
import {getAllUsers} from '../actions/PresenceAction'
=======
import {getAllUsers} from '../actions/presenceAction'

>>>>>>> 5251c4baeae731704db7dc144f59088f1be23251
import { connect } from 'react-redux';
import Date from '../components/DatePicker'

import 'bootstrap/dist/css/bootstrap.min.css'
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
  

   

class User extends React.Component {
  
  render(){
    return(
  
      <tr>
        
      <td>{this.props.user.ID}</td>
      <td>{this.props.user.FromHour}</td>
      <td>{this.props.user.ToHour}</td>
      <td>{this.props.user.date}</td>
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
      <th   scope="col">from an hour</th >
      <th   scope="col">to an hour</th >
      <th   scope="col">date</th >    
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
      
=======
      //  delete: (id) => dispatch(deleteUser(id)),
>>>>>>> 5251c4baeae731704db7dc144f59088f1be23251
       getAllUsers:()=>dispatch(getAllUsers()),
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PresenceReport);

