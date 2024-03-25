// DUPLA CAINAN E LUCAS SILVA
const kg = document.querySelector('#quilo')
const alt = document.querySelector('#altura')

const botao = document.querySelector('#botao')
const val = document.querySelector('#valor')
const resp = document.querySelector('#resposta')



botao.addEventListener('click', calcular)


function calcular(){

    let valorIMC = kg.value/((Number(alt.value))*(Number(alt.value)))
    val.textContent=""+valorIMC.toFixed(1)

    if (valorIMC <=18.5){
        resp.textContent="Magreza"
        resp.classList.add('magreza')
        resp.classList.remove('pesoNormal')
        resp.classList.remove('acimaDoPeso')
        resp.classList.remove('obesidade')

    }
    if (valorIMC >18.5 && valorIMC<=25){
        resp.textContent="Peso Normal"
        resp.classList.add('pesoNormal')
        resp.classList.remove('magreza')
        resp.classList.remove('acimaDoPeso')
        resp.classList.remove('obesidade')
    }
    if (valorIMC >25 && valorIMC<30){
        resp.textContent="Acima do Peso"
        resp.classList.add('acimaDoPeso')
        resp.classList.remove('pesoNormal')
        resp.classList.remove('magreza')
        resp.classList.remove('obesidade')
    }
    if (valorIMC >=30){
        resp.textContent="Obesidade"
        resp.classList.add('obesidade')
        resp.classList.remove('pesoNormal')
        resp.classList.remove('magreza')
        resp.classList.remove('acimaDoPeso')
    }
    


}