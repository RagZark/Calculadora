import React, { useState } from "react";
import './Calculator.css';
import { Box, Container } from "@mui/material";

const Calculator = () => {
    const [num, setNum] = useState(0)
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
        setNum((num === 0 || input === ".") && (input >= 0 && input <= 9) ? input : num + input)
    }

    const clearInput = (e) => {
        setNum(0)
    }


    const handleClick = (e) => {
        e.target.value === "AC" ? clearInput(e) : inputNum(e)
    }
    
    return (
        <div>
            <Box m={5} />
            <Container maxWidth="xs" >
                <div className="wrapper">
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