import React from "react";

const Display = ({ value, stack }) => {
    //  The result will be the first item from the array
    const [result] = stack;
    
    //  If there is nothing on the screen, 
    //  take the first item in the array and convert it to string.
    //  If that is empty, display zero
    const displayValue = value || (result && result.toString()) || "0";

    return (
        <div className="display">
            {displayValue}
        </div>
    );
};

export default Display;
