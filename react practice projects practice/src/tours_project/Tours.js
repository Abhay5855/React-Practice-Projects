import axios from 'axios';
import { useEffect, useState } from 'react';
import Display from './Display';
import Loading from './Loading';



const Tours = () => {


    const [loading , setLoading] = useState(true);

    const [place , setPlace] = useState([]);


    const url = 'https://course-api.com/react-tours-project';

    const Display_tours = () => {
             
        setLoading(true);
            
             axios.get(url)
             .then((res) => {
                   console.log(res.data);
                   setPlace(res && res.data ?  res.data : "");

                   setLoading(false);
             })
             .catch((err) => {
                  console.log(err);
                  setLoading(false);
             })
    }
    

    useEffect(() => {

          Display_tours();

    },[])


    if(loading){

         return (
            <main style={{textAlign : 'center'}}>
            <Loading />
        </main>

         )
         
    }


       return (

           <>

              <h2>Tours and Travels project</h2>

              <Display  place={place} />



           </>
       )
}


export default Tours;