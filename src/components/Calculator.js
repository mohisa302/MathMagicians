import React, { useState } from 'react';
import '../styles/Calculator.css';
import calculate from '../logic/calculate';

const Calculator = () => {
  const [state, setState] = useState({ total: 0, next: null, operation: null });

  const clickLisetener = (event) => {
    setState(calculate(state, event.target.value));
  };
  const { total, operation, next } = state;
  return (
    <table className="container">
      <tr className="row">
        <td>
          <div className="input-text">
            {total}
            {operation}
            {next}
          </div>
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="AC" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="+/-" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="%" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value={'\u00F7'} className="btn op" onClick={clickLisetener} />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="7" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="8" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="9" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="x" className="btn op" onClick={clickLisetener} />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="4" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="5" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="6" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="-" className="btn op" onClick={clickLisetener} />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="1" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="2" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="3" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="+" className="btn op" onClick={clickLisetener} />
        </td>
      </tr>
      <tr className="row">
        <td className="zero">
          <input type="button" value="0" className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="." className="btn" onClick={clickLisetener} />
        </td>
        <td>
          <input type="button" value="=" className="btn op" onClick={clickLisetener} />
        </td>
      </tr>
    </table>
  );
};

export default Calculator;
