

// Using the context in React requires 3 simple steps:
//  creating the context, providing the context, 
//  and consuming the context.

import Layout from "./Layout";
import {MainContext} from "./MainContext";

const Context = () => {


      const userName = 'Heena raj';

        return (

            <>

            <MainContext.Provider value={userName}>

                 <Layout>Main Content</Layout>

                

            </MainContext.Provider>




            
            </>

        )
}



export default Context;