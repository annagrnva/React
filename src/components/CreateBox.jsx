import '../App.css'


export default function CreateBox({color, handleClick}) {


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