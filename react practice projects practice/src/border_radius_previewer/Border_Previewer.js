import { useState } from "react/cjs/react.development";
import './border_preview.css'
const Border_Previewer = () => {
  const [top, setTop] = useState(40);
  const [bottom, setBottom] = useState(0);
  const [right, setRight] = useState(0);
  const [left, setLeft] = useState(0);
     


   const handleSubmit = (e) => {

               e.preventDefault();
   }


 

  return (
    <>

       <form onSubmit={handleSubmit}>

       <label for="Border-top">Border-Top</label>

<input type='text' value={top} onChange={(e) => setTop(e.target.value)} />

<br />

<label for="Border-right">Border-right</label>

<input type='text' value={right} onChange={(e) => setRight(e.target.value)}/>

<br />

<label for="Border-bottom">Border-bottom</label>

<input type='text' value={bottom} onChange={(e) => setBottom(e.target.value)} />

<br />

<label for="Border-left">Border-left</label>

<input type='text' value={left} onChange={(e) => setLeft(e.target.value)} />

<br/>

<br/>

       </form>
     

      <div style={{width:'100px' , height:'100px' ,border: '1px solid black', borderRadius:`${top}% , ${right}% , ${bottom}% , ${left}%`}} ></div>
    </>
  );
};

export default Border_Previewer;
