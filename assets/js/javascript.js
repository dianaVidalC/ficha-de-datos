var nombre = document.getElementById("nombre");
var apellido = document.getElementById("apellido");
var dni = document.getElementById("dni");
var direccion = document.getElementById("direccion");

function enviaDatos(){
  document.getElementById("datos").innerHTML= "<ul><li>Nombre:" + nombre.value +
                                            "<li>Apellido: " + apellido.value
                                            + "<li>DNI: "+ dni.value+ "<li>Dirección: "
                                            + direccion.value + "</ul>";

};
