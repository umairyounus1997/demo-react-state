import React, {useState} from 'react';


function Room() {
    // const state =  useState(true);
    //console.log("State = ",state);

    let [isLit, setLit] =  useState(true);
    let [age, setAge] = useState(25);
    function updateLit(){
        console.log("Button Clicked");
        setLit(!isLit);
    }

    //Normal Plain Javascript Function
  //   function increaseAge(){
  //     console.log("Increase your Age");
  //     setAge(++age)
  // }

  // Arrow Function
  //   const increaseAge = () =>{
  //     console.log("Increase your Age");
  //     setAge(++age)
  // }
    return (
    <div>the room is  {isLit? "lit":"dark"} 
   <br/>
   Age :{age}
   <br/>
<button onClick={updateLit}>
    Toggle Light
    </button>
    <br/>
  {/* Function Call Simple*/}
{/* <button onClick={increaseAge}>
Increase Age    </button> */}
{/* Direct Call Arrow Function */}
<button onClick={() =>{
      console.log("Increase your Age");
      setAge(++age)}}>
Increase Age    </button>

<button onClick={() =>{
console.log("Decrease your Age");
setAge(--age)}}>
Decrease your Age
  </button>

   </div>
    );
  }

export default Room;
