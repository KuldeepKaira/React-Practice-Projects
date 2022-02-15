import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const IncomeExpenses = () => {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const income = amounts
    .filter((val) => val > 0)
    .reduce((sum, cur) => (sum = sum + cur), 0)
    .toFixed(2);
  const expense = amounts
    .filter((val) => val < 0)
    .reduce((sum, cur) => (sum = sum + cur), 0);
  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p id="money-plus" className="money plus">
          +₹{income}
        </p>
      </div>
      <div>
        <h4>Expense</h4>
        <p id="money-minus" className="money minus">
          {" "}
          -₹{Math.abs(expense).toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default IncomeExpenses;