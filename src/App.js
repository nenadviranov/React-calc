import React, { useState } from "react";
import Display from "./components/Display";
import Keypad from "./components/Keypad";

//	Regular expressions that cares about the display value functionality
const displayValueRules = val => {
	return val
		//	When we start inputting numbers, remove the initial value - 0
		.replace(/^(0+)([1-9]+)(.*)?/, "$2$3")
		//	No more then one dot can be used in the input
		.replace(/^([0-9]+)(\.)+(.*)?/, "$1.$3")
}

//	Function that has limited number of operators
const calculate = (op1, op2, operator) => {
	switch (operator) {
		case "×" :
			return op1 * op2
		case "÷" :
			return op1 / op2
		case "-" :
			return op1 - op2
		case "+" :
			return op1 + op2
		default:
			return 0
	}
}

function App() {

	//	Basic and Additional Hooks are part of React
	//	useState() is part of React as basic Hook
	//	Additional Hooks - usehooks.com

	//	In stack we hold the operations and the operands
	const [stack, setStack] = useState([]);

	//	displayValue is the string we want to display in the calculator 
	//	useState(initialState) - must have initial state
	const [displayValue, setDisplayValue] = useState('0');

	//	When we press on some key we add an operator or execute some operation
	//	We pass this function to the Key Component, through the Keypad Component
	const handleKey = (key) => {
		switch (key) {
			case "0" :
			case "1" :
			case "2" :
			case "3" :
			case "4" :
			case "5" :
			case "6" :
			case "7" :
			case "8" :
			case "9" :
			case "." :
				//	In class Components we would use this.setState()
				//	We want to keep the input operand/s until an operation is executed
				if (!displayValue) {
					setDisplayValue(
						displayValueRules("0" + key)
					)
				} else {
					const val = key === "." && displayValue.includes(".")
						? displayValue
						: (displayValue + key)

					setDisplayValue(
						displayValueRules(val)
					);
				}
				break;
			
			case "×" :
			case "÷" :
			case "-" :
			case "+" :
			case "=" :
				//	op1, op2 -> operand1, operand2
				const [op1, operator] = stack;
				const op2 = Number(displayValue)

				const operand = op1 && operator
					? calculate(op1, op2, operator)
					: op2

				setStack([
					operand, 
					key === "=" ? operator : key
				]);

				setDisplayValue(null);

				break;

			case "AC" :
				setStack([])
				setDisplayValue()
				break;
				
			default:
				break;
		}
	}

	return (
		<div className="calculator">
			<Display 
				value={displayValue}
				stack={stack}
			/>
			<Keypad
				handleKey={handleKey}
			/>
		</div>
	);
}

export default App;
