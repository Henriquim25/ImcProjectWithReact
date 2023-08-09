import "./App.css";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from './components/ImcTable'

function App() {
  const calcImc = (e,height,weight ) =>{
    console.log(height,weight)

    if(!height || !weight) return

    e.preventDefault()
    console.log('executed')
  }

  const [imc,setImc] = useState('')
  const [info,setInfo] = useState('')
  const [infoClass,setInfoClass] = useState('')
  return (
    <div className="container">
      {!imc? <ImcCalc calcImc={calcImc}/> : <ImcTable/>}
    </div>
    );
}

export default App;
