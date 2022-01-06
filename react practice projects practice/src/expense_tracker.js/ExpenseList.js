import PropTypes from 'prop-types'



const ExpenseList = ({ all, setAll , setAmount , setCharge}) => {
  // clear all list

  const ClearAll = () => {
    setAll([]);
  };


//   Delete particular item
const DeleteItem =(idx) => {
 
    
    setAll(prev => prev.filter((data , i) => i !== idx));
     
}


// Edit item
const EditItem = (data) => {
    
    setAmount(data);
       
        
}
  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>All Expenses</h3>

        <div>
          {all.map((item, idx) => {
            return (
              <div key={idx}>
                <span>{item.charge}</span>

                <span>$ {item.amount}</span>

                <button onClick={() => DeleteItem(idx)}>Delete</button>
                <button onClick={() => EditItem(item.amount)}>Edit</button>
              </div>
            );
          })}
        </div>

        <span className="total">
          Total Amount : $
          {/* {all.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)} */}
          {all.reduce((prev, curr) => {
            return prev + Number(curr.amount);
          }, 0)}
        </span>

        <br />

        <button onClick={ClearAll}>Clear All</button>
      </div>
    </>
  );


};



export default ExpenseList;
