import React, { Component } from 'react';
import AddTask from '../AddTask';
import Filter from '../Filter';
import Grid from '../Grid'

export default class ToDoListWrapper extends Component {
    render() {
        return (<div>
            <AddTask legend="Add task" />
            <Filter legend="Filter" />
            <Grid legend='Tasks' tasks={tasksToAdd} />
        </div>
        )
    }
}

var tasksToAdd=
[{  isDone:true,
    title:'swimming pool Vania',
    priority:'Major',
    date:'01-18-2018',
    id:1
},
{ isDone:false,
    title:'training',
    priority:'Medium',
    date:'01-22-2018',
    id:2
}
]
