import React, { Component } from 'react';
import './Filter.css'

export default class Filter extends Component {
    render() {
        return (
            <div>
                <fieldset className='Filter-fieldset'>
                    <legend><strong>{this.props.legend}</strong></legend>
                    <form>
                        <label className="Filter-isCompletedCb">
                            <input type="checkbox" name="isCompletedShown" />Show completed
                        </label>
                        <input type="date" name="fromDate" className="Filter-DatePicker" />
                        <input type="date" name="toDate" className="Filter-DatePicker"/>
                        <div>
                            <input type="text" placeholder="Text search (title+description" className="Filter-TextInput"/>
                        </div>
                    </form>
                </fieldset>
            </div>
        )
    }
}