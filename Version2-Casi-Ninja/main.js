var celdas = document.getElementsByClassName("celdaBoton");//regresa un collectionHTML, no es un arreglo

//para iterar en un collectionHTML
[].forEach.call(celdas,function(celda){
  celda.addEventListener("click", jugarCelda);
});

function jugarCelda() {
  this.style.display = "none";
  var pHermano = this.nextElementSibling; //para acceder a <p> que es el hermano
  pHermano.style.display = "block";

  var cellType= this.parentNode.getAttribute("data-cell-type");

  if(cellType == "bomba"){
    alert("¡PUM!");
    [].forEach.call(celdas,function(celda){
      celda.removeEventListener("click", jugarCelda);
    });
  }
}

var reinicio = document.getElementById('reinicio');

function reinicioJuego() {

}



//--------------------FUNCION TABLA DINAMICA-------------------------------------------------------//
/*
var crearTabla = document.getElementById('crearTabla');
crearTabla.addEventListener("click", generarTabla);

function generarTabla() {
  var n = parseInt(document.getElementById('nTabla').value);

  var nuevaTabla = document.createElement("table");
  nuevaTabla.border = 1;

  for(var i= 0; i<=n; i++){
    var nuevoTr = document.createElement("tr");

    for(var k= 0; k<=n; k++){
      var nuevoTd = document.createElement("td");
      var nuevoBoton = document.createElement("button");
      var nuevoP = document.createElement("p");

      var numeroAleatorio = randomIntFromInterval(1.3);

      if(numeroAleatorio == 1){
        nuevoTd.setAttribute("data-cell-type", "bomba");
        var nuevaImagen = document.createElement("img");
        nuevaImagen.src = "bombs.png";
        nuevoP.appendChild(nuevaImagen);
      }
      //else if(numeroAleatorio == 2){}
      }
      nuevoBoton.className = "celdaBoton";
      nuevoBoton.innerText = "click";
      nuevoBoton.onclick = jugarCelda;

      nuevoP.innerText = "1";
      nuevoP.style.display = "none";

      nuevoTd.appendChild(nuevoBoton);
      nuevoTd.appendChild(nuevoP);

      nuevoTr.appendChild(nuevoTd)
    }
    nuevaTabla.appendChild(nuevoTr);
    document.body.appendChild(nuevaTabla);
  }
*/
