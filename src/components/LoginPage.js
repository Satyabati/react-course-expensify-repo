import React  from "react";
import {connect} from 'react-redux';
import { startLogin } from  '../actions/auth';
export class LoginPage extends React.Component{
 
    render(){
        return (
        <div>
        <h1>Login Page</h1>
        <button onClick={this.props.startLogin}>Login</button>
        </div>
        )
    }
}

const mapDispatchedToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
    });

export default connect(undefined, mapDispatchedToProps)(LoginPage);