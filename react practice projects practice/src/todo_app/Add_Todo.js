import { useState } from "react";

const Add_Todo = ({addTodo}) => {
  const [todos, setTodos] = useState("");

  //  Submitting the values

  const handleSubmit = (e) => {
    e.preventDefault();

    setTodos("");
  };

  const handleTodos = (e) => {
    setTodos(e.target.value);

     // Get all input  in an array
     addTodo(todos);

  };

  return (
    <>
      {/* Creating an input box which allows to type todo and display them */}

      <div>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <input
            type="text"
            name="todos"
            value={todos}
            onChange={(e) => handleTodos(e)}
          />

          <button type="submit">Add</button>
        </form>
      </div>
    </>
  );
};

export default Add_Todo;
