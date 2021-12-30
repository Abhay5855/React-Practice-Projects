
import { useState } from 'react';
import data from './data';
import People from './People';

const Birthday = ()=> {


    const [people , setPeople] = useState(data);

      const ClearBirthday = () => {

          console.log('list cleared ');

          setPeople([]);
           
      }

       return (
           <>
           <h2>Birthday Remainder App</h2>

           <h3>{people.length} Birthdays today</h3>


           <People people={people} setPeople={setPeople}/>

           <button onClick={ClearBirthday}>Clear List</button>


           </>
       )
}


export default Birthday;