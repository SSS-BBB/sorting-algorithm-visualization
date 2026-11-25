import { useState } from "react";
import "./ArrayBar.css";

function ArrayBar({ array = [40, 30, 20, 35, 32, 59, 46, 48], showNumber = true }) {

    const minElement = Math.min(...array);
    if (minElement <= 0) {
        console.log("Cannot have element less than or equal to 0 in an array.");
        return (<></>);
    }

    const maxElement = Math.max(...array);

    // add key to each element and convert each element to be from 0 to 1 proportional to its value
    const normalizedArray = [];
    array.map((element, index) => {
        const normalizedElement = {};
        normalizedElement.key = index;
        normalizedElement.value = element;
        normalizedElement.normalizedValue = element / maxElement;
        normalizedArray.push(normalizedElement);
    });

    const maximumHeight = 99; // %

    const elementBar = normalizedArray.map(element =>
                <li
                    className="element-bar"
                    key={element.key}
                    style={
                        { height: `${element.normalizedValue * maximumHeight}%` }
                    }>
                    
                    {showNumber ? element.value : ""}

                </li>
                )

    return (
        <ul className="array-bar">
            {elementBar}
        </ul>
    );
}

export default ArrayBar