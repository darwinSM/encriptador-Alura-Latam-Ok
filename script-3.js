var letras = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0','!','#','$','%','&','/','¡','*','+','-', 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','a','e','i','o','u','a','e','i','o','u','a','e','i','o','u','a','e','i','o','u','a','e','i','o','u'];


function generarLetraAleatoria_N(n) {
    let letraSAleatorias = [];
    for (var i = 0; i < n; i++) {
        let longitud = (letras.length);
        let posicionAleatoria = Math.floor(Math.random() * longitud);
        let letraAleatoria = letras[posicionAleatoria];

        letraSAleatorias.push(letraAleatoria);

    }
    return letraSAleatorias.join("")
}

function encriptar_3 (cadena){
    let cadenaConCaracteres = "";
    cadena = cadena.split("").reverse().join("");

    const longitudCadena = cadena.length;
    for (let i = 0; i < longitudCadena; i ++) {
        if (i + 1 < longitudCadena) {
            var caracter = generarLetraAleatoria_N(10)
            cadenaConCaracteres += cadena.substring(i, i + 1) + caracter;
        } else {
            cadenaConCaracteres += cadena.substring(i, longitudCadena);
        }
    }
    return generarLetraAleatoria_N(25) + cadenaConCaracteres + generarLetraAleatoria_N(25) ;
}



function desencriptar_3(cadenaConCaracteres){
    let cadenaDesencriptada = "";
    const longitudcadenaConCaracteres = cadenaConCaracteres.length;
    cadenaDesencriptada = cadenaConCaracteres.substring(25,longitudcadenaConCaracteres-25);

    const longitudcadenaDesencriptada = cadenaDesencriptada.length

    for (var i = 0; i<=longitudcadenaDesencriptada ; i+=11){
        cadenaDesencriptada = cadenaDesencriptada + cadenaDesencriptada.substring(i,i+1);
    }

    cadenaDesencriptada = cadenaDesencriptada.substring(longitudcadenaDesencriptada)
    cadenaDesencriptada = cadenaDesencriptada.split("").reverse().join("");

    return cadenaDesencriptada;

    }

/************************************************************************* */

//Recupera elementos de html , con el nombre de las clases : .nombreclase
const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");


var botonEncriptar = document.querySelector(".btn-encriptar");
botonEncriptar.onclick = btnEncriptar;

var botonDesencriptar = document.querySelector(".btn-desencriptar");
botonDesencriptar.onclick = btnDesencriptar;

var botonCopiar = document.querySelector(".btn-copiar")
botonCopiar.onclick = btnCopiar;

var botonLimpiar = document.querySelector(".btn-limpiar")
botonLimpiar.onclick = btnLimpiar;



function btnEncriptar(){
    const textoEncriptado = encriptar_3(textArea.value) 
    mensaje.value = textoEncriptado
    textArea.value = "";
    // mensaje.style.backgroundImage="none"
}

function btnDesencriptar(){
    const textoDesencriptado =  desencriptar_3(textArea.value)
    mensaje.value = textoDesencriptado
    textArea.value = "";
}

function btnCopiar(){
    botonCopiar.addEventListener('click', copiar=>{
        mensaje.select();
        document.execCommand('copy');
        console.log(mensaje.value)
        textArea.value = mensaje.value
        
    })
}

function btnLimpiar(){
    textArea.value="";
    mensaje.value="";
}










