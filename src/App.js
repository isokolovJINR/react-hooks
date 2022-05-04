import {useState} from "react";
import useInput from "./hooks/useInput";

function App() {

    const username = useInput('');
    const pass = useInput('');


    const onClick = () => {
    console.log(username.value)

  }
  return (
    <div className="App">

        <input {...username} type={"text"}  placeholder={'username'}/>
        <input {...pass}type={"text"} placeholder={'password'}/>
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default App;
