import { use, useState } from 'react'
import '../App.css'
import CreateBox  from './createBox'

export default function ResetButton({color}) {
   

    const resetClick = () => {
        console.log({color})
        console.log('click')
    }
    return (
        <button onClick={() => resetClick('reset')}>Reset</button>

    )
}