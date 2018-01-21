import React, { Component } from 'react';
import './AddTask.css'

//import PropTypes from 'prop-types'

export default class AddTask extends Component {
    render() {
        return (
            <fieldset className='AddTask-fieldset'>
                <legend><strong>{this.props.legend}</strong></legend>
        <form>
            <input type="text" placeholder="Title" className='AddTask-title'/>
            <label>Priority:
            <select name="priority" className='AddTask-priority'>
            <option value="major">Major</option>
            <option value="medium">Medium</option>
            <option value="minor">Minor</option>
            </select>
            </label>
            <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} className='AddTask-datepicker'/>
        <div>
            <textarea placeholder="Description" wrap='hard' className='AddTask-textarea'/>
            </div>
            <div>
                <input type="button" value="Add" className='AddTask-addbtn'/>
                </div>
        </form>
        </fieldset>
    )
    }
};