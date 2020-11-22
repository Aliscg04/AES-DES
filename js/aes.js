//Leer el archivo txt
function readfile(f, r){	
	var reader = new FileReader();
	reader.readAsText(f);
	reader.onload = function (){
		var text = reader.result;
		if(r){
			if(text.length>16){
				window.alert("La clave debe tener 64 bits de longitud (número hexadecimal de 16 dígitos)");
				return;
			}
			document.form.key.value = "";
			document.form.key.value = text;
		} else{
		document.form.input.value = "";
		document.form.input.value = text;
		}
	};

	reader.onerror = function(e){
		console.log("Error", e);
	};
}
//----------------------------------------------TXT/MENSAJE----------------------------------------------------

function descargarArchivo(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'cifrado_descifrado.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};

//Función de ayuda: reúne los datos a exportar en un solo objeto
function obtenerDatos() {
    return {
        Mensaje: document.getElementById('output').value,
        fecha: (new Date()).toLocaleDateString()
    };
};

//Genera un objeto Blob con los datos en un archivo TXT
function generarTexto(datos) {
    var texto = [];
    texto.push(datos.Mensaje);
    //El contructor de Blob requiere un Array en el primer parámetro
    //así que no es necesario usar toString. el segundo parámetro
    //es el tipo MIME del archivo
    return new Blob(texto, {
        type: 'text/plain'
    });
};

document.getElementById('boton-txt').addEventListener('click', function () {
    var datos = obtenerDatos();
    descargarArchivo(generarTexto(datos), 'Mensaje.txt');
}, false);

//----------------------------------------------TXT/CLAVE----------------------------------------------------

function descargarArchivo2(contenidoEnBlob, nombreArchivo) {
    var reader = new FileReader();
    reader.onload = function (event) {
        var save = document.createElement('a');
        save.href = event.target.result;
        save.target = '_blank';
        save.download = nombreArchivo || 'cifrado_descifrado.dat';
        var clicEvent = new MouseEvent('click', {
            'view': window,
                'bubbles': true,
                'cancelable': true
        });
        save.dispatchEvent(clicEvent);
        (window.URL || window.webkitURL).revokeObjectURL(save.href);
    };
    reader.readAsDataURL(contenidoEnBlob);
};

function obtenerDatos2() {
    return {
        Mensaje: document.getElementById('clave').value,
        fecha: (new Date()).toLocaleDateString()
    };
};

function generarTexto2(datos) {
    var texto = [];
    texto.push(datos.Mensaje);
    return new Blob(texto, {
        type: 'text/plain'
    });
};

document.getElementById('boton-txt').addEventListener('click', function () {
    var datos = obtenerDatos2();
    descargarArchivo2(generarTexto2(datos), 'Clave.txt');
}, false);