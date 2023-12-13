import { useState } from "react"
import onImage from "../assets/on.png"
import ofImage from "../assets/off.png"


function Hero() {

    const [color, setColor] = useState()
    const [textColor, setTextColor] = useState()

    const updateColor = () => {
        setColor(true)
        setTextColor(true)
    }
    const resetColor = () => {
        setColor(false)
        setTextColor(false)
    }

    return <div>
        <div style={{backgroundColor: color}} className="sm:w-[400px] sm:h-[400px] rounded-full sm:ml-[750px] ml-24 mt-20 mb-10">
            <img style={{ display: color == true ? "block" : "" }} className="sm:w-[200px] w-40 hidden" src={onImage}/>
            <img style={{ display: color == false ? "block" : "" }} className="sm:w-[200px] w-40 hidden" src={ofImage}/>
        </div>
        <button style={{color: textColor == true ? "red" : ""}} onClick={updateColor} className="border-2 border-red-600 px-5 py-2 sm:text-4xl text-xl font-bold rounded-lg mb-20 mt-10 sm:ml-[650px] ml-12">Turn On</button>
        <button style={{color: textColor == false ? "red" : ""}} onClick={resetColor} className="border-2 border-red-600 px-5 py-2 sm:text-4xl text-xl font-bold rounded-lg mb-20 mt-10 sm:ml-[80px] ml-10">Turn Off</button>
    </div>
}

export default Hero