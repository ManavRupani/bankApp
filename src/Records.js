import React from 'react'
import Table from "react-bootstrap/Table";
const Records = ({accountNumber, balance, transactions}) => {
  return (
    <div className='h-over'>
      <p className="lead">
            <strong>Account Number:</strong> {accountNumber}
          </p>
      <p className="lead">
            <strong>Saving Account Balance:</strong> ${balance}
          </p>
          <p className="lead">
            <strong>Checking Account Balance:</strong> ${balance}
          </p>
         
      <h3 className="lead">Transactions:</h3>
      <Table striped bordered hover responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Date</th>
                <th>Type</th>
                <th>Amount</th>
                <th>Account Number</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{transaction.timestamp}</td>
                  <td>{transaction.type === "deposit" ? "Deposit" : "Withdraw"}</td>
                  <td>${transaction.amount}</td>
                  <td>{transaction.accountNumber}</td>
                </tr>
              ))}
            </tbody>
            
          </Table>
    </div>
  )
}

export default Records
