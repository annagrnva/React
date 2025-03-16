import { use, useState } from 'react'
import '../App.css'

export default function ResetButton() {

    const clickMe = () => {
        
        console.log('saf')
    }
    return (
        <button onClick={() => clickMe('reset')}>Reset</button>

    )
}