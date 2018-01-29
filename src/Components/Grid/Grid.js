import React, { Component } from 'react';
import RowItem from './RowItem';
import GridHeaderItem from './GridHeaderItem';
import PropTypes from 'prop-types';
import sortBy from '../../Utils/SortBy'
import './Grid.css';

export default class Grid extends Component {
  
    
    state={
        tasks:[],
        order:'date'
    }
    setOrder=(order) => this.setState({ order });
    
    render() {
        var rows = [];
        this.props.tasks.forEach(
            item => rows.push(<RowItem key={item.id} task={item} />)
        )

        const orderBy=(name)=>(order)=>this.setOrder(`${order?'':'-'}${name}`);

        const { tasks = [],
            updateTask,
            removeTask } = this.props;

        let sortedTasks=sortBy(tasks, this.state.order);

        return (
            <div className='GridTable'>
                <fieldset className='Grid-fieldset'>
                    <legend><strong>{this.props.legend}</strong></legend>
                    <table>
                        <thead>
                        <tr>
                           <GridHeaderItem columnName='IsDone' setSort={orderBy('isDone')}/>
                           <GridHeaderItem columnName='Title' setSort={orderBy('title')}/>
                           <GridHeaderItem columnName='Description' setSort={orderBy('description')}/>
                           <GridHeaderItem columnName='Priority' setSort={orderBy('priority')}/>
                           <GridHeaderItem columnName='Date' setSort={orderBy('date')}/>
                           <GridHeaderItem columnName='Remove'/>
                           </tr>
                        </thead>
                        
                        <tbody>
                            {sortedTasks.map((task) => <RowItem key={task.id} task={task} removeTask={removeTask} updateTask={updateTask} />)}
                        </tbody>
                    </table>
                </fieldset>
            </div>
        );
    }
};

Grid.propTypes =
    {
        tasks: PropTypes.array,
        removeTasks: PropTypes.func,
        updateTask:PropTypes.func,
        setOrder:PropTypes.func
    }