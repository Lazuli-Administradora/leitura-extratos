import Card from "../components/Card";
import { useState } from "react";
import { parseAndCalc } from "../utils/parseAndCalc.js";
import { CSSTransition } from 'react-transition-group';


export default function Iniciar() {
  const meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const [file, setFile] = useState(null);
  const [selectedMonth, setSelectedMonth] = useState(null);
  const [calc, setCalc] = useState(false);
  const [totalDebitos, setTotalDebitos] = useState(0);
  const [totalCreditos, setTotalCreditos] = useState(0);

  // Handle file input change
  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const handleCalculate = async () => {
    if (!file) {
      alert("Por favor, selecione um arquivo primeiro.");
      return;
    }

    try {
      const result = await parseAndCalc(file, selectedMonth);
      setCalc(true);
      setTotalDebitos(result.totalDebitos);
      setTotalCreditos(result.totalCreditos);
    } catch (error) {
      console.error("Erro ao ler ou processar o arquivo: ", error);
    }
  };

  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
    console.log("Mes selecionado: ", month);
  };

  const handleReset = () => {
    
    window.location.reload();
  };

  return (
    <div className="hero min-h-screen bg-image ">
      <div className="hero-content text-center">
        <Card>
          <ul className="steps ">
            <li className={`step ${file ? "step-success" : ""}`}>
              Adicionar Arquivo
            </li>
            <li
              className={`step ${file && selectedMonth ? "step-success" : ""}`}
            >
              {selectedMonth ? selectedMonth : "Selecionar Mês"}
            </li>
            <li
              className={`step ${
                file && selectedMonth && calc ? "step-success" : ""
              }`}
            >
              Calcular
            </li>
          </ul>
          <div className="divider"></div>
          <input
            type="file"
            className="file-input file-input-bordered file-input-md w-full max-w-s"
            onChange={handleFileChange}
          />
          <div className="divider"></div>
          <button
            disabled={file === null}
            className="btn"
            onClick={() => window.my_modal_5.showModal()}
          >
            {selectedMonth ? selectedMonth : "Selecionar Mês"}
          </button>
          <dialog
            id="my_modal_5"
            className="modal modal-bottom sm:modal-middle"
          >
            <form method="dialog" className="modal-box ">
              <div className="grid grid-cols-3 gap-4">
                {meses.map((mes, index) => (
                  <button
                    key={index}
                    className="btn btn-secondary "
                    onClick={() => handleSelectedMonth(mes)}
                  >
                    {`${(index + 1).toString().padStart(2, "0")} - ${mes}`}
                  </button>
                ))}
              </div>

              <div className="modal-action">
                <button className="btn">Fechar</button>
              </div>
            </form>
          </dialog>
          <div className="divider"></div>
          <button
            className="btn btn-primary "
            disabled={selectedMonth === null}
            onClick={() => handleCalculate()}
          >
            Calcular
          </button>

          {(totalCreditos !== 0 || totalDebitos !== 0) && (
            <div >
              <div className="divider"></div>
              <div className="alert alert-primary">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="stroke-current shrink-0 w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
                <span className="text-error">Débitos: R${totalDebitos}</span>
                <span className="text-success">
                  Créditos: R${totalCreditos}
                </span>
              </div>
              <button className="btn btn-secondary mt-4" onClick={handleReset}>
                Reiniciar
              </button>
            </div>
          )}
        </Card>
      </div>
    </div>
  );
}
