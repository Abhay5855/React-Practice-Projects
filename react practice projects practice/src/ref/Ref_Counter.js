import { useEffect, useRef, useState } from "react";





const Ref_Counter = () => {

           const [count , setCount]  = useState(0);


           const id = useRef(null);
          
           const Clear = () => {
                  window.clearInterval(id.current);


                  console.log(id.current);

                 
           }


           useEffect(() => {

                id.current  = window.setInterval(() => {


                      setCount((c) => c + 1);

                  }, 1000);

                  

                 
                   return Clear;

           },[])



          
           return (
                <>
                <h2>useRef counter example</h2>

                <h2>{count}</h2>

                <button onClick={Clear}>Stop</button>


                </>
           )
}


export default Ref_Counter;