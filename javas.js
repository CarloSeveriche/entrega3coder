

let personas = [];

let formulario = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre");
let inputEmial = document.querySelector("#email");
let inputNumero = document.getElementById("numero");
let inputID =  document.querySelector("#id");
let contenedorPersonas = document.getElementById("contenedorPersonas");
let limpiar = document.getElementById("limpiar");


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
        formulario.reset();

        actualizarPersonaStorage();
        mostrarPersona();
        
    }else{
        alert("Ya se encuentra registrada una persona con ese ID")  
    }
}

function actualizarPersonaStorage(){
    let personasJSON = JSON.stringify(personas);
    localStorage.setItem("personas", personasJSON);
    
}

function obtenerPersonaStorage(){
    let personasJSON = localStorage.getItem("personas");


    if(personasJSON !=  null ){
        personas = JSON.parse(personasJSON)
        mostrarPersona()
    }

}

function eliminarPersona(IDPersona){
    let borrarPersona = document.getElementById(`columna-${IDPersona}`);
    let indiceBorrar = personas.findIndex( ( persona ) => parseInt(persona.id) === parseInt(IDPersona)); 

    personas.splice(indiceBorrar, 1);
    borrarPersona.remove();
}

function mostrarPersona(){
    contenedorPersonas.innerHTML = "";
    personas.forEach(persona => {

        let column = document.createElement("div");
        column.className = "columna1";
        column.id = `columna-${persona.id} `;
        column.innerHTML = `
        <div class="card">
            <div class="card__body">

                <p class="card-text">Nombre: ${persona.nombre}</p>
                <p class="card-text">Email: ${persona.email}</p>
                <p class="card-text">Número: ${persona.numero}</p>
                <p class="card-text">ID: ${persona.id}</p>
            
            </div>

            <div class="card__footer">
                <button class="btn btn-red" id="botonEliminar-${persona.id}">Eliminar</button>
            </div>
        </div>
        `

        contenedorPersonas.append(column)
        let botonEliminar = document.getElementById(`botonEliminar-${persona.id}`);
        botonEliminar.onclick = () => eliminarPersona(persona.id)

    });

}


function main(){
    inicializarEventos();
    obtenerPersonaStorage();
    
}

main()


