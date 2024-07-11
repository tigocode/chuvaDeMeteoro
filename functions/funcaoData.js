function retornaDataAtual() {
  const data = new Date('2022/02/25');
  const dia = data.getDate();
  const mes = data.getMonth() + 1;
  const ano = data.getFullYear();
  
  return { data, dia, mes, ano }
}
function formataData(date) {
  const Dia = {
    day: '2-digit', // 01
  }
  const Mes = {
    month: "2-digit", // 02
  }
  const Ano = {
    year: 'numeric', // 2020
  }
  const MesDia = {
    month: "2-digit", // 02
    day: '2-digit', // 01
  }
  const AnoMesDia = {
    month: "2-digit", // 02
    day: '2-digit', // 01
    year: 'numeric', // 2020
  }

  if(date === undefined) {
    const dataMesDiaAtual = retornaDataAtual().data.toLocaleString('eu-US', MesDia);
    const dataAnoMesDiaAtual = retornaDataAtual().data.toLocaleString('eu-US', AnoMesDia);
    return { dataMesDiaAtual, dataAnoMesDiaAtual };
  } else {
    const dataMesDia = date.toLocaleString('eu-US', MesDia);
    const dataDiaMesBR = date.toLocaleString('pt-BR', MesDia);
    const dataAnoMesDia = date.toLocaleString('eu-US', AnoMesDia);
    return { dataMesDia, dataAnoMesDia, dataDiaMesBR };
  }  
}

function retornaProximoYear(date) {
  const data = new Date(date);
  const ano = data.getFullYear() + 1;
  
  data.setFullYear(ano);
  data.toString();

  const novaData = formataData(data).dataAnoMesDia;

  return novaData;  
};

function adicionandoYear(date) {

  const data = new Date(date);
  data.setFullYear(retornaDataAtual().ano);
  data.toString();
  const dataFinal = formataData(data).dataAnoMesDia;
  return dataFinal;
}

function adicionandoProximoMonth(date) {

  const data = new Date(date);
  //const dia = data.getDate();
  const mes = data.getMonth() + 3;
  data.setDate(31);
  data.setMonth(mes);
  data.toString();
  const dataFinal = formataData(data).dataAnoMesDia;
  return dataFinal;
}

export { retornaDataAtual, retornaProximoYear, formataData, adicionandoYear, adicionandoProximoMonth };
