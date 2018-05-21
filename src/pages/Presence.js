import React from 'react'
import Presence from '../components/Presence'
import Clock from 'react-clock'

class PresencePage extends React.Component {
  
  componentDidMount() {
      setInterval(
        () => this.setState({ date: new Date() }),
        1000
      );
    }
  render() {
    return(
      <main>
    <div>
      
    <Clock value={new Date()} />
    <Presence/>
    </div>
    </main>);
  }
}
export default PresencePage




