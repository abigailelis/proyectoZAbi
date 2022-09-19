let nuevoCaptcha = document.querySelector('#captcha');
let ingresoTexto = document.querySelector('#ingresoCaptcha');
let textoVerificado = document.querySelector('#textoFinal');
let botonComprobar = document.querySelector('#botonCaptcha'); //variable botonComprobar toma el elemento con id=botonCaptcha
botonComprobar.addEventListener("click", validarCaptcha);

let array = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','Ñ','O','P','Q','R','S','T','U','V','W','X','Y','Z','a','b','c','d','e','f','g','h','i','j','k','l','m','n','ñ','o','p','q','r','s','t','u','v','w','x','y','z','1','2','3','4','5','6','7','8','9','0'];
//la funcion generaCaptcha genera un captcha al azar a partir del array, lo almacena en nuevoCaptcha y lo imprime en el input id="captcha"
function generaCaptcha(){ 
    let texto=""; //Al iniciar se le da un valor "" para que al reiniciarla el valor de texto no quede con lo almacenado del captcha anterior. 
    let index = 0;
    for(let i=1; i <= 8; i++){
        index = Math.floor(Math.random()*(64-0+1)+0); //genera un numero aleatorio de index del array
        let letra = array[index]; //la variable letra toma el valor que alla almacenado en ese index del array
        texto += letra; //la variable texto almacena la suma de todas las letras.
    }
    nuevoCaptcha.value = texto; //el nuevo captcha cambia su valor con lo que se almaceno en la variable texto
    console.log(texto); //imprime el captcha
}
generaCaptcha();

//Reinicia el value del input de ingreso de captcha para que pueda volver a intentar otro ingreso distinto con el nuevo captcha
function reiniciaTexto(){ 
    ingresoTexto.value = ingresoTexto.nodeValue;
}

const MAX = 5;
let intento = 0;
//la funcion validarCaptcha comprueba que si el texto no coincide con el captcha te vuelva a reiniciar todo
function validarCaptcha(){
    if (ingresoTexto.value != nuevoCaptcha.value){ //si texto es distinto del captcha entra en el if
        if (intento< MAX){ // si intentos es menor al maximo numero de intentos entra al if
            let intentosRestantes=(MAX - intento); 
            intento++; //si entra es porque ingreso mal los datos entonces se van sumando los intentos 
            textoVerificado.innerHTML = "Captcha ingresado de manera incorrecta.Restan " + intentosRestantes + " intentos.";
            generaCaptcha(); //vuelve a llamar a la funcion generaCaptcha para que cree otro captcha nuevo
            reiniciaTexto();  //llama a la funcion reiniciaTexto para que el valor del input vuelva al del principio        
        } else{
            textoVerificado.innerHTML = "Se acabaron los intentos.";    //si no entra al segundo if es porque se superaron los intentos
        }
    }else{
    textoVerificado.innerHTML = "Captcha correcto. Información importante: En caso de haber respondido mas de 5 si, lo siento, ya te has contagiado el virus";
    } //si no entra al primer if es porque el texto es igual al captcha y por lo tanto es correcto
}



    







let botonEncendido = document.querySelector("#botonPrender"); //let declara la variable que va a tomar el elemento por el ID= botonPrender
let botonApagado = document.querySelector("#botonApagar"); //let declara la variable que va a tomar el elemento por el ID= botonApagar

botonEncendido.addEventListener("click", prender); //lavariable botonEncendido queda a la escucha de que se haga click en el boton que llamo por id y ejecuta la funcion prender 
botonApagado.addEventListener("click", apagar);

function prender(){ //funcion prender
    document.querySelector("#fondo").classList.add("fondoPrendido"); //al elemento con el selector ID="fondo" le agrega la clase fondoPrendido
    document.querySelector("#fondo").classList.remove("fondoApagado"); //al elemento con el id="fondo" le quita la clase fondoApagado
    document.querySelector("#imagenLampara").src = "../EjercicioLampara/LamparaEncendida.png"; //a la imagen con el id imagenLampara le cambia la ruta con el atributo src de otra imagen
} 
function apagar(){ //idem a la funcion prender, solo que sirve para apagar
    document.querySelector("#fondo").classList.add("fondoApagado");
    document.querySelector("#fondo").classList.remove("fondoPrendido");
    document.querySelector("#imagenLampara").src = "../EjercicioLampara/LamparaApagada2.png"
}
