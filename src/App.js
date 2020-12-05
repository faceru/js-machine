import React, {useState} from 'react';
import { prepareMachinesResult } from './machine/prepareResult';
import * as _ from 'lodash';
import './App.css';
function App() {
  const [code, setCode] = useState('const num = "23.4"');
  const [result, setResult] = useState([]);
  const handleCodeChange = (e) => {
    e.preventDefault();
    setCode(e.target.value);
  }
  const handlePress = (e) => {
    if (e.keyCode === 9) {
      e.preventDefault()
      setCode(e.target.value + '\t');
    }
  }
  
  const handleClick = () => {
    // console.log(code, code[0]);
    // console.log(_.escape(code), _.escape(code[0]));

    setResult(prepareMachinesResult(code));
  }
  
  const stringTemplate = (token, lexeme, index, hr = false, key) => 
    <span key={key}><span>{`<token:${token}, lexeme:${lexeme}, index:${index}>`}</span><br></br>{hr && <hr/>}</span>;
  const generateResult = () => 
    result.map(({token, lexeme, index}, idx) => {
      const hr = lexeme === '\\n';
      if(lexeme){
        if(token) {
          return stringTemplate(token, lexeme, index, hr, idx);
        } else {
          return stringTemplate('error', lexeme, index, hr, idx);        
        }
      }
      
    })
  return (
    <div className="App">
      <label htmlFor="code">Введите код</label>
      <textarea name="code" id="code" cols="30" rows="10" value={code} onChange={handleCodeChange} onKeyDown={handlePress} />
      <button onClick={handleClick}>
        Выполнить лексический анализ
      </button>
      <div>
        <label>
          Результат:
        </label>
        {generateResult()}
      </div>
    </div>
  );
}

export default App;
