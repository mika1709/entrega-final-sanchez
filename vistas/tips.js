const PreciosBaño = [380,550];
const PreciosCorte = [500,650];
const descuentoPorDos = 0.15;

let SeleccionActividad = true;
let actividad = '';
while (SeleccionActividad) {
  actividad = prompt("¿Desea solo baño (B), solo corte (C) o Baño y corte (BC)?");
  if (actividad === "B" || actividad === "b"  || actividad === "C" || actividad === "c" || actividad === "BC" || actividad === "bc") {
    SeleccionActividad = false;
  }
}

let SeleccionTamaño = true;
let tamañoanimal = '';
while (SeleccionTamaño) {
  tamañoanimal = prompt("¿Su perro es Pequeño o Grande?");
  if (tamañoanimal === "Pequeño" || tamañoanimal === "pequeño" || tamañoanimal === "PEQUEÑO" || tamañoanimal === "Grande" || tamañoanimal === "grande" || tamañoanimal === "GRANDE") {
    SeleccionTamaño = false;
  }
}

if ((tamañoanimal === "Pequeño" || tamañoanimal === "pequeño" || tamañoanimal === "PEQUEÑO") && (actividad === "B" || actividad === "b")) {
  alert("El precio del servicio contratado es: " + PreciosBaño[0]);
} else if ((tamañoanimal === "Grande" || tamañoanimal === "grande" || tamañoanimal === "GRANDE") && (actividad === "B" || actividad === "b")) {
  alert("El precio del servicio contratado es: " + PreciosBaño[1]);
} else if ((tamañoanimal === "Pequeño" || tamañoanimal === "pequeño" || tamañoanimal === "PEQUEÑO") && (actividad === "C" || actividad === "c")) {
  alert("El precio del servicio contratado es: " + PreciosCorte[0]);
} else if ((tamañoanimal === "Grande" || tamañoanimal === "grande" || tamañoanimal === "GRANDE") && (actividad === "C" || actividad === "c" )) {
  alert("El precio del servicio contratado es: " + PreciosCorte[1]);
} else if ((tamañoanimal === "Pequeño"|| tamañoanimal === "pequeño" || tamañoanimal === "PEQUEÑO") && (actividad === "BC"|| actividad === "bc")) {
  const precioTotal = PreciosBaño[0] + PreciosCorte[0] - (PreciosBaño[0] + PreciosCorte[0]) * descuentoPorDos;
  alert("El precio del servicio contratado es: " + precioTotal);
} else if ((tamañoanimal === "Grande" || tamañoanimal === "grande" || tamañoanimal === "GRANDE") && (actividad === "BC" || actividad === " bc")) {
  const precioTotal = PreciosBaño[1] + PreciosCorte[1] - (PreciosBaño[1] + PreciosCorte[1]) * descuentoPorDos;
  alert("El precio del servicio contratado es: " + precioTotal);
}
