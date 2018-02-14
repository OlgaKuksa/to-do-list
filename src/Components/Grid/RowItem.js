import React, { Component } from "react";
import PropTypes from "prop-types";
import {setEditedTask} from '../../actions/editedTask';
import {connect} from 'react-redux'

class RowItem extends Component {
  changeTaskProp(propName, value) {
    this.props.updateTask({ [propName]: value, id:this.props.task.id });
  }
  render() {
    const { task, removeTask } = this.props;
    return (
      <tr>
        <td>
          <input
            type="checkbox"
            checked={task.isDone||false}
            onChange={ev => this.changeTaskProp("isDone", ev.target.checked)}
          />
        </td>
        <td onDoubleClick={()=>this.props.setEditedTask(task)}>{task.title}</td>
        <td onDoubleClick={()=>this.props.setEditedTask(task)}>{task.description}</td>
        <td onDoubleClick={()=>this.props.setEditedTask(task)}>{task.priority}</td>
        <td onDoubleClick={()=>this.props.setEditedTask(task)}>{task.date}</td>
        <td>
          <button onClick={() => removeTask(task.id)}>X</button>
        </td>
      </tr>
    );
  }
}

RowItem.propTypes = {
  task: PropTypes.object,
  removeTask: PropTypes.func,
  updateTask: PropTypes.func
};



const mapDispatchToProps={
  setEditedTask
};

export default connect(undefined, mapDispatchToProps)(RowItem)