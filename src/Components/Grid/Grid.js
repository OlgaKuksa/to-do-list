import React, { Component } from 'react';
import RowItem from './RowItem'
import './Grid.css'

export default class Grid extends Component {
    render() {
        var rows=[];
        this.props.tasks.forEach(
            item=>rows.push(<RowItem id={item.id} task={item}/>)
        )

        return (
            <div className='GridTable'>
            <fieldset className='Grid-fieldset'>
                <legend><strong>{this.props.legend}</strong></legend>
            <table>
                <thead>
                    <tr className='GridHeader'>
                        <th>Done <span>▲</span><span>▼</span></th>
                        <th>Title <span>▲</span><span>▼</span></th>
                        <th>Priority <span>▲</span><span>▼</span></th>
                        <th>Date <span>▲</span><span>▼</span></th>
                        </tr>
                </thead>
                <tbody>
                        {rows}  
                </tbody>
            </table>
            </fieldset>
            </div>
        );
    }
};
