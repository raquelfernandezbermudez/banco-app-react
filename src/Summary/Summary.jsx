import React from 'react';
import './Summary.css';

const Summary = () => {
  // Sample summary data
  const totalIn = 5000; // Example total income
  const totalOut = 378; // Example total expenses
  const interest = 150; // Example interest earned

  return (
    <div className="summary">
      <p className="summary__label">In</p>
      <p className="summary__value summary__value--in">{totalIn}€</p>
      <p className="summary__label">Out</p>
      <p className="summary__value summary__value--out">{totalOut}€</p>
      <p className="summary__label">Interest</p>
      <p className="summary__value summary__value--interest">{interest}€</p>
      <button className="btn--sort">&downarrow; SORT</button>
    </div>
  );
};

export default Summary;