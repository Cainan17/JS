//DOM - 1º parte do código
const lampada = document.querySelector('#lampada')
const btLigar =  document.querySelector('#ligar')
const btDesligar = document.querySelector('#apagar')

//EVENT0 - 2º parte do código
btLigar.addEventListener('click',acender)
btDesligar.addEventListener('click',apagar)
lampada.addEventListener('dblclick', quebrar)


//FUNÇÃO(AÇÃO) - última etapa do código JS
function acender(){
lampada.src = "images/acesa.gif"
}
function apagar(){
lampada.src = "images/apagada.gif"
}
function quebrar(){
lampada.src = "images/quebrada.jpg"
}







