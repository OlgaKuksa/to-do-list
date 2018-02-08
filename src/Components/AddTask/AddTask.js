import React, { Component } from "react";
import "./AddTask.css";
import PropTypes from "prop-types";
import { Button, Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

export default class AddTask extends Component {
  onSubmit(ev) {
    ev.preventDefault();
    let formData = [...ev.target.querySelectorAll("[name]")].reduce(
      (hash, item) => ({
        ...hash,
        [item.getAttribute("name")]: item.value
      }),
      {}
    );
    this.props.onSubmit(formData);
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
            <Form.Input type="text" placeholder="Title" name="title" />

            <select name="priority" defaultValue={1}>
              <option value="Normal">Normal</option>
              <option value="Urgent">Urgent</option>
              <option value="Low">Low</option>
            </select>

            <Form.Field>
              <input
                type="date"
                defaultValue={new Date().toISOString().substring(0, 10)}
                className="AddTask-datepicker"
                name="date"
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <textarea
              placeholder="Description"
              wrap="hard"
              className="AddTask-textarea"
              name="description"
            />
          </Form.Field>
          <div>
            <Button primary className="ui right floated button">
              Add Task
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
