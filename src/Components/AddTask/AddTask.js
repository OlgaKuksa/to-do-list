import React, { Component } from "react";
import "./AddTask.css";
import PropTypes from "prop-types";
import { Button, Form, Message } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import { connect } from "react-redux";
import { addTask, updateTask } from "../../actions/tasks";
import { clearTask } from "../../actions/editedTask";

class AddTask extends Component {
  onSubmit(ev) {
    ev.preventDefault();
    let formData = [...ev.target.querySelectorAll("[name]")].reduce(
      (hash, item) => ({
        ...hash,
        [item.getAttribute("name")]: item.value
      }),
      {}
    );
    if (this.props.editedTask == {} || this.props.editedTask == null) {
      this.props.addTask(formData);
    } else {
      formData.id = this.props.editedTask.id;
      this.props.updateTask(formData);
      this.props.clearTask();
    }
    ev.target.reset();
  }

  render() {
    return (
      <fieldset className="AddTask-fieldset">
        <legend>
          <strong>{this.props.legend}</strong>
        </legend>
        <Form onSubmit={this.onSubmit.bind(this)}>
          <Form.Group>
            <Form.Input
              type="text"
              placeholder="Title"
              name="title"
              defaultValue={
                this.props.editedTask == null ? "" : this.props.editedTask.title
              }
            />

            <select
              name="priority"
              defaultValue={
                this.props.editedTask == null
                  ? 1
                  : this.props.editedTask.priority
              }
            >
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Low">Low</option>
            </select>

            <Form.Field>
              <input
                type="date"
                defaultValue={
                  this.props.editedTask == null
                    ? new Date().toISOString().substring(0, 10)
                    : this.props.editedTask.date
                }
                className="AddTask-datepicker"
                name="date"
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <textarea
              className="AddTask-textarea"
              placeholder="Description"
              wrap="hard"
              className="AddTask-textarea"
              name="description"
              defaultValue={
                this.props.editedTask == null
                  ? ""
                  : this.props.editedTask.description
              }
            />
          </Form.Field>
          <div>
            <Button primary className="ui right floated button">
              {this.props.legend}
            </Button>
          </div>
        </Form>
      </fieldset>
    );
  }
}

AddTask.propTypes = {
  legend: PropTypes.string
};

const mapStateToProps = state => ({
  editedTask: state.editedTask
});

const mapDispatchToProps = {
  addTask,
  clearTask,
  updateTask
};

export default connect(mapStateToProps, mapDispatchToProps)(AddTask);
