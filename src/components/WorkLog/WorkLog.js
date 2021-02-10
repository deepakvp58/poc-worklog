import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Aux from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';
import FooterBar from '../FooterBar/FooterBar';
import API from '../../api';

class WorkLog extends Component {

    constructor(props) {
        super(props);
        this.state = {
            employeeName: this.props.location.propsValue.employeeName,
            logData: []
        }
    }

    componentDidMount() {
        API.get(`view/viewDetails/${this.state.employeeName}`)
            .then(response => {
                console.log(response.data)
                const logData = response.data;
                this.setState({
                    logData
                });
            })
        
    }

    render() {
        const border = {
            marginBottom: '65%'
        }
        return (
            <Aux>
                <NavigationBar />
                <Table variant="light" striped hover responsive style={border}>
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Project Name</th>
                            <th>Work done</th>
                            <th>Time spent</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.logData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.loggedDate}</td>
                                        <td>{data.projectName}</td>
                                        <td>{data.taskDone}</td>
                                        <td>{data.timeSpentOnProject}</td>
                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </Table>
                <FooterBar />
            </Aux>
        );
    }
}

export default WorkLog;