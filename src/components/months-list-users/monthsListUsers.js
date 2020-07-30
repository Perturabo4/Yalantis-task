import React from 'react';
import MonthsListUsersItem from '../months-list-users-item';
import './monthsListUsers.css';

const MonthsListUsers = ({users}) => {
    return (
        <div className='users-list-wrapper'>
            <ul className='users-list'>
                {users.map(({id, firstName, lastName}) => {
                return  <MonthsListUsersItem 
                        firstName={firstName} 
                        lastName={lastName} 
                        key={id}
                    />
                })}
            </ul>
        </div>
    )
}

export default MonthsListUsers;