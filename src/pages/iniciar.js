import Card from "../components/Card";
import { useState } from "react";
import { parseAndCalc } from "../utils/parseAndCalc.js";


export default function Iniciar() {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [calc, setCalc] = useState(false);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setFile(file);
    } else {
      setFile(null);
    }
  };
  
  

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  const handleCalculate = () => {
    if (!file) {
      alert("Por favor, selecione um arquivo primeiro.");
      return;
    }
  
    parseAndCalc(selectedMonth);
  };
  

  return (
    <div className="hero min-h-screen bg-image ">
      <div className="hero-content text-center">
        <Card>
          <ul className="steps ">
            <li className={`step ${file ? "step-success" : ""}`}>
              Adicionar Arquivo
            </li>
            <li className={`step ${file && selectedMonth ? "step-success" : ""}`}>
              Selecionar Mês
            </li>
            <li className={`step ${file && selectedMonth && calc ? "step-success" : ""}`}>Calcular</li>
          </ul>
          <div className="divider"></div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-s"
            onChange={handleFileChange}
          />
          <div className="divider"></div>
          <details className="dropdown dropdown-right" open={isOpen}>
            <summary className="m-1 btn" onClick={() => setIsOpen(!isOpen)} disabled={file === null}>
              {selectedMonth?.length ? selectedMonth : "Selecione o Mês"}
            </summary>
            {(!selectedMonth?.length || isOpen) && (<ul className="p-2 borderOn shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52 h-60 overflow-auto ">
              <li>
                <a onClick={() => handleMonthSelect('01 - Janeiro')}>01 - Janeiro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('02 - Fevereiro')}>02 - Fevereiro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('03 - Março')}>03 - Março</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('04 - Abril')}>04 - Abril</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('05 - Maio')}>05 - Maio</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('06 - Junho')}>06 - Junho</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('07 - Julho')}>07 - Julho</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('08 - Agosto')}>08 - Agosto</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('09 - Setembro')}>09 - Setembro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('10 - Outubro')}>10 - Outubro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('11 - Novembro')}>11 - Novembro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('12 - Dezembro')}>12 - Dezembro</a>
              </li>
            </ul>)}
            
          </details>
          <div className="divider"></div>
          <button className="btn btn-secondary "disabled={selectedMonth === null} onClick={() => handleCalculate()}>Calcular</button>
        </Card>
      </div>
    </div>
  );
}
