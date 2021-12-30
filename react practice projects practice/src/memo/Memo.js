import { useState } from "react";






const Memo = () => {


    const [text , setText] = useState('');
    const [search , setSearch] = useState();


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

    const filteredUsers = users.filter((user) => {

        return user.name.toLowerCase().includes(search.toLowerCase())

         
    })

     return (
         <>


         <input type='text' value={text} onChange={(e) => setText(e.target.value)} />

         <button onClick={() => Search()}>Search</button>
         
         </>
     )
}



export default Memo;