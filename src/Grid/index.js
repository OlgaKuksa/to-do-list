import React, { Component } from 'react';
import RowItem from './RowItem'

export default class Grid extends Component {
    render() {
        return (
            <table>
                <tbody>
                    <tr>
                        <th>Done</th>
                        <th>Title</th>
                        <th>Priority</th>
                        <th>Date</th>
                        </tr>
                        <RowItem isDone="true" title="Swimming pool Vania" priority="Major" date="01-18-2018"/>
                        <RowItem isDone="false" title="Training" priority="Medium" date="01-18-2018"/>
                </tbody>
            </table>
        );
    }
}