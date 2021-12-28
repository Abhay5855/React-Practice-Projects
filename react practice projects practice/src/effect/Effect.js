import { useState } from "react";




const Effect = () => {

         const [currentDate , setCurrentdate] = useState(new Date());

       return (

           <div style={{textAlign:'center'}}>
             <h2>An example of us
               eEffect</h2>

               <h2>{currentDate.toLocaleTimeString()}</h2>
           </div>


         
       )
}


export default Effect;