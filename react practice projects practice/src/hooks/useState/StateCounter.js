import React from 'react'
import { useState } from 'react/cjs/react.development'

function StateCounter() {


    // using the useState hook
    // const [count , setCount] = useState(0);

    // if multiple state use the same value use single state with object

    //  const [pos , setPos] = useState({x : 0 , y : 0});

    //  const setClick = () => {

    //            setPos({x : 100});

    //            console.log(pos.y);
    //  }
    

    const [text, setText] = useState('');
    const [isSending, setIsSending] = useState(false);
    const [isSent, setIsSent] = useState(false);

    async function handleSubmit(e) {
        e.preventDefault();
        setIsSending(true);
        await sendMessage(text);
        setIsSending(false);
        setIsSent(true);
      }
    if (isSent) {
        return <h1>Thanks for feedback!</h1>
      }


    return (
        <div>


            {/* <h3>{count}</h3> */}

            {/* <button onClick={() => setCount(count + 1)}>Click</button> */}

            {/*1st pitfall ->  Changing the value of one element in the object */}

            {/* <h3>The value of x is {pos.x} and y is {pos.y}</h3>


            <button onClick={setClick}>Click</button> */}


            {/* 2nd Pitfall*/}

            <form onSubmit={handleSubmit}>
      <p>How was your stay at The Prancing Pony?</p>
      <textarea
        disabled={isSending}
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <br />
      <button
        disabled={isSending}
        type="submit"
      >
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>

            


            



            
        </div>
    )


    // Pretend to send a message.
function sendMessage(text) {
    return new Promise(resolve => {
      setTimeout(resolve, 2000);
    });
  }

}



export default StateCounter
