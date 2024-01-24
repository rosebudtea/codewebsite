import { useState } from "react";

import UserInput from "./UserInput";
import Result from "./Result";

import "./InvestmentCalculator.css";

export default function InterestCalculator() {
  const [userInput, setUserInput] = useState({
    initialInvestment: 10000,
    annualInvestment: 1200,
    expectedReturn: 6,
    duration: 10,
  });

  const inputIsValid = userInput.duration >= 1;

  function handleUserInputChange(inputId, newValue) {
    setUserInput((oldUserInput) => {
      return {
        ...oldUserInput,
        [inputId]: +newValue,
      };
    });
  }

  return (
    <div id="code-content">
      <UserInput userInput={userInput} onNumChange={handleUserInputChange} />
      {!inputIsValid && <p className="center">Please enter valid duration.</p>}
      {inputIsValid && <Result userInput={userInput} />}
    </div>
  );
}
