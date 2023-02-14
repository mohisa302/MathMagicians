import './Calculator.css';

function Calculator() {
  return (
    <table className="container">
      <tr className="row">
        <td>
          <input type="text" className="input-text" value="0" />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="AC" className="btn" />
        </td>
        <td>
          <input type="button" value="+/-" className="btn" />
        </td>
        <td>
          <input type="button" value="%" className="btn" />
        </td>
        <td>
          <input type="button" value={'\u00F7'} className="btn op" />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="7" className="btn" />
        </td>
        <td>
          <input type="button" value="8" className="btn" />
        </td>
        <td>
          <input type="button" value="9" className="btn" />
        </td>
        <td>
          <input type="button" value={'\u00D7'} className="btn op" />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="4" className="btn" />
        </td>
        <td>
          <input type="button" value="5" className="btn" />
        </td>
        <td>
          <input type="button" value="6" className="btn" />
        </td>
        <td>
          <input type="button" value="-" className="btn op" />
        </td>
      </tr>
      <tr className="row">
        <td>
          <input type="button" value="1" className="btn" />
        </td>
        <td>
          <input type="button" value="2" className="btn" />
        </td>
        <td>
          <input type="button" value="3" className="btn" />
        </td>
        <td>
          <input type="button" value="+" className="btn op" />
        </td>
      </tr>
      <tr className="row">
        <td className="zero">
          <input type="button" value="0" className="btn" />
        </td>
        <td>
          <input type="button" value="." className="btn" />
        </td>
        <td>
          <input type="button" value="=" className="btn op" />
        </td>
      </tr>
    </table>
  );
}

export default Calculator;
