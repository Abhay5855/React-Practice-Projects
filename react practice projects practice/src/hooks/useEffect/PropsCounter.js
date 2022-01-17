

import React, { useEffect } from 'react'
import StateCounter from '../useState/StateCounter';
 
function PropsCounter({time}) {

      const [count , setCount] = useState(0);


    useEffect(() => {
           const interval = setInterval(() => {

               StateCounter(count => count + 1);
               
           }, time);
    })


    






    return (
        <div>
              

         

            
        </div>
    )
}

export default PropsCounter
