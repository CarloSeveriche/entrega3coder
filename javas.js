

let personas = [];

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let inputEmial = document.querySelector("#email");
let inputNumero = document.getElementById("numero");
let inputID =  document.querySelector("#id");
let contenedorPersonas = document.getElementById("contenedorPersonas")


class Persona{
    constructor(nombre,email,numero,id,){
        this.nombre = nombre;
        this.email = email;
        this.numero= numero;
        this.id = id;
    }


}

function inicializarEventos(){
    formulario.onsubmit = (event) => validarFormulario(event);
}



function validarFormulario(event){
    event.preventDefault()
    let nombre = inputNombre.value;
    let email = inputEmial.value;
    let numero = inputNumero.value;
    let IDPersona = inputID.value;

    const idExiste = personas.some((persona) => persona.id ===  IDPersona);

    if (!idExiste){


        let persona = new Persona(nombre, email , numero , IDPersona);

        personas.push(persona);

        console.log(personas);
        formulario.reset()
    }else{
        alert("Ya se encuentra registrada una persona con ese ID")  
    }


}

function mostrarPersona(){
    contenedorPersonas.innerHTML = "";
    productos.array.forEach(persona => {

        let column = document.createElement("div");
        column.className = "columna1";
        column.id = `columna-${persona.id} `;
        column.innerHTML = `
        
        `

        
    });
}


function main(){
    inicializarEventos();
}

main()


