// script.js

let chave = "cebcd482eda57fa9a6714c1c2ba91885";

async function buscarCidade() {
    let dados = await fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=londres&appid=cebcd482eda57fa9a6714c1c2ba91885"
    ).then((resposta) => resposta.json());

  //AWAIT => ESPERE
  //FETCH => FERRAMENTA DO JS PARA ACESSAR SERVIDORES
  //THEN => ENTÃO
  //JSON => JS OBJECT NOTATION(FORMATO QUE O JS ENTENDE)

// Exibe os dados no console
  console.log(dados);
}

function cliqueiNoBotao() {
  // Obtém o valor digitado na entrada de texto
  let cidade = document.querySelector(".input-cidade").value;

  // Chama a função para buscar os dados da cidade
  buscarCidade();
}
