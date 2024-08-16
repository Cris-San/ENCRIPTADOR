//---Seleccion de Elemntos Variables---//
const botonEncriptar = document.querySelector(".btn_encrip");
const txtEncriptar = document.querySelector(".txtareaingreso");


//---///Boton de Encriptar Eventos///

botonEncriptar.addEventListener("click", e => {
    e.preventDefault();
    let texto = txtEncriptar.value;
    let txt = texto.normalize("NFD").replace(/[$\.¿\?~!\¡@#%^&*()_|}\{[\]>\<:"`;,\u0300-\u036f']/g, ""); 
    //Metodo para normalizar cadena de cacracteres, utilizando descomposicion canonica. Con replace se cambia los signos de puntuacion por un espacion en blanco.
    console.log(txt);
    
})



// 
// const botonDesencriptar = document.getElementById('botonDesencriptar');
// const textareaSalida = document.getElementById('SalidaTexto');
// const aviso = document.getElementById('mensaje_info');


//Arreglo para reemplazar las vocales

// let reemplazar = [
    // ["e", "enter"],
    // ["i", "imes"],
    // ["a", "ai"],
    // ["o", "ober"],
    // ["u", "ufat"],
// ]



//Eventos
// botonEncriptar.addEventListener("click", function() {
    // const textarea = ingresarTexto.value.toLowerCase() 
    
    // function encriptar(newText) {
        // for (let i = 0; i < reemplazar.length; i++ ) {
            //    if (newText.includes(reemplazar[i][0])) {
                    // newText = newText.replaceAll(reemplazar[i][0], reemplazar[i][1]);
            //    };

        // };
        // return newText;
    // };
    
    // const textoEncriptado =encriptar(textarea);
    // textareaSalida.innerHTML = textoEncriptado;

    // if(textarea === "") {
        // aviso.style.background = "#0A3871";
        // aviso.style.color = "#FFF";
        // aviso.style.fontWeight = "800";
        // aviso.textContent = "El campo de texto no debe estar vacio";

        // setTimeout(() => {
            // aviso.removeAttribute("style");
        // }, 1500);
    // }

    // console.log(encriptar(textarea));
// })






/**
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "a" es convertida para "ai"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
 */