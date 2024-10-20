const textElement = document.getElementById('typewriter-text');
const text = "Estudiante de Ingenieria En Gestion y Desarrollo de Software";

let index = 0;
let isDeleting = false;
let speed = 100;//velocidad de escritura y borrado

function typewriter(){
    if(!isDeleting && index < text.length){
        //añade una letra al texto
        textElement.innerHTML = text.substring(0,index + 1);
        index++;
        speed = 100; //velocidad para escribir
    }else if(isDeleting && index > 0){
        //borra una letra del texto
        textElement.innerHTML = text.substring(0, index -1);
        index--;
        speed = 50;
    }
    //cuando termine de escribir empiece a borrar
    if(index === text.length){
        isDeleting = true;
        speed = 1000;//pausa antes de empezar a borrar
    }else if(index === 0){
        isDeleting = false;
        speed=1000;

    }
    setTimeout(typewriter,speed)//llama a la funcion recursivamente
}
window.onload=typewriter; //inicia el efecto al cargar la pagina
