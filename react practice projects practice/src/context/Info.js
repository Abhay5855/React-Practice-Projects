import { useContext } from "react";
import { MainContext } from "./MainContext";




const Info = () => {

        const userName = useContext(MainContext);

        

         return (
             <>

             <h2>{userName}</h2>


             </>
         )
}


export default Info;