

import React from 'react';
import { useState } from 'react';
import ToDisplay from './ToDisplay';




function Display_Component() {

       const [display , setDisplay] = useState(false);

        const demo = () => !display && <ToDisplay />
    return (
          
        <div>

            <h2>Cleanup </h2>

            <button onClick={() => setDisplay(true)}>Does Abhay Knows</button>

            {demo()}
            
        </div>
    )
}

export default Display_Component;
