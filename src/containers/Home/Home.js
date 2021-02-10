import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import Employees from '../../components/Employees/Employees';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import FooterBar from '../../components/FooterBar/FooterBar';
import API from '../../api';

class Home extends Component {
    state = {
        employees: []
    }

    componentDidMount() {
        API.get(`view/viewEmployees`)
            .then(response => {
                const employees = response.data;
                this.setState({
                    employees
                });
            })
    }

    render() {
        return (
            <div>
                <NavigationBar />
                <CardColumns>
                    <Employees 
                        employees={this.state.employees} />
                </CardColumns>
                <FooterBar />
            </div>
        );
    }
}

export default Home;