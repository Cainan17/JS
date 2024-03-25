//dom 
const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minuto')
const segundo = document.querySelector('#segundo')
const ano = document.querySelector('#ano')
const mes = document.querySelector('#mes')
const dia = document.querySelector('#dia')
const turno = document.querySelector('#turno')
const emoji = document.querySelector('#img')
//evento

setInterval (relogio,1000) //1 segundo roda sem determinar o valor.



//função (última parte do código)


function relogio(){

    let hoje = new Date()
    
    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()
    let di = hoje.getFullYear()
    let me= hoje.getMonth() +1
    let an = hoje.getDate()
    
    if(hr<10){
        hr="0"+hr
    }
    if(min<10){
        min="0"+min
    }
    if(seg<10){
        seg="0"+seg
    }
    
   if(di<10){
    di="0" +di
   }

   if(me<10){
    me="0" +me
   }
   if(an<10){
    an="0" +an
   }

hr=14

    hora.textContent=hr
    minuto.textContent=min
    segundo.textContent=seg
    dia.textContent=di
    mes.textContent=me
    ano.textContent=an

    if(hr>=5 && hr<12){
    emoji.src="img/sun.png"
    turno.textContent="Bom dia!"
    }
    
    else if(hr>=12 && hr<=18){
    emoji.src="img/sun.png"
    turno.textContent="Boa tarde!"
    }
    
    else{
    emoji.src="img/half-moon.png"
    turno.textContent="Boa noite!"
    }



   

}