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
 
  handleChange(date) {
    this.setState({
      startDate: date
    });
    this.props.filterByDate(moment(this.state.startDate).format("MM-DD-YYYY"));
  }
 
  render() {
    return <DatePicker
        selected={this.state.startDate}
        onChange={this.handleChange}
    />;
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
    filterByDate: (date) => dispatch(filterByDate(date)),
      // onLoad: () => dispatch(onLoad()),
      // OnAddRecord: (record) => dispatch(OnAddRecord(record)),
      // OnUpdateRecord: (record) => dispatch(OnUpdateRecord(record)),            
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(Date);