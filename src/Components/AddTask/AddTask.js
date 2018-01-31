import React, { Component } from 'react';
import './AddTask.css'
import PropTypes from 'prop-types'

export default class AddTask extends Component {
    onSubmit(ev){
        ev.preventDefault();
        let formData=[...ev.target.querySelectorAll('[name]')]
        .reduce((hash, item)=>(
            
                {
                    ...hash,
                    [item.getAttribute('name')]:item.value
                }
            ), {}
        );
    this.props.onSubmit(formData);
    ev.target.reset();
    }

    render() {
        return (
            <fieldset className='AddTask-fieldset'>
                <legend><strong>{this.props.legend}</strong></legend>
        <form onSubmit={this.onSubmit.bind(this)}>
            <input type="text" placeholder="Title" className='AddTask-title' name='title'/>
            <label>Priority:
            <select name="priority" className='AddTask-priority' name='priority' defaultValue={2}>
            <option value="Urgent">Urgent</option>
            <option value="Normal">Normal</option>
            <option value="Low">Low</option>
            </select>
            </label>
            <input type="date" defaultValue={new Date().toISOString().substring(0, 10)} className='AddTask-datepicker' name='date'/>
        <div>
            <textarea placeholder="Description" wrap='hard' className='AddTask-textarea' name='description'/>
            </div>
            <div>
                <input type="submit" value="Add" className='AddTask-addbtn'/>
                </div>
        </form>
        </fieldset>
    )
    }
};

AddTask.propTypes={
    legend: PropTypes.string
}