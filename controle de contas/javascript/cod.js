const contaEl = document.querySelector("#conta")
const valorEl = document.querySelector("#valor")

const formEl = document.querySelector("form")
const resultadoEl = document.querySelector("#resultado")
const totalEl = document.querySelector("#total")


formEl.addEventListener("submit", registrarConta)

let resposta = ""
let numContas = 0
let valorTotal= 0

function registrarConta(e){
e.preventDefault()

const conta = contaEl.value
const valor = parseFloat(valorEl.value)

if (conta === "" || valor == 0 ||  isNaN(valor)){
alert("Por favor, preencha a conta e o valor!")
contaEl.focus()
return

}

numContas++
valorTotal += valor


resultadoEl.innerHTML = resposta += `<p>${conta}
 - ${valor.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>`

totalEl.innerHTML = `<p>${numContas} conta(s)
- Total: ${valorTotal.toLocaleString("pt-br", {style: "currency", currency: "BRL"})}</p>`

contaEl.value = ""
valorEl.value = ""
contaEl.focus()   
    console.log(
conta,valor
)                                  
}



