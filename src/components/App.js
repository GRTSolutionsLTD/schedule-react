import React from 'react'
import Header from './Header'

 
class App extends React.Component {
 
  render(){
    return(
  <div>
    <Header />
    <div>
      {this.props.children}
    </div>
  </div>);
  }}

  export default App;
