import { useState } from 'react';
import styles from './index.module.scss';

const initialUserInput = {
  currentSaving: 10000,
  yearlyContribution: 1200,
  expectedReturn: 7,
  duration: 10,
}

const CalculateForm = ({ onCalculate }) => {
  const [userInput, setUserInput] = useState(initialUserInput);

  const submitHandler = (event) => {
    event.preventDefault();
    onCalculate(userInput);
  }

  const resetHandler = () => {
    setUserInput(initialUserInput);
  }

  const inputChangeHandler = (identifier, value) => {
    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [identifier]: +value,
      }
    })
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <div className={styles.input_group}>
        <p>
          <label htmlFor="current-savings">Current Savings ($)</label>
          <input 
            type="number" 
            id="current-savings"
            value={userInput.currentSaving}
            onChange={(event) => 
              inputChangeHandler('currentSaving', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
          <input 
            type="number" 
            id="yearly-contribution"
            value={userInput.yearlyContribution}
            onChange={(event) => 
              inputChangeHandler('yearlyContribution', event.target.value)
            }
          />
        </p>
      </div>
      <div className={styles.input_group}>
        <p>
          <label htmlFor="expected-return">
            Expected Interest (%, per year)
          </label>
          <input 
            type="number" 
            id="expected-return"
            value={userInput.expectedReturn}
            onChange={(event) => 
              inputChangeHandler('expectedReturn', event.target.value)
            }
          />
        </p>
        <p>
          <label htmlFor="duration">Investment Duration (years)</label>
          <input 
            type="number" 
            id="duration"
            value={userInput.duration}
            onChange={(event) => 
              inputChangeHandler('duration', event.target.value)
            }
          />
        </p>
      </div>
      <p className={styles.actions}>
        <button type="reset" className={styles.buttonAlt} onClick={resetHandler}>
          Reset
        </button>
        <button type="submit" className={styles.button}>
          Calculate
        </button>
      </p>
    </form>
  )
}

export default CalculateForm;
