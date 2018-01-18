import React, { Component } from 'react';

export default class AddTask extends Component {
    render() {
        return (
        <form>
            <input type="text" placeholder="Text"/>
            <label>Priority:
            <select name="priority">
            <option value="major">Major</option>
            <option value="medium">Medium</option>
            <option value="minor">Minor</option>
            </select>
            </label>
            <input type="date"/>
        <div>
            <textarea rows='5' columns='50' label="description"/>
            </div>
            <div><input type="button" value="Add"/>
                </div>
        </form>
    )
    }
}