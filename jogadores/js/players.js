const imagem = document.querySelector("#silhueta")
const btHalland = document.querySelector("#halland")
const btNeymar_jr = document.querySelector('#neymar_jr')
const btMessi = document.querySelector('#messi')
const btCristiano_Ronaldo = document.querySelector('#cristiano_ronaldo')
const btMbbape = document.querySelector('#mbbape')
const btDybala = document.querySelector('#dybala')

btHalland.addEventListener('click',Halland)
btNeymar_jr.addEventListener('click',Neymar_jr)
btMessi.addEventListener('click',Messi)
btCristiano_Ronaldo.addEventListener('click',Cristiano_Ronaldo)
btMbbape.addEventListener('click',Mbbape)
btDybala.addEventListener('click',Dybala)

function Halland(){
    imagem.src = "images/Halland.jpg"
}
function Neymar_jr(){
    imagem.src = "images/Neymar_Jr.jpg"
}
function Messi(){
    imagem.src = "images/Messi.webp"
}
function Cristiano_Ronaldo(){
    imagem.src = "images/Cristiano_Ronaldo.jpg"
}
function Mbbape(){
    imagem.src = "images/Mbappe.jpg"
}
function Dybala(){
    imagem.src = "images/Dybala.jpg"
}