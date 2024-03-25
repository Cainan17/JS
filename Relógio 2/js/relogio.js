//dom 
const hora = document.querySelector('#hora')
const minuto = document.querySelector('#minuto')
const segundo = document.querySelector('#segundo')

//evento

setInterval (relogio,1000) //1 segundo roda sem determinar o valor.



//função (última parte do código)


function relogio(){

    let hoje = new Date()
    
    let hr = hoje.getHours()
    let min = hoje.getMinutes()
    let seg = hoje.getSeconds()

    
    if(hr<10){
        hr="0"+hr
    }
    if(min<10){
        min="0"+min
    }
    if(seg<10){
        seg="0"+seg
    }

   
    hora.textContent=hr
    minuto.textContent=min
    segundo.textContent=seg

   

}