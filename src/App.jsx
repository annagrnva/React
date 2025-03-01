import { use, useState } from 'react'
import './App.css'
import CreateBox from './components/createBox'

export default function App() {

  
  return (

    <>
      <CreateBox />
      <CreateBox />
      <CreateBox />


    </>

  )

}




//   const [text, setText] = useState()

// return (
//   <>
//   you enter the text: {text}

//   <div>
//     <input 
//     type="text" 
//     value={text}
//     onChange={(event) => setText(event.target.value)}
//     />
//   </div>
//   </>
// )

//Пример с именами
// const [name, setName] = useState()
// const [surname, setSurname] = useState()

// return (
//   <>
//   first name: {name} <br/>
//   last name: {surname} <br/>
//   <button onClick={() => setName('Anna')}>Anna</button>
//   <button onClick={() => setSurname('Gurianova')}>Gurianova</button> <br/>
//   <button onClick={() => setName('Ilya')}>Ilya</button>
//   <button onClick={() => setSurname('Franx')}>Franx</button>
//   </>
// )

//Пример с цветами
// const [color, setColor] = useState('red')

// return (
//   <>
//   Color: {color}
//   <div
//   className='box'
//   style={{
//     backgroundColor: color
//   }}
//   />

//   <button onClick={() => setColor('blue')}>blue</button>
//   <button onClick={() => setColor('green')}>green</button>
//   <button onClick={() => setColor('yellow')}>yellow</button>

//   </>
// )

