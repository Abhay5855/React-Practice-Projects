import { useState , useMemo} from "react";

import List from "./List";




const Memo = () => {


    const [text , setText] = useState('');
    const [search , setSearch] = useState('');


    const users = [
        {
            id : 1,
            name : 'Heena'
        },
        {
            id : 2,
            name : 'rutkar'
        },

        {
             id : 3,
             name : 'sanika'
        }
    ]


    // Search

    const Search = () => {
         
           setSearch(text);
    }

    // Filter


    

    // const filteredUsers = users.filter((user) => {

    //     console.log('filter function is running');

    //     return user.name.toLowerCase().includes(search.toLowerCase());

         
    // });


    const filteredUsers = useMemo(() => 

      users.filter((user) => {
             console.log('render again');
            return user.name.toLowerCase().includes(search.toLowerCase());
      }),

      [search]
    
    )

    // const filteredUsers = useMemo(() => {
        

         
    // }, [search])




     

     return (
         <>


         <input type='text' value={text} onChange={(e) => setText(e.target.value)} />

         <button onClick={() => Search()}>Search</button>


         <List list={filteredUsers} />
         
         </>
     )
}



export default Memo;