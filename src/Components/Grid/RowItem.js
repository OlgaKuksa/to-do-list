import React, { Component } from "react";
import PropTypes from "prop-types";

export default class RowItem extends Component {
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
        <td>{task.title}</td>
        <td>{task.description}</td>
        <td>{task.priority}</td>
        <td>{task.date}</td>
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
