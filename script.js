
function encriptador() {
    let datosEntrada = document.getElementById('textoEntrada').value;
    let datosSalida = document.getElementById('textoResultado');
    //aqui definimos el diccionario que significara cada vocal 
    const diccionario = {
        a : 'ai',
        e : 'enter',
        i : 'imes',
        o : 'ober',
        u : 'ufat',
    }
    // repasar más la logica de esta función para no olvidar
    //split('') convierte el string en array hola --> 'h','o','l','a'
    //.map regresa el nuevo valor que seria un array + la funcion buscar_vocales
    //declaramos una funcion anonima buscar_diccionario para almacenar el nuevo valor 'h','o','l','a'
    //en este caso seria el texto ingresado
    // return diccionario recorre y transforma las vocales de O || devuelve el valor original
    //finalmente con Join vuelve a juntar todo los elementos del array y lo convierte en texto
    //obtenemos que datosSalida.value(value = valor) es igual a encriptado 
    // y llamamos la funcion ocultarImagen ya que esta necesita actualizarse con cada modificacion en el texto
    //sigue estudiando , no te rindas! no lo entendi al 100% pero con esfuerzo lo haras.
    let encriptado =datosEntrada.split('').map
    (function(buscar_vocales)
    {return diccionario
        [buscar_vocales] || buscar_vocales;
    }).join('');
    datosSalida.value = encriptado;
    ocultarImagen();
}
function desencriptar() {
    let datosEntradaDesencriptar = document.getElementById('textoEntrada').value;
    let datosSalidaDesencriptar = document.getElementById('textoResultado');
    let descifrar = datosEntradaDesencriptar
                    //replace se usa para remplazar y g de forma global osea todo el texto,
                    // si nosolo encontraria las primeras coincidencias
                    .replace(/ai/g,'a')
                    .replace(/enter/g,'e')
                    .replace(/imes/g,'i')
                    .replace(/ober/g,'o')
                    .replace(/ufat/g,'u');
    datosSalidaDesencriptar.value = descifrar;
    ocultarImagen();
}
function ocultarImagen() {
    let conTexto = document.getElementById('textoResultado').value;
    let imagen = document.getElementById('noTexto')
    let cuadroResultado = document.getElementById('textoResultado');
    let btnCopiar = document.getElementById('button_copiar')
    if(conTexto === "" ){
    cuadroResultado.style.display= 'none';
    imagen.style.display = 'block';
    btnCopiar.style.display= 'none'
    }
    else{
        cuadroResultado.style.display = 'block';
        imagen.style.display = 'none';
        btnCopiar.style.display= 'block'

    }
}       //función para que ocultar imagen se aplique cuando se borre el texto en textoEntrada
function coordinacionDeAmbosTextos () {
    let textoEntrada = document.getElementById('textoEntrada').value;
    let borrarTexto = document.getElementById('textoResultado');
    if(textoEntrada === ''){
        borrarTexto.value = '';
        ocultarImagen();
    }
}

//clipboardCopy estudiar mas de esta Api igual
function copiarTexto() {
    let textoParaCopiar = document.getElementById('textoEntrada').value;
    //aqui usamos la api writeText copia el texto 
    //then() https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise/then
    /* ejemplo de uso p.then(alCumplir[, enRechazo]);

p.then(function(value) {
  // cumplimiento
}, function(reason) {
  // rechazo
});*/
    navigator.clipboard.writeText(textoParaCopiar)
    // then se usa para manejar cuando la promesa es exitosa 
    //function se ejecuta segun el estado de la promesa , sea exitosa o catch rechazada
    .then(function() {
        alert('El texto ha sido copiado')
    })
    //catch se usa para manejar algun error que surja durante la operación
    .catch(function() {
        alert('No ha sido posible copiar el texto')
    })
}
// https://midu.dev/leer-copiar-pegar-portapapeles-javascript/ <--practicar