import { useState } from "react";





const Tags = () => {

       const [input , setInput] = useState('');

       const [tags , setTags] = useState([]);
       

    //    State to check the key is down or up

    const [isPressed , setisPressed] = useState(false);



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

              e.preventDefault();


              const tagsCopy = [...tags];

              const poppedElement = tagsCopy.pop();

              setTags(tagsCopy);

              setInput(poppedElement);





        }


        // set the is press state

        setisPressed(false);
         
               
       }


       const onKeyUp = () => {

             setisPressed(true);
             
       }


    //    Delete functionality 

     const handleDelete = (idx) => {
             

         setTags(prev => prev.filter((tag , i) => i !== idx));

        


        
          

                  
     }


      return (
          <>
          <h2>project to create Tags</h2>

          <input value={input} onChange={(e) => setInput(e.target.value)} type='text' onKeyDown={onKeyDown} onKeyUp={onKeyUp}/>

          <ul>

             {
                  tags.map((item , idx) => {

                    return (
                        <div key={idx}>

                            <li>
                                
                                {item}
                                

                                <button onClick={() => handleDelete(idx)}>Delete</button>
                                
                                </li>

                                

                            

                        </div>
                    )
                         
                  })
             }
          </ul>
          </>
      )
}


export default Tags;