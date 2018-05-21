import React from 'react'

import {deleteUser} from '../actions/presenceAction'
import { connect } from 'react-redux';
import Date from '../components/DatePicker'
// import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class User extends React.Component {
  
  render(){
    return(
      <div>
        <button onClick={() => this.props.delete(this.props.user.ID)}>delete</button>
    <tbody>
      <tr>
        
      <td>{this.props.user.ID}</td>
      <td>{this.props.user.FromHour}</td>
      <td>{this.props.user.ToHour}</td>
      <td>{this.props.user.date}</td>
      </tr>
      </tbody>
      </div>
    );
  }
}
class PresenceReport extends React.Component {

  render(){
    
    return (
   
  <main>
    <div>
    <table className="table">
    <thead>
    <tr>
    <th scope="col">#</th>
      <th scope="col">id</th>
      <th scope="col">from an hour</th>
      <th scope="col">to an hour</th>
      </tr>
  </thead>
      {this.props.data.map((user)=><User user={user} delete={this.props.delete}/>)}
       
    </table>    
 <Date /> 
    </div>
    </main>
    )
  }
}
function mapStateToProps(store, ownProps) {
  return {
      data: store.PresenceReportReducer.data  
  };
}
function mapDispatchToProps(dispatch) {
  return {
       delete: (id) => dispatch(deleteUser(id)),
      // onLoad: () => dispatch(onLoad()),
      // OnAddRecord: (record) => dispatch(OnAddRecord(record)),
      // OnUpdateRecord: (record) => dispatch(OnUpdateRecord(record)),            
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(PresenceReport);

