import { useRef, useState } from "react";




const Reference = () => {

         const [val1 , setVal1] = useState(0);

         const [val2 , setVal2] = useState('');

         const inputOne = useRef();

         const inputTwo = useRef();

        const handleOne = () => {

             inputOne.current.style.width = '400px';

           
             
               
        }

        const handleTwo = () => {

            
             
        }

           

        //  console.log(inputOne.current);


         return (
             <>


             
             <h2>Use ref hook</h2>

             <input type='number'  ref={inputOne} value={val1} onChange={(e) => setVal1(e.target.value)}/>

             <br/>
             <input type='text'  ref={inputTwo} value={val2} onChange={(e) => setVal2(e.target.value)}/>

             <br />

             <button onClick={() => handleOne()}>one</button>
             <button onClick={() => handleTwo()}>two</button>
             </>
         )
}

export default Reference;