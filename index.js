



class Usuario{
    constructor (nombre, apellido, identificacion, pais, edad){
        this.nombre = nombre;
        this.apellido = apellido;
        this.identificacion = identificacion;
        this.pais = pais;
        this.edad = edad;
    }

}

const USUARIOS = [];


function crearUsuario(){

    let cantidadRegistros = parseInt(prompt(`¿Cuántas personas deseas registar?`))

    

    if(cantidadRegistros == 0){
        alert(`Ingrese una cantidad minima de 1`)
    }

    else{
        
        for( let i = 0 ; i < cantidadRegistros ; i++){  

        
    
        let nombre = prompt(`Ingresa tu nombre: `);
        let apellido = prompt(`Ingresa tu apellido: `);
        let identificacion = prompt(`Ingresa tu numero de ID:`);
        let pais = prompt(`Ingresa tu nacionalidad`);
        let edad = parseInt(prompt(`Ingresa tu edad`));
    
        let nuevoUsuario = new Usuario(nombre, apellido, identificacion, pais, edad);
    
        USUARIOS.push(nuevoUsuario);
        console.log(USUARIOS);}
    

    }
}

function encontrar(){

    let identificacionAEncontrar = parseInt(prompt(`Numero de identficación de la persona a encontrar: `))

    let encontrarPorID = USUARIOS.find( numero =>  numero.identificacion == identificacionAEncontrar);

    console.log(`el usuario que buscabas es ${encontrarPorID.nombre} ${encontrarPorID.apellido}`);

}

function filtrar(){

    let filtrarNombre = prompt(`Filtra por nombre: `);

    let nombreFiltrado = USUARIOS.filter( nombre => nombre.nombre == filtrarNombre) ;

    console.log(nombreFiltrado);
}


crearUsuario();
encontrar()
filtrar()

