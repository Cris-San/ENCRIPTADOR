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
        
        //Reemplazar el contenido de tarjeta-contenedor
        const nuevoContenido = `
        <h2 class="mensaje_info">Mensaje encriptado correctamente</h2>
        <p class="mensaje_descrip">Tu mensaje ha sido encriptado exitosamente.</p>
        <img class="img_de_encriptado" src="img/conregistro.jpg" alt="Mensaje encriptado 
        exitoso">
        `;
        contenido.innerHTML = nuevoContenido;
    }    
        
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

        const nuevoContenido = `
        <h2 class="mensaje_info">Mensaje desencriptado correctamente </h2>
        <p class="mensaje_descrip">Tu mensaje ha sido encriptado exitosamente.</p>
        <img class="img_de_encriptado" src="img/conregistro.jpg" alt="Mensaje encriptado 
        exitoso"> `;
        contenido.innerHTML = nuevoContenido;

});



//---///Boton de Copiar Eventos///
copiar.addEventListener("click", e => {
    e.preventDefault();

    let copiarTexto = txtDesencriptar;
    copiarTexto.select()
    document.execCommand("copy");
});

//---///Boton de Borrar Eventos///
borrar.addEventListener("click", e => {
    e.preventDefault();

    txtEncriptar.value = "";
    txtDesencriptar.value = "";
    
    // Recargar la página para restablecer todo
    location.reload();
});