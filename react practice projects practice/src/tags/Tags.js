import { useState } from "react";





const Tags = () => {

       const [input , setInput] = useState('');

       const [tags , setTags] = useState([]);



       const  onKeyDown = (e) => {

        const {key} = e;

        const trimmedInput = input.trim();

     

        if(key === ',' && trimmedInput.length !== 0 && !tags.includes(trimmedInput)){
             
                e.preventDefault();

                setTags((prev) => [...prev , trimmedInput]);

                setInput('');

                console.log(tags);
        }

        if(key === 'Backspace' && !input.length && tags.length){



        }

         
               
       }


      return (
          <>
          <h2>project to create Tags</h2>

          <input value={input} onChange={(e) => setInput(e.target.value)} type='text' onKeyDown={onKeyDown}/>

          <ul>

             {
                  tags.map((item , idx) => {

                    return (
                        <div key={idx}>

                            <li>{item}</li>

                            

                        </div>
                    )
                         
                  })
             }
          </ul>
          </>
      )
}


export default Tags;