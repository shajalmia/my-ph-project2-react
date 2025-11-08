

import './App.css'
import Counter from './counter'
import Batsman from './runs'



function App() {

  

  


  
  function handleClick(){
    alert('I am clicked.')
  }

  const handleclick3=()=>{
    alert("Clicked3.")

  }

  //Using Parameter:

  const handleADD5 = (num)=>{
    const newNum=num+5;
    alert(newNum)
  }

 

  return (
    <>
      
      <h3>Vite + React</h3>
      <Counter ></Counter>
      <Batsman></Batsman>




      <button onClick={handleClick}>Click Me</button>

      <button onClick={ function handleClick2(){
        alert("Clicked2.")
      }}>Click Me2</button>
      
      <button onClick={handleclick3}>Click Me3</button>

      <button onClick={()=> alert("Clicked4")}>Click4</button>

      {/* //Taking Parameter: */}

      <button onClick={()=>handleADD5(5)}>Click Add 5</button>
      
    </>
  )
}

export default App
