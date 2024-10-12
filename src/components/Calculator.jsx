import React from "react";
import './Calculator.css';
import { Container } from "@mui/material";

const Calculator = () => {
    const buttonValues = ["AC", "+/-", "%", "/", 7, 8, 9, "X", 4, 5, 6, "-", 1, 2, 3, "+", 0, ".", "ç", "="];

    const colorKeys = (key) => {
        switch (true) {
            case (key >= 0 && key <= 9 ) || key === ".":
                return "gray";
            case key === "AC" || key === "+/-" || key === "%":
                return "white";
            case key === "ç":
                return "hidden"
            default:
                return "orange";
        }
    };

    return (
        <Container maxWidth="xs">
            <div className="wrapper">
                {buttonValues.map((element, index) => (
                    <button 
                        key={index} 
                        className={colorKeys(element)} 
                    >
                        {element}
                    </button>
                ))}
            </div>
        </Container>
    );
};

export default Calculator;