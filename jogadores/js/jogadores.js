const imagem = document.querySelector('#silhueta')
const btHaaland =  document.querySelector('#haaland')
const btCr7 =  document.querySelector('#cr7')
const btMbappe =  document.querySelector('#mbappe')
const btNeymar =  document.querySelector('#neymar')
const btDybala =  document.querySelector('#dybala')
const btMessi =  document.querySelector('#messi')



btHaaland.addEventListener('click', haaland)
btCr7.addEventListener('click', cr7)
btMbappe.addEventListener('click', mbappe)
btNeymar.addEventListener('click', neymar)
btDybala.addEventListener('click', dybala)
btMessi.addEventListener('click', messi)
 


function haaland(){
   imagem.src = "images/haaland.webp"
    }
function cr7(){
   imagem.src = "images/cr7.jpg"
    }
function mbappe(){
   imagem.src = "images/mbappe.webp"
    }
function neymar(){
   imagem.src = "images/neymar.webp"
    }
function dybala(){
   imagem.src = "images/dybala.webp"
    }
function messi(){
   imagem.src = "images/messi.jpg"
    }

  



