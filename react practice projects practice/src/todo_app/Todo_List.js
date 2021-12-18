




const Todo_List = ({ added_todos }) => {
//   console.log(added_todos);


  
  return (
    <div>

    {

         added_todos.map((todo , idx) => {

                 return (

                        <ul key={idx}>
                            <li>{todo}</li>
                        </ul>
                 )
         })
    }
      
    </div>
  );
};

export default Todo_List;
