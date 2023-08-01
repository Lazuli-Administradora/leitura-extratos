import Card from "../components/Card";
import { useState } from "react";
import { parseAndCalc } from "../utils/parseAndCalc.js";

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

  const handleFileChange = (e) => {
    if (e.target.files.length) {
      const file = e.target.files[0];
      setFile(file);
    } else {
      setFile(null);
    }
  };

  const handleSelectedMonth = (month) => {
    setSelectedMonth(month);
    alert(`Mês selecionado: ${month}`)
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
            <li
              className={`step ${file && selectedMonth ? "step-success" : ""}`}
            >
              Selecionar Mês
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
            Selecionar Mês
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
                    {`${(index + 1).toString().padStart(2, '0')} - ${mes}`}
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
            className="btn btn-secondary "
            disabled={selectedMonth === null}
            onClick={() => handleCalculate()}
          >
            Calcular
          </button>
        </Card>
      </div>
    </div>
  );
}
