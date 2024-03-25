//DOM
const n1 =document.querySelector('#unid1')
const n2 =document.querySelector('#unid2')
const n3 =document.querySelector('#unid3')

const botao =document.querySelector('#botao')

const media =document.querySelector('#media')
const resultado =document.querySelector('#resultado')
const Aprovado = document.querySelector('#aprovado')


//evento

botao.addEventListener('click',calcular)


//função, última parte!


function calcular(){

let mediaFinal = (Number(n1.value)+Number(n2.value)+Number(n3.value))/3

media.textContent= "Sua média final foi: "+mediaFinal.toFixed(1)

if(mediaFinal>=7){
resultado.classList.add('aprovado')
resultado.classList.remove('reprovado')
resultado.textContent='Aprovado!'
}
else{
    resultado.classList.add('reprovado')
    resultado.classList.remove('aprovado')
    resultado.textContent='Reprovado!'
}

}







