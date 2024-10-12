import React from "react";
import './Calculator.css'

const Calculator = () => {
    const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ",", "="]
    const changeSign = (num) => {
        if(num !== 0){
            console.log(-num)
        }
    }
    changeSign(-buttonValues[4])



    return (
        <div className="wrapper">
            {buttonValues.map((element, index) => (
                <button key={index}>{element}</button>
            ))}
        </div>
    );
}
export default Calculator