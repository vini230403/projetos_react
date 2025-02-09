import { useState } from 'react'


import Input from './components/Input/Input'
import Button from './components/Button/Button'
import './App.css'


const App = () => {

  const [expression, setExpression] = useState('')
  const [openParentheses, setOpenParentheses] = useState(0)

  const handleAddNumber = (number) => {
      setExpression(prev => prev + number)
  }

  const handleClear = () => {
    setExpression('')
    setOpenParentheses(0)
  }

  const handleOperation = (op) => {
    const lastChar = expression.trim().slice(-1);
  
    if (op === '%') {
      if (/[0-9)]$/.test(lastChar)) { 
        setExpression(prev => prev + ' % ');
      }
      return;
    }

    if (/[0-9)]$/.test(lastChar)) {
      setExpression(prev => prev + ` ${op} `);
    }
  }

  const handleParentheses = () => {
    const lastChar = expression.trim().slice(-1)
  
    if (openParentheses === 0 || /[\+\-\*\/\(]$/.test(lastChar)) {
      setExpression(prev => prev + '(');
      setOpenParentheses(prev => prev + 1);
    } else if (openParentheses > 0 && /[0-9)]$/.test(lastChar)) {
      setExpression(prev => prev + ')');
      setOpenParentheses(prev => prev - 1);
    }
  }

  const handleResultNumbers = () => {
    try {
      let sanitizedExpression = expression.replace(/x/g, '*');
  
      
      sanitizedExpression = sanitizedExpression.replace(/(\d+)\s%\s(\d+)/g, (_, a, b) => {
        return `${a} * (${b} / 100)`;
      });
  
      const result = eval(sanitizedExpression);
      setExpression(String(result));
      setOpenParentheses(0);
    } catch (error) {
      setExpression('Erro');
    }
  }
 

  
  return (
      <div className="container">
        <div className="content">
          <Input value={expression || '0'} />
          <div className="row">
            <Button label="C" onClick={handleClear}/>
            <Button label="()" onClick={handleParentheses}/>
            <Button label="%" onClick={() => handleOperation('%')}/>
            <Button label="/" onClick={() => handleOperation('/')}/>
          </div>
          <div className="row">
            <Button label="7" onClick={() => handleAddNumber('7')}/>
            <Button label="8" onClick={() => handleAddNumber('8')}/>
            <Button label="9" onClick={() => handleAddNumber('9')}/>
            <Button label="x" onClick={() => handleOperation('x')}/>
          </div>
          <div className="row">
            <Button label="4" onClick={() => handleAddNumber('4')}/>
            <Button label="5" onClick={() => handleAddNumber('5')}/>
            <Button label="6" onClick={() => handleAddNumber('6')}/>
            <Button label="-" onClick={() => handleOperation('-')}/>
          </div>
          <div className="row">
            <Button label="1" onClick={() => handleAddNumber('1')}/>
            <Button label="2" onClick={() => handleAddNumber('2')}/>
            <Button label="3" onClick={() => handleAddNumber('3')}/>
            <Button label="+" onClick={() => handleOperation('+')}/>
          </div>
          <div className="row">
            <Button label="." onClick={() => handleAddNumber('.')}/>
            <Button label="0" onClick={() => handleAddNumber('0')}/>
            <Button label="=" onClick={handleResultNumbers}/>
          </div>
        </div>
      </div>
  )
}

export default App
