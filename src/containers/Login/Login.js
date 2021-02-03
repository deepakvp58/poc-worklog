import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';
import validator from 'validator';

class Login extends Component {
    state = {
        email: '',
        password: '',
        errors: {
            email: '',
            password: ''
        },
        isLoggedIn: false
    }

    emailChangeHandler = (event) => {
        this.setState({email: event.target.value});
    }

    passwordChangeHandler = (event) => {
    this.setState({password: event.target.value});
    }

    loginHandler = (event) => {
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        let flag = 1;
        const nonErrors = {
            email: '',
            password: ''
        }
        if(validator.isEmpty(email, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.email = 'email must not be empty';
            this.setState({
                errors: errors
            });
        }
        else if(!validator.isEmail(email)){
            flag = 0;
            const errors = this.state.errors;
            errors.email = 'email is invalid';
            this.setState({
                errors: errors
            });
        }
        if(validator.isEmpty(password, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.password = 'password must not be empty';
            this.setState({
                errors: errors
            });
        }
        if(flag === 1){
            if(this.state.email === 'admin@mail.com' && this.state.password === 'admin') {
                this.setState({
                    errors: nonErrors,
                    isLoggedIn : true
                });
            } else {
                this.setState({
                    errors: nonErrors
                });
                console.log('Error');
            }
        }
    }

    render() {
        const border = {
            margin: '12% 40% 10% 40%'
        }
        if(this.state.isLoggedIn){
            return <Redirect to='/Home' />
        }
        return (
            <div style={border}>
                <Form onSubmit={this.loginHandler}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control 
                            name="email"
                            type="text" 
                            placeholder="Enter email" 
                            value={this.state.email} 
                            onChange={this.emailChangeHandler} />
                        { this.state.errors.email !== '' ? <div>{this.state.errors.email}</div> : <div /> }
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control 
                            name="password"
                            type="password" 
                            placeholder="Enter password" 
                            value={this.state.password} 
                            onChange={this.passwordChangeHandler} />
                        { this.state.errors.password !== '' ? <div>{this.state.errors.password}</div> : '' }
                    </Form.Group>
                    <Button 
                        variant="primary" 
                        type="submit">Login</Button>
                </Form>
            </div>
        );
    }
}

export default Login;