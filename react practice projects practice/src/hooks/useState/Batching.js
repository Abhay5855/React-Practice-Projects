


import React from 'react'
import { useState } from 'react/cjs/react.development';




function Batching() {

    const [count , setCount] = useState(0);
    return (
        <div onClick={() => setCount(count + 1)}>
 

            Parent Clicked {count} times.
            


            <BatchingChild />


        </div>
    )
}

export default Batching;



function BatchingChild() {


        let [count , setCount] = useState(0);
        return (
            <div onClick={() => setCount(count + 1)}>


                Child clicked {count} times.


            </div>
        )
}



