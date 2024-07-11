import { formataData, retornaProximoYear, adicionandoYear, adicionandoProximoMonth } from './funcaoData.js';
import chuvaDeMeteoros from '../data/colecaoDados.js';
import { exibirItemLista } from './funcaoInterface.js';

let tamanho = chuvaDeMeteoros.length;

function retornaChuvasHoje(date) {  
  const diaIncioChuva = adicionandoYear(date.inicio);
  const diaFimChuva = adicionandoYear(date.fim);
  const dataHoje = formataData().dataAnoMesDiaAtual;
  let arrayChuvas = [];

  if(diaIncioChuva === dataHoje || diaFimChuva === dataHoje) {
    arrayChuvas.push(date);
    exibirItemLista(date, arrayChuvas);
  } else {
    tamanho--
    retornaMensagem(tamanho);
  } 
};

function retornaMensagem(tamanho) {
  if(tamanho === 0) {  
    console.log("\nNão há chuva passando hoje...");
  }
}

function retornaChuvasProximas(date) {
  const diaIncioChuva = adicionandoYear(date.inicio);
  let diaFimChuva = adicionandoYear(date.fim);
  const dataHoje = formataData().dataAnoMesDiaAtual;
  const proximosMeses = adicionandoProximoMonth(dataHoje);

  diaFimChuva = validaMes(diaIncioChuva, diaFimChuva);
  
  if((diaIncioChuva > dataHoje || diaFimChuva > dataHoje) && (diaIncioChuva < proximosMeses && diaFimChuva < proximosMeses)) {
    if(diaIncioChuva !== dataHoje && diaFimChuva !== dataHoje) {
      exibirItemLista(date);
    }
  }
};

function validaMes(inicio, fim) {
  if(inicio > fim) {    
    const diaFimChuva = retornaProximoYear(fim);

    return diaFimChuva;
  } else {
    return fim;
  }
};

function formatarIntensidade(date) {
  const intensidadeArray = date.intensidade.split(" ");
  const intensidadeSting = intensidadeArray[0];

  switch(intensidadeSting) {
    case 'Fraca':
      return `1 (${intensidadeSting})`;
      break;
    case 'Média':
      return `2 (${intensidadeSting})`;
      break;
    case 'Forte':
      return `3 (${intensidadeSting})`;
      break;
    case 'Irregular':
      return `(${intensidadeSting})`;
      break;
    default:
      return `1 (${intensidadeSting})`;
      break;
  }  
};

function formataPeriodo(date) {
  const dataInicio = date.inicio.split("/");  
  const dataFim = date.fim.split("/");

  return `${dataInicio[1]}/${dataInicio[0]} à ${dataFim[1]}/${dataFim[0]}`;
};

function formataHemisferio(date) {
  const valor = date.declinacao;

  if(valor >= 0) {
    return "Norte";
  } else {
    return "Sul";
  }
};

export { retornaChuvasHoje, retornaChuvasProximas, formataHemisferio, formataPeriodo, formatarIntensidade };
