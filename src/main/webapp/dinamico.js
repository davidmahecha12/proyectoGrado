const botones = [
  document.getElementById("toggle-paragraph"),
  document.getElementById("toggle-paragraph2"),
  document.getElementById("toggle-paragraph3"),
  document.getElementById("toggle-paragraph4")
];

const dynamicContents = [
  document.getElementById("dynamic-content"),
  document.getElementById("dynamic-content2"),
  document.getElementById("dynamic-content3"),
  document.getElementById("dynamic-content4")
];

// Agregar clase .seleccionado a la primera opción
botones[0].classList.add('seleccionado');
dynamicContents[0].classList.add('seleccionado');
dynamicContents[0].style.display = "block";

botones.forEach((boton, indice) => {
  boton.addEventListener('click', (event) => {
    // desactiva la opción anterior
    const opcionesAnteriores = document.querySelectorAll('.seleccionado');
    opcionesAnteriores.forEach((opcionAnterior) => {
      opcionAnterior.style.display = "none";
      opcionAnterior.classList.remove('seleccionado');
    });

    // activa la opción seleccionada
    const dynamicContent = dynamicContents[indice];
    dynamicContent.style.display = "block";
    dynamicContent.classList.add('seleccionado');
  });
});
