import { useReducer } from "react";




const Reducer = () => {

    const [state , dispatch] = useReducer(reducer , initialState)
    

    const action = {
         type : 'ActionType'
    }

      return (
          <>

          <button onClick={() => dispatch(action)}>
              
          </button>

          <h3>useReducer() Hook</h3>
          
          </>
      )
}

export default Reducer;