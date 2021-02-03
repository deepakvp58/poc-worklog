import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

import Aux from '../../hoc/Auxiliary';
import NavigationBar from '../NavigationBar/NavigationBar';
import FooterBar from '../FooterBar/FooterBar';

const logData = [
    {
        date: '02-03-2021',
        logDetails: [
            {
                task: 'testing',
                timeSpent: '2'
            },
            {
                task: 'designing',
                timeSpent: '1'
            }
        ]
    },
    {
        date: '02-04-2021',
        logDetails: [
            {
                task: 'testing',
                timeSpent: '1'
            },
            {
                task: 'developing',
                timeSpent: '3'
            }
        ]
    },
    {
        date: '02-05-2021',
        logDetails: [
            {
                task: 'deploying',
                timeSpent: '2'
            },
            {
                task: 'devoloping',
                timeSpent: '2'
            }
        ]
    },
    {
        date: '02-06-2021',
        logDetails: [
            {
                task: 'deploying',
                timeSpent: '3'
            },
            {
                task: 'testing',
                timeSpent: '1'
            }
        ]
    }
];

class WorkLog extends Component {
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
                            <th>Project-Met Life</th>
                            <th>Project-Met Life:Effort</th>
                            <th>Project-GSSP</th>
                            <th>Project-GSSP:Effort</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            logData.map((data, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{data.date}</td>
                                        {
                                            data.logDetails.map((logDetail, index) => {
                                                return <Aux key={index}>
                                                        <td>{logDetail.task}</td>
                                                        <td>{logDetail.timeSpent}</td>
                                                </Aux>
                                            })
                                        }
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