// import { useState } from 'react/cjs/react.development';
import './App.css';
import Ref_Counter from './ref/Ref_Counter';
// import Border_Previewer from './border_radius_previewer/Border_Previewer';
// import Layout from './context/Layout';
// import Effect from './effect/Effect';
// import Reference from './ref/Reference';
import Timer from './ref/Timer';
// import Add_Todo from './todo_app/Add_Todo';
// import Convert from './todo_app/binary_to_decimal/Convert';
// import Todo_List from './todo_app/Todo_List';
// import State from './usestate/State';


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

      {/* <Effect /> */}

      {/* <Layout /> */}

      {/* <Reference /> */}

      {/* <Timer /> */}

      <Ref_Counter />
    </div>
  );
}

export default App;
