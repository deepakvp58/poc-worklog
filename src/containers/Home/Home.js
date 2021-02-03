import React, { Component } from 'react';
import { CardColumns } from 'react-bootstrap';
import Employees from '../../components/Employees/Employees';

import NavigationBar from '../../components/NavigationBar/NavigationBar';
import FooterBar from '../../components/FooterBar/FooterBar';

class Home extends Component {
    state = {
        employees: [
            { id: 'deepak', name: 'Deepak', designation: 'Programmer Analyst Trainee'},
            { id: 'gowri', name: 'Gowri', designation: 'Programmer Analyst Trainee' },
            { id: 'janet', name: 'Janet', designation: 'Programmer Analyst Trainee' },
            { id: 'thripura', name: 'Thripura', designation: 'Programmer Analyst Trainee' },
            { id: 'rohith', name: 'Rohith', designation: 'Programmer Analyst Trainee' },
            { id: 'gowshik', name: 'Gowshik', designation: 'Programmer Analyst Trainee' },
            { id: 'siva', name: 'Siva', designation: 'Programmer Analyst Trainee' },
            { id: 'barath', name: 'Barath', designation: 'Programmer Analyst Trainee' },
            { id: 'murali', name: 'Murali', designation: 'Programmer Analyst Trainee' },
            { id: 'nagarjun', name: 'Nagarjun', designation: 'Programmer Analyst Trainee' },
        ],
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