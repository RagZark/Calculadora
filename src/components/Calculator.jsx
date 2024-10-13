import React, { useState } from "react";
import './Calculator.css';
import { Box, Container } from "@mui/material";

const Calculator = () => {
    const [num, setNum] = useState(0)
    const [prevNum, setPrevNum] = useState(0);
    const [operator, setOperator] = useState(null)

    const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "ç", "="];

    const colorKeys = (key) => {
        switch (true) {
            case (key >= 0 && key <= 9) || key === ".":
                return "gray";
            case key === "AC" || key === "+/-" || key === "%":
                return "white";
            case key === "ç":
                return "hidden"
            default:
                return "orange";
        }
    };

    const inputNum = (e) => {
        let input = e.target.value
        setNum(num === 0 && input !== "." ? input : num + input);
    }

    const clearInput = () => {
        setNum(0);
        setPrevNum(0);
        setOperator(null);
    }

    const changeSign = () => {
        setNum(num !== 0 ? -num : num)
    }

    const percentage = () =>{
        setNum(num/100)
    }

    const operatorHandler = (e) => {
        const operation = e.target.value
        setPrevNum(num)
        setNum(0)
        setOperator(operation)
    }

    const sum = (value1, value2) => Number(value1) + Number(value2);
    

    const subtration = (value1, value2) => Number(value1) - Number(value2);

    const multiplication = (value1, value2) => Number(value1) * Number(value2);


    const division = (value1, value2) => Number(value1) / Number(value2);




    const makeOperation = (e) =>{
        let result;
        switch (operator) {
            case "/":
                result = division(prevNum, num);
                break;
            case "X":
                result = multiplication(prevNum, num);
                break;
            case "-":
                result = subtration(prevNum, num);
                break;
            case "+":
                result = sum(prevNum, num);
                break;
            default:
                return;
        }
        setNum(result);
        setPrevNum(0);
        setOperator(null);
    }




    const handleClick = (e) => {
        const value = e.target.value;
    
        if (value >= 0 || value === ".") {
            inputNum(e);
        } else {
            switch (value) {
                case "AC":
                    clearInput();
                    break;
                case "+/-":
                    changeSign();
                    break;
                case "%":
                    percentage();
                    break;
                case "=":
                    makeOperation();
                    break;
                default:
                    operatorHandler(e);
                    break;
            }
        }
    };

    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs" >
                <div className=" basic-calculator wrapper">
                    <h1 style={{ color: "#000", display: "flex", justifyContent: "flex-end", paddingRight: "0.1em", fontSize: "5em", backgroundColor: "#FFF", border: "2px solid #ccc" }}>
                        {num}
                    </h1>
                    {buttonValues.map((element, index) => (
                        <button
                            key={index}
                            className={colorKeys(element)}
                            value={element}
                            onClick={handleClick}
                        >
                            {element}
                        </button>
                    ))}
                </div>
            </Container>
        </div>
    );
};

export default Calculator;