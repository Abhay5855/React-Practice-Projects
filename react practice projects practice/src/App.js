// import { useState } from 'react/cjs/react.development';
import './App.css';
import Birthday from './birthday/Birthday';
import ExpenseContainer from './expense_tracker.js/ExpenseContainer';
import Reducer from './hooks/Reducer';
import Effect from './hooks/useEffect/Effect';
import Batching from './hooks/useState/Batching';
import StateCounter from './hooks/useState/StateCounter';
import MyMap from './localeai/MyMap';
import Memo from './memo/Memo';
import NotesContainer from './notes-app/NotesContainer';
import Ref_Counter from './ref/Ref_Counter';
// import Border_Previewer from './border_radius_previewer/Border_Previewer';
// import Layout from './context/Layout';
// import Effect from './effect/Effect';
// import Reference from './ref/Reference';
import Timer from './ref/Timer';
import Tags from './tags/Tags';
import Tours from './tours_project/Tours';
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

      {/* <Ref_Counter /> */}

      {/* <Memo /> */}

      {/* <Tags /> */}

      {/* <Birthday /> */}

      {/* <Tours /> */}

      {/* <MyMap /> */}

      {/* <ExpenseContainer /> */}

      {/* <NotesContainer /> */}

      {/* <Reducer /> */}

      {/* <StateCounter /> */}


      {/* <Effect /> */}


      <Batching />

    
    </div>
  );
}

export default App;
