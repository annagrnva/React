import { use, useState } from 'react'
import '../App.css'

export default function CreateBox() {

    const [color, setColor] = useState('white')
    const colorChange = ['red', 'blue', 'yellow', 'green']
    let counter = 0

    // const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16)
    // const handleClick = () => {
    //     setColor(randomColor)
    // }
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