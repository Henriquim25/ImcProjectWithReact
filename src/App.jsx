import "./App.css";
import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from "./components/ImcCalc";
import ImcTable from "./components/ImcTable";

function App() {
  const resetCalc =(e)=>{
    e.preventDefault()
    setImc('')
    setInfo('')
    setInfoClass('')
  }

  const calcImc = (e, height, weight) => {
    console.log(height);
    console.log(weight);
    if (!height || !weight) return;
    const weightFloat = +weight.replace(",", ".");
    const heightFloat = +height.replace(",", ".");
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);

    e.preventDefault();
    setImc(imcResult);

    data.forEach((item) =>{
      if(imcResult >=item.min && imcResult<= item.max){
        setInfo(item.info)
        setInfoClass(item.infoClass)
      }
    })
    if(!info) return
  };

  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  return (
    <div className="container">
      {!imc ? (
        <ImcCalc calcImc={calcImc} />
      ) : (
        <ImcTable data={data} imc={imc} info={info} infoClass={infoClass} resetCalc={resetCalc} />
      )}
    </div>
  );
}

export default App;
