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


var parse = require('url-parse')
 , url = parse(objeto, true);

function parsearUrl(urlString){
   try{
    const urlObj = new URL(urlString);

    const resultado = {
        host: urlObj.protocol + '//' + urlObj.host,
        pathname: urlObj.pathname,
        parametros: {}
    };

    for (const [clave, valor] of urlObj.searchParams.entries()){
        resultado.parametros[clave] = valor;
    }

    return resultado;
   } catch(error){
    console.error(`Ha ocurrido un error al parsear la URL "${urlString}"`)
    return null;
   }
} 

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"); 
console.log(objeto);



/* console.log(q.host); //returns 'localhost:8080'
    console.log(q.pathname); //returns '/default.htm'
    console.log(q.search); //returns '?year=2017&month=february'

https://kinsta.com/es/base-de-conocimiento/nodejs-fs/#:~:text=Para%20renombrar%20un%20archivo%2C%20utiliza,Renombraremos%20este%20archivo%20mediante%20programaci%C3%B3n. */