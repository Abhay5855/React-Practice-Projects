import { useState } from "react/cjs/react.development";
import DisplayNotes from "./DisplayNotes";
import "./notes.css";
const CreateNotes = () => {
  const [heading, setHeading] = useState("");
  const [description, setDescription] = useState("");

  const [allnotes, setAllnotes] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (heading !== "" && description !== "") {
      const notes = {
        heading: heading,
        description: description,
      };

      console.log(notes);

      setAllnotes((prev) => {
        return [...prev, notes];
      });

      console.log(typeof allnotes);

      console.log(allnotes);

      console.log("clicked", allnotes);
    }

    setDescription("");
    setHeading("");
  };

  return (
    <>
      <div className="container__notes">
        <h3>Create Notes</h3>

        <form required autoComplete="off" onSubmit={handleSubmit}>
          <div className="create__notes">
            <input
              type="text"
              placeholder="Enter Title.."
              value={heading}
              onChange={(e) => setHeading(e.target.value)}
            />

            {/* <span>Add description</span> */}

            <textarea
              placeholder="Add description.."
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </div>

          <button type="submit" className="notes__submit">
            <i class="fas fa-plus"></i>
          </button>

          <DisplayNotes allnotes={allnotes} setAllnotes={setAllnotes} />
        </form>
      </div>

    
    </>
  );
};

export default CreateNotes;
