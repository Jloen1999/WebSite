/* Script que simula una calculadora. Se deben implementar las funciones que se llaman desde los botones*/

//Declaracion de variables
var num1 = 0;
var num2 = 0;
var opera;
var numeros = [];
var resultado = 0;
var cuadroTexto = document.getElementById('valor_numero');
cuadroTexto.value = '';

//Función que concatena el número presionado. Luego refresca el texto
function darNumero(numero) {
    desactivarEdicion();
    numeros.push(numero); // Añadir número al array
    num1 = parseInt(numeros.join('')); // Convertir el array a un número entero y asignarlo a num1
    refrescar(); // Refrescar el cuadro de texto
    

}

function activarEdicion() {
    document.getElementById('valor_numero').readOnly = false;
}

function desactivarEdicion() {
    document.getElementById('valor_numero').readOnly = true;
}

//Función que coloca la coma al presionar dicho botón. Luego refresca el texto
function darComa() {
    desactivarEdicion();
    numeros.push('.');
    num1 = parseFloat(numeros.join(''));
    refrescar();
}

//Función que coloca la C al presionar dicho botón. Luego refresca el texto
function darC() {
}


//Esta función realiza las distintas operaciones aritméticas en función del botón pulsado
function operar(valor) {
}

//Función para pulsar igual. Al final llama a refrescar()
/*
suma = 1
resta = 2
multiplicacion = 3
division = 4
potencia = 5
*/

function esIgual() {
}
//Muestra en el cuadro de texto el valor
function refrescar() {
    cuadroTexto.value = num1;
}
