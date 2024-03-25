
const frmPesquisa = document.querySelector('form');
const key = '1620c340';



frmPesquisa.onsubmit = (ev) => {
  ev.preventDefault();


const pesquisa = ev.target.pesquisa.value;
if (pesquisa == ""){
   alert('preencha o campo!');
return;
}

fetch(`https://www.omdbapi.com/?s=${pesquisa}&apikey=${key}`)
.then(result => result.json())
.then(json => carregaLista(json));

}

const carregaLista = (json) => {

    const lista = document.querySelector("div.lista");
     lista.innerHTML = "";
     
     if(json.response == 'False'){
     alert('Nenhum filme encontrado.');
     return
     }

     json.Search.forEach(element => {
     
     let item = document.createElement("div");
     item.classList.add("item"); 
     item.innerHTML = `<img src="${element.Poster}" /><h2>${element.Title}</h2>`
     lista.appendChild(item);

     });
}


