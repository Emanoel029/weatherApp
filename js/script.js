//9f0878c94608b5bc97e84532394af6dd
//https://www.youtube.com/watch?v=qxzqEuAOYZ4    explicação top no minu 34:10
const key = "9f0878c94608b5bc97e84532394af6dd";

function exibirDadosTela(dados) {
  console.log(dados);
  document.querySelector(".city").innerHTML = "Tempo em " + dados.name;
  document.querySelector(".temp").innerHTML =
    Math.floor(dados.main.temp) + "°C";
  document.querySelector(".descricao").innerHTML = dados.weather[0].description;
  document.querySelector(".umidade").innerHTML =
    "Umidade: " + dados.main.humidity + "%";
  document.querySelector(
    ".icone"
  ).src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function searchCity(city) {
  const dados = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`
  ).then((resposta) => resposta.json());

  exibirDadosTela(dados);
}

function clikbutton() {
  const city = document.querySelector(".input-city").value;
  searchCity(city);
}
