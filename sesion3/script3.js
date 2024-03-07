var num1 = 0;
var num2 = 0;
var coma = null;
var opera = null;

function darNumero(number) {
    let caja_texto = document.getElementById('valor_numero');

    if (caja_texto.value === '0') {
        caja_texto.value = number;
    } else {
        caja_texto.value += number;
    }
}

function operar(operacion) {
    let caja_texto = document.getElementById('valor_numero');
    num1 = parseFloat(caja_texto.value.replace(coma, '.'));
    opera = operacion;
    caja_texto.value = '0';
}

function esIgual() {
    let caja_texto = document.getElementById('valor_numero');
    num2 = parseFloat(caja_texto.value.replace(coma, '.'));
    try {
        if (opera === 'x') {
            opera = '*';
        }else if(opera === 'exp'){
            caja_texto.value = Math.pow(num1, num2);
            return;
        }



        caja_texto.value = parseFloat(eval(num1 + opera + num2));
    } catch (error) {
        alert('Error de sintaxis: ' + error);
    }
    console.log(caja_texto.value);
    refrescar();
}

// Muestra el valor en la caja de texto.
function refrescar() {
    let caja_texto = document.getElementById('valor_numero');
    caja_texto.value = caja_texto.value.replace('.', coma);
}

function darComa(com) {
    coma = com;
    let caja_texto = document.getElementById('valor_numero');
    if (!caja_texto.value.includes(coma)) {
        caja_texto.value += coma;
    }

}

function darC()
{
    document.getElementById('valor_numero').value = '0';
    num1 = 0;
    num2 = 0;
    coma = null;
    opera = null;
    
}

document.addEventListener('keydown', (event)=>{
    let valorTecla = event.key;

    if(/\d/.test(valorTecla)){
        darNumero(valorTecla);
    }else if(valorTecla === ','){
        darComa(',');
    }else if(valorTecla === '.'){
        darComa('.');
    }else if(['+', '-', 'x', '/', '*'].includes(valorTecla)){
        operar(valorTecla);
    }else if(valorTecla === '='){
        esIgual();
    }else if(valorTecla === 'C'){
        darC();
    }

    if(valorTecla === 'Enter'){
        esIgual();
    }else if(valorTecla === 'Escape'){
        darC();
    }
});

