// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [aCCmount, setCCAmount] = useState(0);
  const [a50EuroAmount, set50EuroAmount] = useState(0);
  const [a20EuroAmount, set20EuroAmount] = useState(0);
  const [a10EuroAmount, set10EuroAmount] = useState(0);
  const [a5EuroAmount, set5EuroAmount] = useState(0);
  const [a2EuroAmount, set2EuroAmount] = useState(0);
  const [a1EuroAmount, set1EuroAmount] = useState(0);
  const [a50CentsAmount, set50CentsAmount] = useState(0);
  const [a20CentsAmount, set20CentsAmount] = useState(0);
  const [a10CentsAmount, set10CentsAmount] = useState(0);
  const [musicAmount, setMusicAmount] = useState(0);
  const [otherAmount, setOtherAmount] = useState(0);

  const [floatAmount, setFloatAmount] = useState(0);

  const grossAmount =
    Number(aCCmount) +
    Number(a50EuroAmount) * 50 +
    Number(a20EuroAmount) * 20 +
    Number(a10EuroAmount) * 10 +
    Number(a5EuroAmount) * 5 +
    Number(a2EuroAmount) * 2 +
    Number(a1EuroAmount) * 1 +
    Number(a50CentsAmount) * 0.5 +
    Number(a20CentsAmount) * 0.2 +
    Number(a10CentsAmount) * 0.1 +
    Number(musicAmount) +
    Number(otherAmount);

  const finalTotal = grossAmount - Number(floatAmount);

  return (
    <div>
      <h1>End of Day</h1>
      <table className="app">
        <tr className="row">
          <td className="amount">CC</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => setCCAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{aCCmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">50</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set50EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a50EuroAmount * 50}</td>
        </tr>
        <tr className="row">
          <td className="amount">20</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set20EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a20EuroAmount * 20}</td>
        </tr>
        <tr className="row">
          <td className="amount">10</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set10EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a10EuroAmount * 10}</td>
        </tr>
        <tr className="row">
          <td className="amount">5</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set5EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a5EuroAmount * 5}</td>
        </tr>
        <tr className="row">
          <td className="amount">2</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set2EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a2EuroAmount * 2}</td>
        </tr>
        <tr className="row">
          <td className="amount">1</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set1EuroAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a1EuroAmount * 1}</td>
        </tr>
        <tr className="row">
          <td className="amount">.50</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set50CentsAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a50CentsAmount * 0.5}</td>
        </tr>
        <tr className="row">
          <td className="amount">.20</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set20CentsAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a20CentsAmount * 0.2}</td>
        </tr>
        <tr className="row">
          <td className="amount">.10</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set10CentsAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{a10CentsAmount * 0.1}</td>
        </tr>
        <tr className="row">
          <td className="amount">Music</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => setMusicAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{musicAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">Other</td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => setOtherAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{otherAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">Gross</td>
          <td></td>

          <td className="total">{grossAmount}</td>
        </tr>
        <tr className="row">
          <td className="neg-amount">Float</td>
          <td>
            <input
              type="number"
              className="neg-input"
              onChange={(e) => setFloatAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{floatAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">Total</td>
          <td>{/* <input type="number" className="pos-input"></input> */}</td>
          <td className="total">{finalTotal}</td>
        </tr>
      </table>
    </div>
  );
}

export default App;
