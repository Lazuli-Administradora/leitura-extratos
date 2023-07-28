export function parseAndCalc(month) {
  lista_nao_somar_debitos = [
    "PAG BOLETO",
    "ENVIO TEV",
    "PAG BOLETO",
    "PAG GPS",
    "ENVIO TED",
    "DEB P FGTS",
    "AGUA",
    "PAG DARF",
    "DB AT LUZ",
  ];
  lista_nao_somar_creditos = ["RESG AUTOM", "ENVIO TEV", "DEVOL TED"];

  const monthNumber = month.split("-")[0].trim();
}
