const chave ='b1b25fa654988cabf727a246c8b4d3a0'

const nomeCidade = document.querySelector('.input-cidade')
const botao = document.querySelector('.botao-busca')
const textoCidade = document.querySelector('.cidade')
const temperatura = document.querySelector('.temp')
const imagem = document.querySelector('.img-previsao')
const previsao = document.querySelector('.texto-previsao')


botao.addEventListener('click',buscarCidade)


async function buscarCidade(){

    const cidade = nomeCidade.value
  
    //await espera o resultado do fetch
    //fetch procura api
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&lang=pt_br&units=metric`)
    .then(resposta =>resposta.json())
   
   textoCidade.textContent= "Tempo em "+dados.name
   temperatura.textContent= Math.ceil(dados.main.temp)+"°C"
   previsao.textContent= dados.weather[0].description
   imagem.src= `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`



    console.log(dados)
  

}
