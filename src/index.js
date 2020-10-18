import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { findAllByPlaceholderText } from '@testing-library/react';

//Part3
// const Display = ({counter}) =><div>{counter}</div>

// const Button = ({handleClick,text}) =>{
//   return(
//     <button onClick={handleClick}>
//       {text}
//     </button>
//   )
// }

// const App = () =>{
//   const [counter,setCounter]=useState(0)
//   const increaseByOne = ()=> setCounter(counter+1)
//   const decreaseByOne = ()=> setCounter(counter-1)
//   const setToZero = ()=> setCounter(0)

//   return(
//     <div>
//       <Display counter={counter}/>
//       <Button
//         handleClick={increaseByOne}
//         text='plus'
//       />
//       <Button 
//         handleClick={setToZero}
//         text='zero'
//       />
//       <Button
//         handleClick={decreaseByOne}
//         text='minus'
//       />
//     </div>
//   )
// }

// ReactDOM.render(<App />, document.getElementById('root'))

const History=(props)=>{
  if(props.allCkicks.length===0){
    return(
      <div>
        the app is used by pressing the buttons
      </div>
    )
  }

  return(
    <div>
      button press history:{props.allCkicks.join('')}
    </div>
  )
}

const Button=({onClick,text})=>(
  <button onClick={onClick}>
    {text}
  </button>
)

const App = (props) =>{
  const[left,setLeft]=useState(0)
  const[right,setRight]=useState(0)
  const[allCkicks,setAll]=useState([])

  const handleLeftClick=()=>{
    setAll(allCkicks.concat('L'))
    setLeft(left+1)
  }

  const handleRightClick=()=>{
    setAll(allCkicks.concat('R'))
    setRight(right+1)
  }

  return(
    <div>
      <div>
        {left}
        <Button onClick={handleLeftClick} text='left'/>
        <Button onClick={handleRightClick} text='right'/>
        {right}
        <History allCkicks={allCkicks}/>
      </div>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))