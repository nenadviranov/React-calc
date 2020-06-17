import React, { useEffect } from 'react';
import Key from './Key';

//  We keep keys outside of the state!
const keys = [
    //  label - button content
    //  type - button type (function, operation, number (no need to specify))

    {
        label: "AC",
        type: "function"
    },     
    {
        label: "+/-",
        type: "function"
    },
    {
        label: "%",
        type: "function"
    },
    {
        label: "÷", //  /
        type: "operation"
    },
    {
        label: "7",
    },
    {
        label: "8",
    },
    {
        label: "9",
    },
    {
        label: "×", //  *
        type: "operation"
    },
    {
        label: "4",
    },
    {
        label: "5",
    },
    {
        label: "6",
    },
    {
        label: "-",
        type: "operation"
    },
    {
        label: "1",
    },
    {
        label: "2",
    },
    {
        label: "3",
    },
    {
        label: "+",
        type: "operation"
    },
    {
        label: "0",
    },
    {
        label: ".",
    },
    {
        label: "=",
        type: "operation"
    },
];

const Keypad = ({ handleKey }) => {

    useEffect(() => {
        const keyPressHandler = event => {
            event.preventDefault();
            
            //  Mapping special keys
            switch(event.key) {
                case "/":
                    handleKey("÷");
                    break;
                case "*":
                    handleKey("×");
                    break;
                case "Enter":
                    handleKey("=");
                    break;
                default:
                    handleKey(event.key);
                    break;
            }
        };

        //  Adding an event linstener on keypress
        window.addEventListener("keypress", keyPressHandler)

        //  Removing an event listener
        return () => {
            window.removeEventListener("keypress", keyPressHandler)
        };
    });

    return (
        <div className="keypad">

            {/* with ({ ...props }) we take all the properties 
            (except label), from the keys array */}

            {keys.map( ({ label, ...props }) => (
                <Key 
                    key={label}
                    label={label}
                    handleKey={handleKey}
                    { ...props }
                />
            ))}

            {/* first we use rest operator 
            then we use spread operator */}
            
        </div>
    );
}

export default Keypad;
