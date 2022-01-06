import ExpenseContainer from "./ExpenseContainer";
import { useState } from "react";
import ExpenseList from "./ExpenseList";

const ExpenseForm = () => {
  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState();

  
  const [all , setAll] = useState([]);




//handle form

   const handleSubmit = (e) => {
    e.preventDefault(); 


    if(amount > 0 && charge.trim()){

         console.log('amount added ');
         console.log(charge + '-> ' + amount);


         const addAll = {
                
                  charge : charge,
                  amount : amount ,
         }

         setAll([...all ,addAll]);

        // setAllexpenses.push(addAll);


        //    console.log('all' ,allExpenses);
      
     
          console.log('all' , all);

    }

    setAmount('');
    setCharge('');
               
   }

  return (
    <>
      <div>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="">
            <label for="charge">Charge</label>
            <input
              type="text"
              value={charge}
              onChange={(e) => setCharge(e.target.value)}
              placeholder="e.g rent"
            />
            <br />

            <label for="charge">Amount</label>

            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="e.g 100"
            />

            <br/>

             <button type="submit">submit</button>
              
          </div>

          <ExpenseList all={all} setAll={setAll}/>
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
