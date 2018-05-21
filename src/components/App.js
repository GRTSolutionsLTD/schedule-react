import React from 'react'
import Header from './Header'
import{ readJson } from '../actions/readJsonAction'
import { connect } from 'react-redux'   
class App extends React.Component {
  componentWillMount(){

// this.props.readJson();
}
  render(){
    return(
  <div>
    <Header />
    <div>
      {this.props.children}
    </div>
  </div>);
  }}
  function mapDispatchToProps(dispatch) {
    return {
      readJson: () => dispatch(readJson()),   
    };
  }
  export default connect(mapDispatchToProps)(App);
