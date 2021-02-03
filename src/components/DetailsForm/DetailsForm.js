import React, { Component } from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import validator from 'validator';

import FooterBar from '../FooterBar/FooterBar';

class DetailsForm extends Component {
    state = {
        names: ['Deepak', 'Rohith', 'Gowri', 'Janet', 'Thripura', 'Gowshik', 'Shiva', 'Bharath', 'Murali', 'Nagarjun'],
        errors: {
            task: '',
            effor: ''
        },
    }

    submitHandler = (event) => {
        let task = event.target.task.value;
        let effort = event.target.effort.value;
        let flag = 1;
        const nonErrors = {
            task: '',
            effort: ''
        }
        if(validator.isEmpty(task, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.task = 'task must not be empty';
            this.setState({
                errors: errors
            });
        }
        if(validator.isEmpty(effort, {ignore_whitespace: false})){
            flag = 0;
            const errors = this.state.errors;
            errors.effort = 'effort must not be empty';
            this.setState({
                errors: errors
            });
        } else if(!validator.isFloat(effort, {min: 1, max: 24})){
            flag = 0;
            const errors = this.state.errors;
            errors.effort = 'effort must be a number and between 1 to 24';
            this.setState({
                errors: errors
            });
        }
        if(flag === 1){
            console.log(event.target.username.value);
            console.log(event.target.project.value);
            console.log(event.target.task.value);
            console.log(event.target.effort.value);
            this.setState({
                errors: nonErrors
            });
        }
    }

    dropdownHandler = () => {
        let items = [];         
        for (let i = 0; i < this.state.names.length; i++) {            
             items.push(<option key={i} value={this.state.names[i]}>{this.state.names[i]}</option>);  
        }
        return items;
    }

    render() {
        const border = {
            marginBottom: '25%'
        }
        return (
            <div className="containers">
                <NavigationBar />
                <div className="mt-5 d-flex justify-content-center" style={border}>
                <Form onSubmit={this.submitHandler}>
                    <Form.Group>
                        <Form.Label> Select employee Name:</Form.Label>
                        <Form.Control as="select" name="username">
                            {this.dropdownHandler()}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Select your Project:</Form.Label>
                        <Form.Control as="select" name="project">
                            <option value="Met life">Met Life</option>
                            <option value="GSSP">GSSP</option>
                        </Form.Control> 
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Enter the Task:</Form.Label>
                        <Form.Control as="textarea" rows={3}  name="task" />
                        { this.state.errors.task !== '' ? <div>{this.state.errors.task}</div> : <div /> }
                    </Form.Group>
                    <Form.Group>
                        <Form.Label>Time spent:</Form.Label>
                        <Form.Control type="text" name="effort" />
                        { this.state.errors.effort !== '' ? <div>{this.state.errors.effort}</div> : <div /> }
                    </Form.Group>
                    <Button type="submit" variant="primary">Submit</Button>
                </Form>
                </div>
                <FooterBar />
            </div>
        );
    }
}

export default DetailsForm;