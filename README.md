#Previsão do Tempo

#Descrição

Este é um projeto simples de previsão do tempo, onde os usuários podem inserir o nome de uma cidade e obter informações meteorológicas básicas, como temperatura, condição climática e umidade.

#Funcionalidades

Inserção de Cidade: Os usuários podem digitar o nome de uma cidade na caixa de entrada fornecida.
Busca de Dados: Ao clicar no botão de busca, o sistema consulta a API do OpenWeatherMap para obter informações sobre o clima da cidade inserida.
Exibição de Resultados: Os dados meteorológicos são exibidos na caixa de informações, incluindo a temperatura, condição climática e umidade.

#Tecnologias Utilizadas

HTML5

CSS3

JavaScript

#API Utilizada

Este projeto faz uso da API do OpenWeatherMap para obter os dados meteorológicos das cidades.

#Como Usar
Clone este repositório para o seu ambiente local.
Abra o arquivo index.html em um navegador da web.
Digite o nome da cidade desejada na caixa de entrada e clique no botão de busca.
Aguarde os resultados serem exibidos na caixa de informações.
Pré-requisitos
Certifique-se de ter uma chave de API válida do OpenWeatherMap. Substitua a variável chave no arquivo script.js pela sua chave de API.

#Exemplo de Uso
javascript
Copy code
let chave = "sua-chave-de-api";

async function buscarCidade() {
    let cidade = document.querySelector(".input-cidade").value;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}`;
    let dados = await fetch(url).then((resposta) => resposta.json());
    console.log(dados);
}

function cliqueiNoBotao() {
    buscarCidade();
}


Autor
Wedson Tavares em conjunto com a DevClub
<a href="https://www.linkedin.com/in/wedsontavares/">Linkedin</a>



