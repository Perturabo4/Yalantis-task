import React, {useState, useEffect} from 'react';

import Loader from '../loader';
import MonthsList from '../months-list';
import {monthNames} from '../../utils/monthNames';
import './app.css';

function App() {

  const [state, setState] = useState(null);

  useEffect(() => {
    async function getUsers() {
      let users = [];
      


      try {
        const data = await fetch(`https://yalantis-react-school-api.yalantis.com/api/task0/users`);
        users = await data.json();
        
        const monthsWithUsers = users.reduce((acc, userObj) => {

        const month = userObj.dob.slice(5, 7);

          if(acc[month]) {
            acc[month].users = acc[month].users.concat(userObj); 
          } else {
            acc[month] = {
                          users: [userObj],
                          isMousOver: false,
                          monthName: monthNames[month]
                          };
          }

          return acc;

        }, {});

        setState(monthsWithUsers);

      } catch (err) {
        console.error(err)
      }

    }

    getUsers();
  },[]);

  const mouseOverHandler = (month, isOver) => {

    setState({...state, [month]: {...state[month], isMousOver: isOver}});

  }

  return (
    <div className="wrapper">
       {  
         state 
          ? <MonthsList 
              months={state} 
              onMouseOver={mouseOverHandler} 
            />
          : <Loader /> 
        }
    </div>
  );
}

export default App;
