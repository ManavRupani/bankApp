import React, { useState } from "react";
import { useNavigate } from 'react-router-dom';
import Logo from './Assesets/td-bank-logo-vector.svg';

const TransactionForm = ({ type, onSubmit }) => {
  const [accountNumber, setAccountNumber] = useState("");
  const [amount, setAmount] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate form inputs
    if (!accountNumber.trim() || !amount.trim()) {
      alert("Please enter both account number and amount.");
      return;
    }
    // Prepare transaction data
    const transactionData = {
      accountNumber: accountNumber.trim(),
      amount: parseFloat(amount.trim()), // Convert amount to number
      type: type,
    };
    // Call onSubmit callback with transaction data
    onSubmit(transactionData);
    // Reset form fields after submission
    setAccountNumber("");
    setAmount("");
    // Navigate back to home page
    navigate('/home/key');
  };
  const handleCancel = () => {
    // Navigate back to home page
    navigate('/home/key');
  };
  return (
    <div className="h-over">
      <div className="mx-auto card w-50">
        <img className="card-img-top w-50" src={Logo} alt="Card image cap"/>
        <div className="card-body">
          <h2>{type === "deposit" ? "Deposit" : "Withdraw"} Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="accountNumber">Account Number</label>
              <input
                type="text"
                className="form-control"
                id="accountNumber"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="amount">Amount</label>
              <input
                type="number"
                className="form-control"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                required
              />
            </div>
            <div>
            <button type="submit" className="btn btn-over mx-2">
              Submit
            </button>
            <button type="submit" onClick={handleCancel} className="btn btn-over-2">
              Cancle
            </button>
            </div>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default TransactionForm;
