// Creazione degli elementi

const contenitore = document.getElementById("contenitore");

const innerDiv = document.createElement("div");
innerDiv.className = "flex justify-center items-center";
contenitore.appendChild(innerDiv);

const btnMeno = document.createElement("button");
btnMeno.className = "bg-[#a20808] hover:bg-red-700 text-white font-bold py-1 px-3 rounded-sm mr-4";
btnMeno.appendChild(document.createTextNode("-"));
innerDiv.appendChild(btnMeno);

const valore = document.createElement("p");
valore.className = "text-center text-6xl font-medium text-neutral-700 px-4 mr-4";
valore.appendChild(document.createTextNode(0));
innerDiv.appendChild(valore);

const btnPiu = document.createElement("button");
btnPiu.className = "bg-[#033903] hover:bg-green-700 text-white font-bold py-1 px-3 rounded-sm";
btnPiu.appendChild(document.createTextNode("+"));
innerDiv.appendChild(btnPiu);

const secondoInnerDiv = document.createElement("div");
secondoInnerDiv.className = "flex justify-center items-center mt-5";
contenitore.appendChild(secondoInnerDiv);

const btnReset = document.createElement("button");
btnReset.className = "bg-white hover:bg-[#ebe3e3] text-neutral-700 font-bold py-1 px-3 rounded";
btnReset.appendChild(document.createTextNode("Reset"));
secondoInnerDiv.appendChild(btnReset);

// funzioni dei bottoni

let contatore = 0;

btnMeno.onclick = function() {
  contatore--;
  valore.innerHTML = contatore;
};

btnPiu.onclick = function() {
  contatore++;
  valore.innerHTML = contatore;
};

btnReset.onclick = function() {
  contatore = 0;
  valore.innerHTML = contatore;
};