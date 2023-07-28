import Card from "../components/Card";
import { useState } from "react";

export default function Iniciar() {
  const [file, setFile] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      setFile(e.target.files[0]);
    } else {
      setFile(null);
    }
  };

  const handleMonthSelect = (month) => {
    setSelectedMonth(month);
    setIsOpen(false);
  };

  return (
    <div className="hero min-h-screen bg-image ">
      <div className="hero-content text-center">
        <Card>
          <ul className="steps">
            <li className={`step ${file ? "step-success" : "step-warning"}`}>
              Adicionar Arquivo
            </li>
            <li className={`step ${file && selectedMonth ? "step-warning" : ""}`}>
              Selecionar Mês
            </li>
            <li className="step">Somar</li>
          </ul>
          <div className="divider"></div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-s"
            onChange={handleFileChange}
          />
          <div className="divider"></div>
          <details className="dropdown mb-32" open={isOpen}>
            <summary className="m-1 btn" onClick={() => setIsOpen(!isOpen)} disabled={file === null}>
              Selecione o Mês
            </summary>
            <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
              <li>
                <a onClick={() => handleMonthSelect('01 - Janeiro')}>01 - Janeiro</a>
              </li>
              <li>
                <a onClick={() => handleMonthSelect('02 - Fevereiro')}>02 - Fevereiro</a>
              </li>
            </ul>
          </details>
        </Card>
      </div>
    </div>
  );
}
