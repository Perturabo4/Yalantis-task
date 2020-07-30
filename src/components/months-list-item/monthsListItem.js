import React from 'react';
import MonthsListUsers from '../months-list-users';
import getColor from '../../utils/getColor';
import './monthsListItem.css';

const MonthsListItem = ({month, monthName, users, isMousOver, onMouseOver}) => {

    return (
        <div 
            style={{ backgroundColor: getColor(users.length)}}
            onMouseOver={() => onMouseOver(month, true)}
            onMouseLeave={() => onMouseOver(month, false)}
            className='month'
        >
            {monthName}
            {isMousOver && <MonthsListUsers users={users}/>}
        </div>
    )
}

export default MonthsListItem;