import { Button } from 'react-bootstrap';
import React, { Component } from 'react';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const style = { 
    width: '15rem',
    height: '150px',
    margin: '5% 10% 5% 30%'
}

class Employee extends Component {
    render() {
        return (
            <Card className="text-center" style={style} hoverable="true">
                <Card.Title>{this.props.name}</Card.Title>
                <Card.Subtitle>{this.props.designation}</Card.Subtitle>
                <Link to="/WorkLog">
                    <Button variant="primary">View log</Button>
                </Link>
            </Card>
        );
    }
}

export default Employee;