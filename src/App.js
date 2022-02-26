// import logo from './logo.svg';
import "./App.css";
import { useState, useEffect, useRef } from "react";
import creditCard from "./data/credit-icon.png";
import fiftyEuro from "./data/fiftyEuro.PNG";
import twentyEuro from "./data/twentyEuro.PNG";
import tenEuro from "./data/tenEuro.PNG";
import fiveEuro from "./data/fiveEuro.PNG";
import twoEuro from "./data/twoEuro.PNG";
import oneEuro from "./data/oneEuro.PNG";
import fiftyCent from "./data/fiftyCent.PNG";
import twentyCent from "./data/twentyCent.PNG";
import tenCent from "./data/tenCent.PNG";

import emailjs from "@emailjs/browser";

function App() {
  const [a50EuroInput, set50EuroInput] = useState("");
  const [a20EuroInput, set20EuroInput] = useState("");
  const [a10EuroInput, set10EuroInput] = useState("");
  const [a5EuroInput, set5EuroInput] = useState("");
  const [a2EuroInput, set2EuroInput] = useState("");
  const [a1EuroInput, set1EuroInput] = useState("");
  const [a50CentsInput, set50CentsInput] = useState("");
  const [a20CentsInput, set20CentsInput] = useState("");
  const [a10CentsInput, set10CentsInput] = useState("");

  const [aCCAmount, setCCAmount] = useState(0);
  const a50EuroAmount = Number(a50EuroInput) * 50;
  const a20EuroAmount = Number(a20EuroInput) * 20;
  const a10EuroAmount = Number(a10EuroInput) * 10;
  const a5EuroAmount = Number(a5EuroInput) * 5;
  const a2EuroAmount = Number(a2EuroInput) * 2;
  const a1EuroAmount = Number(a1EuroInput);
  const a50CentsAmount = Number(a50CentsInput) * 0.5;
  const a20CentsAmount = Number(a20CentsInput) * 0.2;
  const a10CentsAmount = Number(a10CentsInput) * 0.1;
  const [musicAmount, setMusicAmount] = useState(0);
  const [otherAmount, setOtherAmount] = useState(0);
  const [floatAmount, setFloatAmount] = useState(0);

  const total =
    Number(aCCAmount) +
    Number(a50EuroAmount) +
    Number(a20EuroAmount) +
    Number(a10EuroAmount) +
    Number(a5EuroAmount) +
    Number(a2EuroAmount) +
    Number(a1EuroAmount) +
    Number(a50CentsAmount) +
    Number(a20CentsAmount) +
    Number(a10CentsAmount) +
    Number(musicAmount) +
    Number(otherAmount);

  const profit = total - floatAmount;

  const report = ` CC: ${aCCAmount}, --------
    €50: ${a50EuroAmount},--------
    €20: ${a20EuroAmount},--------
    €10: ${a10EuroAmount},--------
    €5:  ${a5EuroAmount},--------
    €2:  ${a2EuroAmount},--------
    €1:  ${a1EuroAmount},--------
    50c:  ${a50CentsAmount},--------
    20c:  ${a20CentsAmount},--------
    10c:  ${a10CentsAmount},--------
    music: ${musicAmount},--------
    other: ${otherAmount},--------
    total: ${total},--------
    float: ${floatAmount},--------
    profit:${profit},`;

  const emailObj = {
    subject: "End of Day Report",
    email: "btrearty@gmail.com",
    name: "barry",
    message: report,
  };

  const completeButton = useRef();
  const sendButton = useRef();
  const reportSentMessage = useRef();

  const showSend = () => {
    completeButton.current.style.display = "none";
    sendButton.current.style.display = "block";
  };

  const reportSent = () => {
    sendButton.current.style.display = "none";
    reportSentMessage.current.style.display = "block";
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_kjfucba", //"YOUR_SERVICE_ID"
        "template_ve3775q", //YOUR_TEMPLATE_ID
        emailObj,
        "user_VAUL09ZX0AO6lYFPP4VbA"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    reportSent();
  };

  useEffect(() => {
    sendButton.current.display = "none";
    reportSentMessage.current.display = "none";
  });

  return (
    <div>
      <h1>End of Day</h1>
      <table className="app">
        <tr className="row">
          <td className="amount">
            <img src={creditCard} className="card" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => setCCAmount(e.target.value)}
            ></input>
          </td>
          <td className="total">{aCCAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={fiftyEuro} className="notes" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set50EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a50EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={twentyEuro} className="notes" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set20EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a20EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={tenEuro} className="notes" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set10EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a10EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={fiveEuro} className="notes" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set5EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a5EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={twoEuro} className="coins" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set2EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a2EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={oneEuro} className="coins" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set1EuroInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a1EuroAmount}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={fiftyCent} className="coins" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set50CentsInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a50CentsAmount.toFixed(2)}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={twentyCent} className="coins" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set20CentsInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a20CentsAmount.toFixed(2)}</td>
        </tr>
        <tr className="row">
          <td className="amount">
            <img src={tenCent} className="coins" alt="" />
          </td>
          <td>
            <input
              type="number"
              className="pos-input"
              onChange={(e) => set10CentsInput(e.target.value)}
            ></input>
          </td>
          <td className="total">{a10CentsAmount.toFixed(2)}</td>
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
          <td className="amount">Total</td>
          <td></td>

          <td className="total">{total.toFixed(2)}</td>
        </tr>
        <tr className="row">
          <td className="amount">Float</td>
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
          <td className="amount">Profit</td>
          <td>{/* <input type="number" className="pos-input"></input> */}</td>
          <td className="total">{profit.toFixed(2)}</td>
        </tr>
        <tr className="row">
          <td></td>
          <td></td>
          <td></td>
        </tr>
        <tr className="row">
          <td></td>
          <td className="amount">
            <button
              onClick={() => showSend()}
              id="complete-button"
              ref={completeButton}
            >
              Report Complete
            </button>
            <button onClick={sendEmail} id="send-button" ref={sendButton}>
              Send Report
            </button>
            <span id="report-sent" ref={reportSentMessage}>
              Report Sent
            </span>
          </td>
          <td></td>
        </tr>
        <tr className="row">
          <td></td>
          <td></td>
          <td></td>
        </tr>
      </table>
    </div>
  );
}

export default App;
