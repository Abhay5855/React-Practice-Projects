



const People = ({people, setPeople}) => {

    const ClearSingle = (idx) => {


        setPeople(prev => prev.filter((data , i) => i !== idx))



         
    }

     return (
         <>
             
             <ul>

             {
                  people.map((item , idx) => {

                          return (

                            <div key={idx}>

                              <li>{item.name}

                                 <button onClick={() => ClearSingle(idx)}>Delete</button>
                              </li>



                            </div>
                          )
                  })
             }

             </ul>

            




         </>
     )
}

export default People;