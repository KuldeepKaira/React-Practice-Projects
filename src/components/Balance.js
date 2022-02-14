import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const amounts = transactions.map((transaction) => transaction.amount);
  const balance = amounts.reduce((sum, cur) => (sum = sum + cur), 0).toFixed(2);

  return (
    <>
      <h4> Your Balance</h4>
      <h1 is="balance">₹{balance}</h1>
    </>
  );
};

export default Balance;
