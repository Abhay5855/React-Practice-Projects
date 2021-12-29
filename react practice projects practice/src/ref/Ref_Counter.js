import { useEffect, useState } from "react";





const Ref_Counter = () => {

           const [count , setCount]  = useState(0);



           useEffect(() => {

                  window.setInterval(() => {


                      setCount((c) => c + 1);

                  }, 1000);
           },[])



          
           return (
                <>
                <h2>useRef counter example</h2>

                <h2>{count}</h2>


                </>
           )
}


export default Ref_Counter;