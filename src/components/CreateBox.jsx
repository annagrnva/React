import { use, useState } from 'react'
import '../App.css'
import ResetButton from './ResetButton'

export default function CreateBox() {

    const [color, setColor] = useState('white')
    const colorChange = ['red', 'blue', 'yellow', 'green']

    const handleClick = () => {
       const currentIndex = colorChange.indexOf(color)
       const nextIndex = (currentIndex + 1) 

       setColor(colorChange[nextIndex])
    };

    return (
        <>
            color: {color}
            <div
                className='box'
                style={{
                    backgroundColor: color
                }}
                onClick={handleClick}

            />
        </>

    )
}