// diccionario para almacenar los valores de codificacion
const codigo={
    'a':'ai',
    'e':'enter',
    'i':'imes',
    'o':'ober',
    'u':'ufat'
};

// funcion para codificar el texto proporcionado por el usuario
function codificar(){
    let inputTexto = document.getElementById('mensaje').value;
    let texto=inputTexto.toLowerCase();   // Convertir el texto en minusculas

    if(validarTexto(texto)){
        let textoCodificado = texto.split('').map(char => {return codigo[char] || char;}).join('');

        let elementoHTML = document.querySelector('.container__texto__transformado');  
        elementoHTML.innerHTML= textoCodificado;     // Mostrar el texto ingresado

        elementoHTML.classList.add('visible'); // Mostrar el texto encriptado
        document.getElementById('mensaje__inicial').style.display = 'none';   // Ocultar imagen y mensaje inicial
        elementoHTML.style.display='block';    //Mostrar el resultado del texto encriptado

        mostrarBotonCopiar();   // Para mostrar el boton copiar
        
    }else{
        alert("No se aceptan carácteres especiales. Por favor intente nuevamente.");  
    }
}

// funcion para decodificar el texto proporcionado por el usuario
function decodificar(){
    let textoCodificado= document.getElementById('mensaje').value;
    let textoDecodificado= textoCodificado.toLowerCase();

    // verificar que el texto introducido sea valido para desencriptar
    if(validarTexto(textoDecodificado)){
        for (const [letra, identificar] of Object.entries(codigo)) {
            textoDecodificado = textoDecodificado.split(identificar).join(letra);
        }
    
        let elementoHTML = document.querySelector('.container__texto__transformado');
        elementoHTML.innerHTML = textoDecodificado;

        elementoHTML.classList.add('visible');
        document.getElementById('mensaje__inicial').style.display= 'none';
        elementoHTML.style.display='block';
        mostrarBotonCopiar();   // Para mostrar el boton copiar

    }else{
        alert("No se aceptan carácteres especiales. Por favor intente nuevamente.");      
    }
}

// funcion para verificar que el texto introducido no contenga caracteres especiales/no validos
function validarTexto(texto){
    const noValidos= /[~!@#$%^&*()_+|}{[\]\\\/?><:"`;.,áéíóúàèìòùäëïöüÿõãâêîôûç]/g;
    if(texto.match(noValidos)){
        return false;
    }
    return true;
}

// funcion para copiar el texto en el portapapeles
function copiarTexto(){
    let texto=document.querySelector('.container__texto__transformado').innerText;
    navigator.clipboard.writeText(texto).then(() => {
        alert('Texto copiado al portapapeles');
    }).catch(err => {
        console.error('Error al copiar el texto: ', err);
    });
}

// funcion para mostrar el boton copiar
function mostrarBotonCopiar(){
    let botonCopiar= document.getElementById('copiar');
    botonCopiar.style.display='block';
}