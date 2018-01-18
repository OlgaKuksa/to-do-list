import React, { Component } from 'react';

export default class Filter extends Component {
    render() {
        return (
            <form>
                <label>
                    <input type="checkbox" name="isCompletedShown" />
                    Show completed
            </label>
                <input type="date" name="fromDate" />
                <input type="date" name="toDate" />
                <div>
                    <input type="text" placeholder="Text search (title+description" />
                </div>
            </form>
        )
    }
}