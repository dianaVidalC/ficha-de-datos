window.addEventListener("load",function(){
  var nombre = document.getElementById("nombre");
  var apellido = document.getElementById("apellido");
  var dni = document.getElementById("dni");
  var direccion = document.getElementById("direccion");

  var boton=document.getElementById("boton");

  boton.addEventListener("click",function(e){
    e.preventDefault();

  if((!(/^[a-z\d_]{4,15}$/i.test(dni.value)))){
    alert("Ingrese un nombre válido");
    return false;
  }else if (!(/^[a-z\d_]{4,15}$/i.test(dni.value))){
    alert("Ingrese un apellido válido");
    return false;
  }else if (!(/^\d{8}$/.test(dni.value))){
    alert("Ingrese un número de DNI con 8 dígitos");
    return false;
  }else if (!(/^[0-9a-zA-Z]+$/.test(dni.value))){
    alert("Ingrese una direccion válida");
    return false;
  }else{
    document.getElementById("datos").innerHTML= "<ul><li>Nombre:" + nombre.value +
                                              "<li>Apellido: " + apellido.value
                                              + "<li>DNI: "+ dni.value+ "<li>Dirección: "
                                              + direccion.value + "</ul>";
                                            }
  });
});
