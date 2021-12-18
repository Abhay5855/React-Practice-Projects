import { useState } from "react";


const Add_Todo = () => {
  

     const [todos , setTodos] = useState('');


    //  Submitting the values 

      const handleSubmit = (e) => {

           e.preventDefault();

           setTodos('');

           alert(todos);
       
      }


      const handleTodos = (e) => {

        //    console.log(e.target.value, 'val');

        //    console.log(e.target.name, 'name');


           setTodos(e.target.value);
            
              
      }

      return (
           <>
            {/* Creating an input box which allows to type todo and display them */}


             <div>

                 <form autoComplete="off" onSubmit={handleSubmit}>

                 <input type='text' name='todos' value={todos} onChange={(e) => handleTodos(e)}/>
                
                 <button type="submit">Add</button>
            
                
                
                 </form>

                 {/* <h2>{todos}</h2> */}
                 
             </div>
           
           </>
      )

       
}


export default Add_Todo;