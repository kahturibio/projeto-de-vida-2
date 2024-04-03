const botoes = document.querySelectorAll(".botao");
const textos = document.querySelectorAll(".aba-conteudo");
//iterando (percorrer elementos de uma lista) sobre a lista de botoes 
for (let i = 0; i < botoes.length; i++) {
    botoes[i].onclick = function () {
        for (let j = 0; j < botoes.length; j++) {
            botoes[j].classList.remove("ativo");
            textos[j].classList.remove("ativo");
        }
        botoes[i].classList.add("ativo");
        textos[i].classList.add("ativo");
    }
}
//document.querySelector("#minhaDiv p").textContent = "Olá Chuva!";
const contadores = document.querySelectorAll(".contador");
let tempoAtual = new Date(); //retorna data atual do computador
const tempoObjetivo1 = new Date("2024-05-03T00:00:00");
let tempoFinal = tempoObjetivo1 - tempoAtual;

let segundos = Math.floor(tempoFinal / 1000);
let minutos = Math.floor(segundos / 60);
let horas = Math.floor(minutos / 60);
let dias = Math.floor(horas / 24);
console.log(segundos);
console.log(horas);
console.log(dias);


