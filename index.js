const nombre = "Matheo y Sofía"
console.log(`Nosotros somos ${nombre} de 5to informática A`)

const operacionesMatematica = require('./src/modules/matematica')

var num1 = 2, num2 = 6, num3 = 4, num4 = 3, num5 = 9, num6 = 10

console.log(`${num1} + ${num2} = ${operacionesMatematica.suma(num1,num2)}`)
console.log(`${num5} - ${num3} = ${operacionesMatematica.resta(num5,num3)}`)
console.log(`${num3} x ${num6} = ${operacionesMatematica.multiplicacion(num3,num6)}`)
console.log(`${num5} : ${num4} = ${operacionesMatematica.division(num5,num4)}`)

const claseAlumno = require('./src/models/alumno')
const Alumno1 = new claseAlumno.Alumno("Matheo", 42312562)
const Alumno2 = new claseAlumno.Alumno("Sofía", 42865894)
console.log(`  
Alumno 1
    Nombre: ${Alumno1.username}
    DNI: ${Alumno1.DNI}

Alumno 2
    Nombre: ${Alumno2.username}
    DNI: ${Alumno2.DNI}
`)

https://kinsta.com/es/base-de-conocimiento/nodejs-fs/#:~:text=Para%20renombrar%20un%20archivo%2C%20utiliza,Renombraremos%20este%20archivo%20mediante%20programaci%C3%B3n.