function mostrarImagen() {
  // Obtiene los valores seleccionados de los tres menús desplegables
  var opcion1 = document.getElementById("menu1").value;
  var opcion2 = document.getElementById("menu2").value;
  var opcion3 = document.getElementById("menu3").value;

  // Obtiene el identificador del código de la imagen en función de las opciones seleccionadas
  var identificadorImagen = "";
  if (opcion1 == "div1" && opcion2 == "div2" && opcion3 == "div3") {
    identificadorImagen = "codigo-imagen1";
  } else if (opcion1 == "div4" && opcion2 == "div5" && opcion3 == "div6") {
    identificadorImagen = "codigo-imagen2";
  }

  // Muestra la imagen SVG correspondiente en función del identificador obtenido
  if (identificadorImagen != "") {
    document.getElementById("mapadiv").innerHTML = '<object data="#' + identificadorImagen + '" type="image/svg+xml"></object>';
  } else {
    document.getElementById("mapadiv").innerHTML = '';
  }
}
