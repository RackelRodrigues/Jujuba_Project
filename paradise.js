const conteiner = document.querySelector(".conteiner");
const p = document.createElement("p");
const fotinhas = document.querySelector(".caixa-fotinhas");
const h1 = document.createElement("h5");
const h2 = document.createElement("h5");
const h3 = document.createElement("h5");

//tentando criar uma função que adiciona texto ao a foto na hora que passar mouse
function referenciafunction(){
    p.classList.add("comida");
    p.textContent = "Tortinha de Leite condesado";
    //os dois paramentos são onde quero colocar  
    conteiner.insertAdjacentElement("beforeend", p);
}

function removefunction(){
  var removertag = document.querySelector(".comida");
   removertag.remove();
}

function tortinhasfunction(){
 h1.classList.add("limao");
 h1.textContent = "- Tortinha de Limão";
 fotinhas.insertAdjacentElement("afterend", h1);
}
function tortinhas2function(){
 h2.classList.add("limao");
 h2.textContent = "- Tortinha de Maracuja";
 fotinhas.insertAdjacentElement("afterend", h2);
}
function tortinhas3function(){
 h3.classList.add("limao");
 h3.textContent = "- Tortinha de Morango";
 fotinhas.insertAdjacentElement("afterend", h3);
}

function removerh1(){
  var apagartag = document.querySelector(".limao");
 apagartag.remove();
}
function removerh2(){
  var apagarh2= document.querySelector(".limao");
  apagarh2.remove();
}
function removerh3(){
  var apagarh3 = document.querySelector(".limao");
  apagarh3.remove();
}