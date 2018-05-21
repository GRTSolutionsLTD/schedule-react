import React from 'react'
import { form } from 'react-bootstrap';
import {connect} from 'react-redux'
import {logIn} from '../actions/LogInAction'
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
            <div className="form-group">
                <label className="col-sm-2 col-form-label" htmlFor="UserName">User Name
                <div class="col-sm-10">
            <input type="text"  className="form-control form-control-plaintext" placeholder="Name" value={this.state.nameValue} onChange={this.handleChange} name="UserName" />
            </div>
                </label>
            </div>
            <div class="form-group row">
                <label className="col-sm-2 col-form-label" htmlFor="Password">Password 
                <div class="col-sm-10">
            <input type="password" className="form-control" placeholder="Password" value={this.state.passwordValue} onChange={this.handleChange} name="Password" />
            </div>
                </label>
            </div>
            <input className="c-button" type="submit" value="Submit" />
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




