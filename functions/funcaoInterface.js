import { formataHemisferio, formataPeriodo, formatarIntensidade } from './funcaoLogicas.js';
let rodada = false;

function exibirLista(date) {

  const nome = date.nome;  
  const intensidade = formatarIntensidade(date);
  const periodo = formataPeriodo(date);
  const hemisferio = formataHemisferio(date);

  console.log(nome.padEnd(27, ' '), "- " + intensidade.padEnd(11, ' '), "- " + hemisferio.padEnd(10, ' '), "- " + periodo);
};

function exibirItemLista(date, array) {
  
  const arrayRotulos = ['NOME DA CHUVA', 'INTENSIDADE', 'HEMISFÉRIO', 'PERÍODO', '-'];

  if(rodada == false) {
    console.log("\nChuva de meteoros");  
    console.log(`\nEncontramos ${array.length} chuvas de meteoros que podem ser vistas hoje`);
    console.log("\n" + arrayRotulos[0].padEnd(27, ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[1].padEnd(6,  ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[2].padEnd(6, ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[3]);
    rodada = true;
  } else if(rodada == true) {
    console.log(`\nNão perca as próximas chuvas de meteoros:`);
    console.log("\n" + arrayRotulos[0].padEnd(27, ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[1].padEnd(6,  ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[2].padEnd(6, ' '), arrayRotulos[4].padEnd(1, ' '), arrayRotulos[3]);
    rodada = undefined;
  }
  
  exibirLista(date);
  
};

export { exibirItemLista };
