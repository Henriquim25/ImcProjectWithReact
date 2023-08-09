import { useState } from "react";
import "./ImcCalc.css";
import Button from "./Button";

function ImcCalc({calcImc}) {
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const validDigits = (text) =>{
    return text.replace(/[^0-9,]/g,"")
  }

  const handleHeightChange = (e) =>{
    const updateValue = validDigits(e.target.value)
    setHeight(updateValue)
  }

  const handleWeightChange = (e) =>{
    const updateValue = validDigits(e.target.value)
    setWeight(updateValue)
  }

  const clearForm = (e) =>{
    e.preventDefault()
    setHeight('')
    setWeight('')
  }

  return (
    <div id="calc-container">
      <h1>Calculadora de IMC</h1>
      <form id="imc-form">
        <div className="form-input">
          <div className="form-control">
            <label htmlFor="height">Altura:</label>
            <input
              type="text"
              placeholder="1.75 metros"
              name="height"
              id="height"
              onChange={(e) => handleHeightChange(e)}
              value={height}
            />
          </div>
          <div className="form-control">
            <label htmlFor="weight">Peso:</label>
            <input 
            type="text" 
            placeholder="80 kg" 
            name="weight" 
            id="weight" 
            onChange={(e) => handleWeightChange(e)}
            value={weight}
            />
          </div>
        </div>
        <div className="action-control">
          <Button id="calc-btn" text="Calcular " action={(e) =>{
            calcImc(e,weight,height)
          }} />
          <Button id="clear-btn" text="Limpar "action={clearForm} />
        </div>
      </form>
    </div>
  );
}

export default ImcCalc;
