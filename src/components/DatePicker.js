import React from 'react';
import {filterByDate} from '../actions/dateAction'
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { connect } from 'react-redux'

import 'react-datepicker/dist/react-datepicker.css';
 

 
class Date extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      startDate: moment()
    };
    this.handleChange = this.handleChange.bind(this);
  }
 filter= ()=>{
   this.props.filterByDate(moment(this.state.startDate).format("MM-DD-YYYY"),this.props.data);
 }
  handleChange(date) {
    this.setState({
      startDate: date
    });
   
  }
 
  render() {
    return <div>
      <button onClick={this.filter}>filter</button>
      <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    /></div>;
  }
}

function mapStateToProps(store, ownProps) {
  return {
      data: store.PresenceReportReducer.data,
      filterList: store.PresenceReportReducer.filterList
  };
}
function mapDispatchToProps(dispatch) {
  return {
    filterByDate: (date,data) => dispatch(filterByDate(date,data)),
      // onLoad: () => dispatch(onLoad()),
      // OnAddRecord: (record) => dispatch(OnAddRecord(record)),
      // OnUpdateRecord: (record) => dispatch(OnUpdateRecord(record)),            
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Date);