import React, { Component } from "react";
import PropTypes from "prop-types";
import { Form } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";
import "./Filter.css";
import { connect } from "react-redux";
import { onFilterUpdate } from "../../actions/filter";

class Filter extends Component {
  render() {
    return (
      <div>
        <fieldset className="Filter-fieldset">
          <legend>
            <strong>{this.props.legend}</strong>
          </legend>
          <Form>
            <Form.Group inline>
              <Form.Input
                type="checkbox"
                name="isCompletedShown"
                label="Is Completed"
                checked={this.props.filter.showCompleted}
                onChange={ev => {
                  this.props.onFilterUpdate({
                    showCompleted: ev.target.checked
                  });
                }}
              />

              <Form.Input
                type="date"
                name="fromDate"
                className="Filter-DatePicker"
                onChange={ev => {
                  this.props.onFilterUpdate({ dateFrom: ev.target.value });
                }}
              />

              <Form.Input
                type="date"
                name="toDate"
                className="Filter-DatePicker"
                onChange={ev => {
                  this.props.onFilterUpdate({ dateTo: ev.target.value });
                }}
              />
            </Form.Group>
            <Form.Input
              type="text"
              placeholder="Text search (title+description)"
              className="Filter-TextInput"
              onChange={ev => {
                this.props.onFilterUpdate({ text: ev.target.value });
              }}
            />
          </Form>
        </fieldset>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterUpdate: PropTypes.func,
  filter: PropTypes.object
};

const mapStateToProps = state => ({
  filter: state.filter
});

const mapDispatchToProps = {
  onFilterUpdate
};

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
