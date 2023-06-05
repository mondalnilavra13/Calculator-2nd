import React, { useState } from 'react';

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const handleAddition = () => {
    const sum = Number(num1) + Number(num2);
    setResult(sum);
  };

  const handleSubtraction = () => {
    const difference = Number(num1) - Number(num2);
    setResult(difference);
  };

  const handleMultiplication = () => {
    const product = Number(num1) * Number(num2);
    setResult(product);
  };

  const handleDivision = () => {
    const quotient = Number(num1) / Number(num2);
    setResult(quotient);
  };

  return (
    <div>
      <input
        type="text"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="text"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <button onClick={handleAddition}>Addition</button>
      <button onClick={handleSubtraction}>Subtraction</button>
      <button onClick={handleMultiplication}>Multiplication</button>
      <button onClick={handleDivision}>Division</button>

      <h1>Result: {result}</h1>
    </div>
  );
};

export default Calculator;
