import React from 'react'
import { form } from 'react-bootstrap';
import {connect} from 'react-redux'
import {logIn} from '../actions/LogInAction'
import { Button,InputGroup,InputGroupAddon,Input,FormGroup,Col,Label } from 'reactstrap';
class LogIn extends React.Component {
    constructor(props) {
        super(props);
        this.state = { nameValue: '', passwordValue: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
         if (event.target.name=== "UserName")
            this.setState({ nameValue: event.target.value });
         else
            this.setState({ passwordValue: event.target.value });
            
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.nameValue);
        event.preventDefault();
        debugger;
        this.props.logIn({
            name:this.state.nameValue,
            id:this.state.passwordValue,
        });
    }

    render() {

        return <form className="form-group row" onSubmit={this.handleSubmit}>

<FormGroup row>
          <Label for="UserName" sm={4}>User Name</Label>
          <Col sm={10}>
          <Input type="text"   placeholder="Name" value={this.state.nameValue} onChange={this.handleChange} name="UserName" />
          </Col>
        </FormGroup>


      <FormGroup row>
          <Label for="Password" sm={4}>Password</Label>
          <Col sm={10}>
          <Input type="password" placeholder="Password" value={this.state.passwordValue} onChange={this.handleChange} name="Password" />
          </Col>
        </FormGroup>


          
            <Col sm={10}>
            <Button outline color="danger" type="submit"  value="Submit" >submit</Button>
            </Col>

             
        </form>
    }
}

const mapStateToProps = (store, ownprops) => {
    return {
        PresenceList: store.ReLogIn.newUser,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        logIn: (User) => {  return dispatch(logIn(User))},
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(LogIn) 




