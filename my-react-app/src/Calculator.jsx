import { useState, useEffect } from "react";
import "./Calculator.css";

function Calculator() {
  const [display, setDisplay] = useState("");

  const appendValue = (value) => {
    const operators = ["+", "*", "/", "%"];
    if (display === "" && operators.includes(value)) {
      return;
    }

    const lastChar = display.slice(-1);
    const allOperators = ["+", "-", "*", "/", "%"];
    if (allOperators.includes(lastChar) && allOperators.includes(value)) {
      setDisplay(display.slice(0, -1) + value);
      return;
    }

    if (value === ".") {
      const parts = display.split(/[+\-*/%]/);
      const currentPart = parts[parts.length - 1];
      if (currentPart.includes(".")) {
        return;
      }
    }

    setDisplay((prev) => prev + value);
  };

  const clearDisplay = () => {
    setDisplay("");
  };

  const deleteLast = () => {
    setDisplay((prev) => prev.slice(0, -1));
  };

  const calculate = () => {
    if (!display.trim()) return;

    try {
      if (!/^[0-9+\-*/. %()]+$/.test(display)) {
        setDisplay("Error");
        return;
      }

      const sanitizedExpr = display.replace(/%/g, "/100");
      const result = new Function(`return ${sanitizedExpr}`)();

      if (result === Infinity || result === -Infinity || isNaN(result)) {
        setDisplay("Error");
      } else {
        setDisplay(Number(result.toFixed(8)).toString());
      }
    } catch {
      setDisplay("Error");
    }
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      const key = event.key;
      if ((key >= "0" && key <= "9") || ["+", "-", "*", "/", "%", "."].includes(key)) {
        appendValue(key);
      } else if (key === "Enter" || key === "=") {
        event.preventDefault();
        calculate();
      } else if (key === "Backspace") {
        deleteLast();
      } else if (key === "Escape" || key.toLowerCase() === "c") {
        clearDisplay();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  return (
    <div className="calc-page">
      <div className="calc-card">
        <div className="calc-header">
          <h2>Calculator</h2>
        </div>

        <div className="calc-display-container">
          <input
            type="text"
            className="calc-display"
            value={display}
            placeholder="0"
            readOnly
          />
        </div>

        <div className="calc-buttons">
          <button className="calc-btn btn-action" onClick={clearDisplay}>
            C
          </button>
          <button className="calc-btn btn-action" onClick={deleteLast}>
            DEL
          </button>
          <button className="calc-btn btn-operator" onClick={() => appendValue("%")}>
            %
          </button>
          <button className="calc-btn btn-operator" onClick={() => appendValue("/")}>
            ÷
          </button>

          <button className="calc-btn" onClick={() => appendValue("7")}>
            7
          </button>
          <button className="calc-btn" onClick={() => appendValue("8")}>
            8
          </button>
          <button className="calc-btn" onClick={() => appendValue("9")}>
            9
          </button>
          <button className="calc-btn btn-operator" onClick={() => appendValue("*")}>
            ×
          </button>

          <button className="calc-btn" onClick={() => appendValue("4")}>
            4
          </button>
          <button className="calc-btn" onClick={() => appendValue("5")}>
            5
          </button>
          <button className="calc-btn" onClick={() => appendValue("6")}>
            6
          </button>
          <button className="calc-btn btn-operator" onClick={() => appendValue("-")}>
            −
          </button>

          <button className="calc-btn" onClick={() => appendValue("1")}>
            1
          </button>
          <button className="calc-btn" onClick={() => appendValue("2")}>
            2
          </button>
          <button className="calc-btn" onClick={() => appendValue("3")}>
            3
          </button>
          <button className="calc-btn btn-operator" onClick={() => appendValue("+")}>
            +
          </button>

          <button className="calc-btn" onClick={() => appendValue("0")}>
            0
          </button>
          <button className="calc-btn" onClick={() => appendValue(".")}>
            .
          </button>
          <button className="calc-btn btn-equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
