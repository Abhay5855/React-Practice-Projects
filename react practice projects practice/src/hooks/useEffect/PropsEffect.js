


import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropsCounter from './PropsCounter';

function PropsEffect() {

       const [time , setTime] = useState(1000);

    return (
        <div>

            <input value={time} onChange={() => setTime(e.target.value)}/>
          

          <PropsCounter  time={time}/>

            
        </div>
    )
}

export default PropsEffect
