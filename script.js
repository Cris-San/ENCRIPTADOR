//---Seleccion de Elemntos Variables---//
const botonEncriptar = document.querySelector(".btn_encrip");
const txtEncriptar = document.querySelector(".txtareaingreso");
const aviso = document.querySelector(".texto-aviso");
const txtDesencriptar = document.querySelector(".txtareaSalida");
const contenido = document.querySelector(".tarjeta-contenedor");
const copiar = document.querySelector(".btn_copiar");
const botonDesencriptar = document.querySelector(".btn_desencrip");
const borrar = document.querySelector(".btn_borrar");


//---///Boton de Encriptar Eventos///

botonEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, ""); 
    //Metodo para normalizar cadena de cacracteres, utilizando descomposicion canonica. Con replace se cambia los signos de puntuacion por un espacion en blanco.
    
    if (texto === "") {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El campo de texto no puede estar vacio";

        setTimeout(() => {
         aviso.removeAttribute("style");
        }, 1500);
    }

    else if (texto !== txt) {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El texto no debe tener acentos ni caracteres especiales";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);   
    }

    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }

    else {
        texto = texto.replace(/e/mg, "enter");
        texto = texto.replace(/i/mg, "imes");
        texto = texto.replace(/a/mg, "ai");
        texto = texto.replace(/o/mg, "ober");
        texto = texto.replace(/u/mg, "ufat");

        txtDesencriptar.innerHTML = texto;
        reeplazarImagen();
    }    
        
    // contenido.remove();
});

//---///Boton de Desencriptar Eventos///
botonDesencriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, ""); 

    if (texto === "") {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El campo de texto no puede estar vacio";
        setTimeout(() => {
         aviso.removeAttribute("style");
        }, 1500);
    }
    else if (texto !== txt) {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El texto no debe tener acentos ni caracteres especiales";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);   
    }
    else if (texto !== texto.toLowerCase()) {
        aviso.style.background = "#0A387";
        aviso.style.color = "#FFF";
        aviso.style.fontWeight = "1200";
        aviso.textContent = "El texto debe ser todo en minúscula";
        
        setTimeout(() => {
            aviso.removeAttribute("style");
        }, 1500);
    }
    else {
        texto = texto.replace(/enter/mg, "e");
        texto = texto.replace(/imes/mg, "i");
        texto = texto.replace(/ai/mg, "a");
        texto = texto.replace(/ober/mg, "o");
        texto = texto.replace(/ufat/mg, "u");
        txtDesencriptar.innerHTML = texto;

    }    
    reeplazarImagen();
// contenido.remove();

});



//Funcion para reemplazar la imagen 

function reeplazarImagen() {
    contenido.remove();//Elimina el contenido actual

    // Crear un nuevo elemento img
    const imagenExito = document.createElement("img");
    imagenExito.src = "/img/conregistro.jpg";
    imagenExito.alt = "imagen de registro exitoso";
    imagenExito.classList.add("img_de_encriptado");

    //Crear un nuevo elemento de mensaje
    const mensajeExito = document.createElement("h2");
    mensajeExito.textContent = "La encriptación fue Exitosa!";
    mensajeExito.classList.add("mensaje_info");


    // Añadir la nueva imagen al DOM en la posición del div eliminado
    const salidaDatos = document.querySelector(".salida_datos");
    salidaDatos.insertBefore(mensajeExito, salidaDatos.firstChild);
    salidaDatos.insertBefore(imagenExito, salidaDatos.firstChild);



}

//---///Boton de Copiar Eventos///
copiar.addEventListener("click", e => {
    e.preventDefault();

    let copiarTexto = txtDesencriptar;
    copiarTexto.select()
    document.execCommand("copy");
});

//---///Boton de Copiar Eventos///
borrar.addEventListener("click", e => {
    e.preventDefault();

    txtEncriptar.value = "";
    txtDesencriptar.value = "";
    
    
});