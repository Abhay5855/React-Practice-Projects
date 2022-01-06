import { useState } from "react/cjs/react.development";
import './notes.css'
const CreateNotes = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  return (
    <>
    
      <div className="container__notes">
        <h3>Create Notes</h3>

         <form required>

             <div className="create__notes">

                  <input type='text' placeholder='Enter Title..'  />

                  <span>Add description</span>

                <textarea placeholder="Add description.."></textarea>

                <button>

                <i class="fas fa-plus-square"></i>

                </button>

             </div>

         </form>
      </div>
    </>
  );
};

export default CreateNotes;
