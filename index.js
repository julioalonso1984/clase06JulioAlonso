class Alumno {
    constructor(nombre, notaExamen, cantidad) {
        this.nombre = nombre.toUpperCase()
        this.notaExamen = notaExamen
        this.cantidad = cantidad
    }
    CalcularNota = () =>this.notaExamen * this.cantidad ;
}

function agregarAlumnos() {
    let numeroAlumnos = parseInt(
        prompt("Usted es profesor de la clase y tiene que calcular la nota total de todos los alumnos \n-Ingrese la cantidad de alumnos")
    )
    
    let alumnos = [];
    for (let index = 0; index < numeroAlumnos; index++) {
        let nombre = prompt("Ingrese el nombre")
        let notaExamen = prompt("Ingrese la nota del alumno")
        let cantidad = 1
        let alumnoARegistrar = new Alumno( nombre, notaExamen, cantidad )
        alumnos.push(alumnoARegistrar);
    }
    return alumnos;
}

function mostrarAlumnos(alumnos) {
    for (const alumno of alumnos) {
        console.log(alumno.nombre)
        console.log(alumno.notaExamen)
    }
}

function CalcularNota(alumnos) {
    let sumatoriaCosto = 0
    for (const alumno of alumnos) {
        sumatoriaCosto += alumno.CalcularNota();
    }
    return sumatoriaCosto
}



function main() {
    let alumnos = agregarAlumnos()
    mostrarAlumnos(alumnos)
    alert("La Nota total de los alumnos es: " + CalcularNota(alumnos))
}

main()



