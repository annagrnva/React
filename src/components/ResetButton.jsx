import { use, useState } from 'react'
import '../App.css'
import CreateBox  from './createBox'

export default function ResetButton(props) {
   

    const resetClick = () => {
         console.log(props.color)

    }
    return (
        <button onClick={() => resetClick('reset')}>Reset</button>

    )
}