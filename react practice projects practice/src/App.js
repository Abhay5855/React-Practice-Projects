import { useState } from 'react/cjs/react.development';
import './App.css';
import Add_Todo from './todo_app/Add_Todo';
import Todo_List from './todo_app/Todo_List';


function App() {

    const [added_todos , setAdded_todos] = useState([]);

    const addTodo = (todoDetails) => {


        let todoArr = [...added_todos];

        todoArr.push(todoDetails);

        setAdded_todos(todoArr);
      
          
             
    }

  return (
    <div className="App">

      <Add_Todo addTodo={addTodo}/>

      <Todo_List added_todos={added_todos} />
     
    </div>
  );
}

export default App;
