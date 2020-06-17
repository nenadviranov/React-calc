import React from "react";

//  label - button content
//  type - button type

const Key = ({ label, type, handleKey }) => {

    //  Adding HTML classes to buttons
    const cls = type === "function"
        ? "key-function"
        : type === "operation"
            ? "key-operation"
            : label === "0" ? "key-0" : ""

    return (
        <button 
            onClick={() => handleKey(label)}
            type="button" 
            className={"key " + cls}
        >
            {label}
        </button>
    )
};

export default Key;