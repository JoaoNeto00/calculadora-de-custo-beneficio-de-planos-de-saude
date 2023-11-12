function calcular() {
    calculoOperadoraA()
}


function capturarDados() {
  const taltura = document.getElementById("altura");
  const tpeso = document.getElementById("peso");
  const tidade = document.getElementById("idade");

  const altura = Number(taltura.value);
  const peso = Number(tpeso.value);
  const idade = Number(tidade.value);

  return { altura, peso, idade };
}

function calculoIMC() {
  const dados = capturarDados();
  const altura = dados.altura;
  const peso = dados.peso;

  const imc = peso / (altura * altura);
  return imc.toFixed(2);
}

function calculoOperadoraA() {
  const dados = capturarDados();
  const idade = dados.idade;
  const imc = calculoIMC();

  const planoBasico = 100 + idade * 10 * (imc / 10);
  const planoStandard = (150 + idade * 15) * (imc / 10);
  const planoPremium = (200 - imc * 10 + idade * 20) * (imc / 10);

  mostrarOpA(planoBasico,planoStandard,planoPremium)
  
  return { planoBasico, planoStandard, planoPremium };
}

function calculoOperadoraB() {
  const imc = calculoIMC();
  const ftComorbidade = fatorComorbidade(imc);

  const planoBasico = 100 + ftComorbidade * 10 * (imc / 10);
  const planoStandard = (150 + fatorComorbidade * 15) * (imc / 10);
  const planoPremium = (200 - imc * 10 + ftComorbidade * 20) * (imc / 10);

  return { planoBasico, planoStandard, planoPremium };
}

function fatorComorbidade(imc) {
  if (imc < 18.5) {
    return 10;
  } else if (imc >= 18.5 && imc <= 24.9) {
    return 1;
  } else if (imc >= 25 && imc <= 29.9) {
    return 6;
  } else if (imc >= 30 && imc <= 34.9) {
    return 10;
  } else if (imc >= 35 && imc <= 39.9) {
    return 20;
  } else {
    return 30;
  }
}

function mostrar(resposta) {
  const resultado = document.getElementById("resultado");
  resultado.innerHTML = resposta;
}
function mostrarOpA(planoBasico,planoStandard,planoPremium){

  

  
  const localPlanoBasico = document.getElementById("res_basico")
  localPlanoBasico.innerHTML =  `plano basico - ${planoBasico.toFixed(2).replace('.',',')}`
  const localPlanoStandard = document.getElementById("res_standard")
  localPlanoStandard.innerHTML = `plano standard - ${planoStandard.toFixed(2).replace('.',',')}`
  const localPlanoPremium = document.getElementById("res_premium")
  localPlanoPremium.innerHTML = `plano premium - ${planoPremium.toFixed(2).replace('.',',')}`

}