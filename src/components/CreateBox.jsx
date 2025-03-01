import { use, useState } from 'react'
import '../App.css'

export default function CreateBox() {

    const [color, setColor] = useState('white')
    const colorChange = ['red', 'blue', 'yellow', 'green']
    let counter = 0

    const handleClick = () => {
        setColor(colorChange[counter])
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