function msj_salir(){
    //algoritmo de la funcion
    alert("vuelve pronto ") 
}

function invitar(){
    var nombre;
    var deseo;

    nombre=prompt("Escribe tu nombre")
    deseo=prompt("¿que te gusta comer?")

    alert(" hola " + nombre + " te invito a comer " + deseo )
}
function adivinar(){
    var respuesta;
    respuesta=prompt("¿Que tiene el rey en la panza?")

    if(respuesta=="ombligo"){
        alert("¡Correcto!")

    }
        else{
            alert("!Error¡")
        }
    }
    function llevar(){
        window.open("https://www.youtube.com/watch?v=gOoLya0S0t4","video","width=500px heigth=500px")
    }