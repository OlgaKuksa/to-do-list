import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Grid.css'

class GridHeaderItem extends Component {
    drawSortButtons() {
        return (
            <span>
                <button className='noSortBtn' onClick={(ev) => {this.props.setSort(true); this.changeStyle(ev)}}>▲</button>
                <button className='noSortBtn' onClick={(ev) => {this.props.setSort(false); this.changeStyle(ev)}}>▼</button>
            </span>
        )
    };

    changeStyle(ev)
    {
        var btn=document.getElementsByClassName('sortBtn')[0];
        btn&&btn.setAttribute('class','noSortBtn');
        ev.target.setAttribute('class','sortBtn');
    }


    render() {
        return (
            <th><label>{this.props.columnName}</label>
            {this.props.setSort&&this.drawSortButtons()}
            </th>
        );
    };
}

GridHeaderItem.propTypes={
    columnName:PropTypes.string,
    setSort: PropTypes.func
}

export default GridHeaderItem;