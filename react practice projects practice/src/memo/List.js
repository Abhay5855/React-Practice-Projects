import Listitem from "./Listitem";




const List = ({list}) => {

    console.log('list' , list);

          return (
              <>

              <ul>
                  {
                      list.map((item) => {
                              
                             return (
                                 <Listitem key={item.id} item={item} />
                             )
                      })
                  }
              </ul>

              </>
          )
}


export default List;