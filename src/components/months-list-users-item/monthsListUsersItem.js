import React from 'react';

const MonthsListUsersItem = ({firstName, lastName}) => {
    const fullName = `${firstName} ${lastName}`;
    
    return <li>{fullName}</li>;
}

export default MonthsListUsersItem;