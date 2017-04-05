 // alert("hola")
 var celdaNumero= document.getElementsByClassName("numero");
 var celdaColor = document.getElementsByClassName('color');
 var celdaBomba = document.getElementsByClassName('bomba');
 var reinicio = document.getElementById('reinicio');
 reinicio.addEventListener("click", reinicioJuego);

 for(i = 0; i < celdaNumero.length; i++){
   celdaNumero[i].addEventListener("click", clickCeldaNumero)
 }

 for(i = 0; i < celdaColor.length; i++){
   celdaColor[i].addEventListener("click", clickCeldaColor)
 }

 for(i = 0; i < celdaBomba.length; i++){
   celdaBomba[i].addEventListener("click", clickCeldaBomba)
 }

 function clickCeldaNumero() {
   this.innerText = "1";
 }

 function clickCeldaColor() {
   var img = document.createElement("img");
   this.style.backgroundColor = "#4AD0BA";
 }

 function clickCeldaBomba() {
   var img = document.createElement("img");
   img.src = "assets/img/bombs.png";
   img.setAttribute( "width", "45px");
   img.setAttribute( "height", "45px");
   this.appendChild(img);

   inavilitarCeldas();
   alert ("PUM!!!\nGAME OVER")
 }

 function inavilitarCeldas(){
   for(i = 0; i < celdaNumero.length; i++){
     celdaNumero[i].removeEventListener("click", clickCeldaNumero);
   }

   for(i = 0; i < celdaBomba.length; i++){
     celdaBomba[i].removeEventListener("click", clickCeldaBomba)
   }

   for(i = 0; i < celdaColor.length; i++){
     celdaColor[i].removeEventListener("click", clickCeldaColor)
   }

 }
 function reinicioJuego(){
   location.reload();
 }
