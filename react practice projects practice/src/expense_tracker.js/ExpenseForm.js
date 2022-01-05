import ExpenseContainer from "./ExpenseContainer";
import { useState } from "react";

const ExpenseForm = () => {
  const [charge, setCharge] = useState('');

  const [amount, setAmount] = useState();


//handle form

   const handleSubmit = (e) => {
    e.preventDefault(); 


    if(amount > 0 && charge.trim()){

         console.log('amount added ');
         console.log(charge + '-> ' + amount);

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
        </form>
      </div>
    </>
  );
};

export default ExpenseForm;
