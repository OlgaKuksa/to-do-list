import React, { Component } from 'react';

export default class RowItem extends Component {
    render() {
        return (
            <tr>
                <td><input type='checkbox' disabled/></td>
                <td>{this.props.title}</td>
                <td>{this.props.priority}</td>
                <td>{this.props.date}</td>
            </tr>
        )
    }
}