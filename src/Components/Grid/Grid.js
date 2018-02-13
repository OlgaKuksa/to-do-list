import React, { Component } from "react";
import RowItem from "./RowItem";
import GridHeaderItem from "./GridHeaderItem";
import PropTypes from "prop-types";
import sortBy from "../../Utils/SortBy";
import "./Grid.css";
import { Table } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { removeTask, updateTask } from "../../actions/tasks";

class Grid extends Component {
  state = {
    order: "date"
  };

  setOrder = order => this.setState({ order });

  render() {
    var rows = [];
    this.props.tasks.forEach(item =>
      rows.push(<RowItem key={item.id} task={item} />)
    );

    const orderBy = name => order =>
      this.setOrder(`${order ? "" : "-"}${name}`);

    const { tasks = [], updateTask, removeTask } = this.props;

    let sortedTasks = sortBy(tasks, this.state.order);

    return (
      <div className="GridTable">
        <fieldset className="Grid-fieldset">
          <legend>
            <strong>{this.props.legend}</strong>
          </legend>
          <Table celled>
            <thead>
              <tr>
                <GridHeaderItem
                  columnName="IsDone"
                  setSort={orderBy("isDone")}
                />
                <GridHeaderItem columnName="Title" setSort={orderBy("title")} />
                <GridHeaderItem
                  columnName="Description"
                  setSort={orderBy("description")}
                />
                <GridHeaderItem
                  columnName="Priority"
                  setSort={orderBy("priority")}
                />
                <GridHeaderItem columnName="Date" setSort={orderBy("date")} />
                <GridHeaderItem columnName="Remove" />
              </tr>
            </thead>

            <tbody>
              {sortedTasks.map(task => (
                <RowItem
                  key={task.id}
                  task={task}
                  removeTask={this.props.removeTask}
                  updateTask={this.props.updateTask}
                />
              ))}
            </tbody>
          </Table>
        </fieldset>
      </div>
    );
  }
}

Grid.propTypes = {
  tasks: PropTypes.array,
  removeTasks: PropTypes.func,
  updateTask: PropTypes.func,
  setOrder: PropTypes.func
};

const mapStateToProps = state => {
  let tasks = state.tasks;
  let filter = state.filter;
  let filteredTasks = filter.showCompleted
    ? tasks
    : tasks.filter(item => !item.isDone);
  filteredTasks = filter.dateFrom
    ? filteredTasks.filter(item => item.date >= filter.dateFrom)
    : filteredTasks;
  filteredTasks = filter.dateTo
    ? filteredTasks.filter(item => item.date <= filter.dateTo)
    : filteredTasks;
  filteredTasks = filter.text
    ? filteredTasks.filter(
        item =>
          item.title.includes(filter.text) ||
          item.description.includes(filter.text)
      )
    : filteredTasks;
  return {
    tasks: filteredTasks
  };
};

const mapDispatchToProps = {
  removeTask,
  updateTask
};

export default connect (mapStateToProps, mapDispatchToProps)(Grid);