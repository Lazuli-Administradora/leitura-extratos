export function parseAndCalc(file, selectedMonth) {
  const lista_nao_somar_debitos =  ['PAG BOLETO', 'ENVIO TEV', 'PAG BOLETO', 'PAG GPS', 'ENVIO TED', 'DEB P FGTS', 'AGUA', 'PAG DARF', 'DB AT LUZ'];
  const lista_nao_somar_creditos = ['RESG AUTOM', 'ENVIO TEV', 'DEVOL TED'];

  const mesesDict = {
    "Janeiro": "01",
    "Fevereiro": "02",
    "Março": "03",
    "Abril": "04",
    "Maio": "05",
    "Junho": "06",
    "Julho": "07",
    "Agosto": "08",
    "Setembro": "09",
    "Outubro": "10",
    "Novembro": "11",
    "Dezembro": "12"
  };

  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = function(event) {
      const csvData = event.target.result.split('\n');
      let totalDebitos = 0;
      let totalCreditos = 0;

      csvData.forEach((row, index) => {
        if (index !== 0) {
          const columns = row.split(';');
          if (columns.length < 6) {
            return;
          }
          const dataMov = columns[1].replace(/"/g, '');
          const historico = columns[3].replace(/"/g, '');
          const valor = parseFloat(columns[4].replace(/"/g, '').replace(',', '.'));
          const debCred = columns[5].replace(/"/g, '');

          if (dataMov.substring(4, 6) === mesesDict[selectedMonth]) {
            if (debCred === 'D' && !lista_nao_somar_debitos.includes(historico)) {
              totalDebitos += valor;
            } else if (debCred === 'C' && !lista_nao_somar_creditos.includes(historico)) {
              totalCreditos += valor;
            }
          }
        }
      });

      console.log(`Total de débitos para o mês ${selectedMonth}: ${totalDebitos}`);
      console.log(`Total de créditos para o mês ${selectedMonth}: ${totalCreditos}`);
    
      resolve({ totalDebitos, totalCreditos });
    };
    reader.onerror = reject;
  });
}
