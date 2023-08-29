import { useState } from "react";
import Header from "./components/Header";
import ResultsTable from "./components/ResultsTable";
import CalculateForm from "./components/CalculateForm";

function App() {
  const [userInput, setUserInput] =  useState(null);

  const calculateHandler = (userInput) => {
    setUserInput(userInput);
  };

  const yearlyData = [];

  if (userInput) {
    let currentSavings = +userInput.currentSaving;
    const yearlyContribution = +userInput.yearlyContribution;
    const expectedReturn = +userInput.expectedReturn / 100;
    const duration = +userInput.duration;
  
    // The below code calculates yearly results (total savings, interest etc)
    for (let i = 0; i < duration; i++) {
      const yearlyInterest = currentSavings * expectedReturn;
      currentSavings += yearlyInterest + yearlyContribution;
      yearlyData.push({
        year: i + 1,
        yearlyInterest: yearlyInterest,
        savingsEndOfYear: currentSavings,
        yearlyContribution: yearlyContribution,
      });
    }
  }

  return (
    <div>
      <Header />
      <CalculateForm onCalculate={calculateHandler} />
      {!userInput
        ? <p style={{textAlign: 'center'}}>No investment calculated yet.</p>
        : <ResultsTable data={yearlyData} initialInvestment={userInput.currentSaving} />
      }
    </div>
  );
}

export default App;
