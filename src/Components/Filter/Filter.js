import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Filter.css";

class Filter extends Component {
  render() {
    return (
      <div>
        <fieldset className="Filter-fieldset">
          <legend>
            <strong>{this.props.legend}</strong>
          </legend>
          <form>
            <label className="Filter-isCompletedCb">
              <input
                type="checkbox"
                name="isCompletedShown"
                checked={this.props.filter.showCompleted}
                onChange={ev => {
                  this.props.onFilterUpdate({
                    showCompleted: ev.target.checked
                  });
                }}
              />Show completed
            </label>
            <input
              type="date"
              name="fromDate"
              className="Filter-DatePicker"
              onChange={ev => {
                this.props.onFilterUpdate({ dateFrom: ev.target.value });
              }}
            />
            <input
              type="date"
              name="toDate"
              className="Filter-DatePicker"
              onChange={ev => {
                this.props.onFilterUpdate({ dateTo: ev.target.value });
              }}
            />
            <div>
              <input
                type="text"
                placeholder="Text search (title+description"
                className="Filter-TextInput"
                onChange={ev => {
                  this.props.onFilterUpdate({ text: ev.target.value });
                }}
              />
            </div>
          </form>
        </fieldset>
      </div>
    );
  }
}

Filter.propTypes = {
  onFilterUpdate: PropTypes.func,
  filter: PropTypes.object
};

export default Filter;
