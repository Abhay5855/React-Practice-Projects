import { useState } from 'react/cjs/react.development';
import './App.css';
import Border_Previewer from './border_radius_previewer/Border_Previewer';
import Effect from './effect/Effect';
import Add_Todo from './todo_app/Add_Todo';
import Convert from './todo_app/binary_to_decimal/Convert';
import Todo_List from './todo_app/Todo_List';
import State from './usestate/State';


function App() {

    // const [added_todos , setAdded_todos] = useState([]);

    // const addTodo = (todoDetails) => {


    //     let todoArr = [...added_todos];

    //     todoArr.push(todoDetails);

    //     setAdded_todos(todoArr);
      
          
             
    // }

  return (
    <div className="App">

      {/* <Add_Todo addTodo={addTodo}/>

      <Todo_List added_todos={added_todos} /> */}

      {/* <Convert /> */}

      {/* <Border_Previewer /> */}

      {/* <State /> */}

      <Effect />
     
    </div>
  );
}

export default App;
