import { type } from "@testing-library/user-event/dist/type";

const ExpenseList = ({ all , amount}) => {
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

                <button>Delete</button>
                <button>Edit</button>

               
              </div>
            );
          })}
        </div>

      
               <span className="total">
          $
          {/* {all.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)} */}

          {
             all.reduce((prev , curr) => {
                  
                  return prev + Number(curr.amount);

               
              

                  
             },0)

          }
        </span>


        <button onClick={ClearAll}>Clear All</button>

        
      </div>
    </>
  );
};

export default ExpenseList;
