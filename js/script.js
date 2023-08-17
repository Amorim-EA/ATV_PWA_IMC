let nome, idade, sexo, altura, peso, resultado, imc, estilo;
let clicou = document.getElementById("click");
let limpar = document.getElementById("limpar");

function calculateIMC() {
  imc = (peso / (altura * altura)).toFixed(1);

  if (imc > 18.5 && imc < 24.9) {
    resultado = "Peso normal";
    estilo = "blue";
  } else if (imc > 25 && imc < 29.9) {
    resultado = "Excesso de Peso";
    estilo = "green";
    imc > 28 && (estilo = "yellow");
  } else if (imc > 30 && imc < 34.9) {
    resultado = "Obesidade Classe I";
    estilo = "yellow";
  } else if (imc > 35 && imc < 39.9) {
    resultado = "Obesidade Classe II";
    estilo = "red";
  } else if (imc >= 40) {
    resultado = "Obesidade Classe III";
    estilo = "red";
  } else {
    resultado = "Abaixo do Peso Normal";
    estilo = "green";
    imc < 16 && (estilo = "yellow");
  }
}

function updateUI() {
  let elemNome = document.getElementById("nome");
  let elemIdade = document.getElementById("idade");
  let elemSexo = document.getElementById("sexo");
  let elemAltura = document.getElementById("altura");
  let elemPeso = document.getElementById("peso");
  let elemResultado = document.getElementById("resultado");

  elemResultado.style.color = estilo;

  elemNome.textContent = nome;
  elemIdade.textContent = idade;
  elemSexo.textContent = sexo;
  elemAltura.textContent = altura;
  elemPeso.textContent = peso;
  elemResultado.textContent = resultado;
}

clicou.addEventListener('click', () => {
  nome = document.getElementById("nomeCLI").value;
  idade = Number(document.getElementById("idadeCLI").value);
  sexo = document.getElementById("elem-select").value;
  altura = parseFloat(document.getElementById("alturaCLI").value);
  peso = parseFloat(document.getElementById("pesoCLI").value);

  calculateIMC();
  updateUI();
  
  console.log(nome, idade, peso, altura, resultado, imc, estilo,sexo);
});

limpar.addEventListener('click', () => {
  let urlDestino = "http://localhost:3000/index.html";
  window.location.href = urlDestino;
});
