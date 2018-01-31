import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Filter.css'

class Filter extends Component {
    render() {
        return (
            <div>
                <fieldset className='Filter-fieldset'>
                    <legend><strong>{this.props.legend}</strong></legend>
                    <form>
                        <label className="Filter-isCompletedCb">
                            <input type="checkbox" name="isCompletedShown" checked={this.props.filter.showCompleted} 
                            onChange={(ev)=>{this.props.onFilterUpdate({showCompleted:ev.target.checked})}}/>Show completed
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
};

Filter.propTypes={
    onFilterUpdate:PropTypes.func,
    filter:PropTypes.object
};


export default Filter;