import { useEffect, useRef } from "react";





const Timer = () => {

    const timerRef = useRef();



    useEffect(() => {

           const id = setInterval(() => {

                console.log('second has passed');
               
           },1000);


           timerRef.current = id;

        return () => clearInterval(timerRef.current);

           
    })

     return (
         <>
         </>
     )
}


export default Timer;