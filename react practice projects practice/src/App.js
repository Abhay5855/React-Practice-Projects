import { useState } from 'react/cjs/react.development';
import './App.css';
import Add_Todo from './todo_app/Add_Todo';


function App() {

    const [added_todos , setAdded_todos] = useState([]);

    const addTodo = (todoDetails) => {
      
          
             
    }

  return (
    <div className="App">

      <Add_Todo addTodo={addTodo}/>
     
    </div>
  );
}

export default App;
