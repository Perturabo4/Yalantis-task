import React  from 'react';
import MonthsListItem from '../months-list-item';
import './monthsList.css';


const MonthsList = ({months, onMouseOver}) => {
    return Object.keys(months).sort().map( key => {
        return <MonthsListItem 
                    month={key} 
                    users={months[key]['users']}
                    isMousOver={months[key]['isMousOver']}  
                    monthName={months[key]['monthName']}
                    key={key}
                    onMouseOver={onMouseOver}
                />
    });
}

export default MonthsList;