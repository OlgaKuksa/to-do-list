import React, { Component } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import Filter from './Components/Filter';
import Grid from './Components/Grid'


class App extends Component {
  render() {
    return (
      <div>
      <AddTask legend="Add task"/>
      <Filter legend="Filter"/>
      <Grid legend='Tasks' tasks={tasksToAdd}/>
      </div>
    );
  }
}

export default App;

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
