function auto (MARCA, MODELO, ANNIO){
  this.marca = MARCA;
  this.modelo = MODELO;
  this.annio = ANNIO;
}
var autos = [];
for(let i = 0 ; i < 5 ; i++){
  var marca = prompt("Ingresa la marca del auto");
  var modelo = prompt("Ingresa el modelo del auto");
  var annio = prompt("Ingresa el año del auto");
  autos.push(new auto (marca, modelo, annio));
}

for(let i = 0 ; i < autos.length ; i++){
  console.log(autos[i]);
}

/*
function autos(marca, modelo, annio){
  this.marca = marca;
  this.modelo=modelo;
  this.annio=annio;
}

var auto = [];

var autoNuevo = new autos("Tesla", "Model 3", 2021);

function cargaraAutos(){
  for(i=0; i<5; i++){
    auto.push(new autos("Tesla", "Model 3", 2021));
  }
}
*/
