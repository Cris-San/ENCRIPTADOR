//---Seleccion de Elemntos Variables---//
const botonEncriptar = document.querySelector(".btn_encrip");
const txtEncriptar = document.querySelector(".txtareaingreso");
const aviso = document.querySelector(".texto-aviso");
const txtDesencriptar = document.querySelector(".txtareaSalida");

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


    }    

    
})
