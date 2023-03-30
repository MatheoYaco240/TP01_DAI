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


const cambioDeNombre = require('./renameFile')
// const oldName = "rename-me.txt"
// const newName = "renamed.txt"
// cambioDeNombre.renameFile(oldName,newName)

let objeto = parsearUrl("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"); 
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

console.log(objeto);



/* https://kinsta.com/es/base-de-conocimiento/nodejs-fs/#:~:text=Para%20renombrar%20un%20archivo%2C%20utiliza,Renombraremos%20este%20archivo%20mediante%20programaci%C3%B3n. */

// npm i country-to-currency - Para la instalación

const countryToCurrency = require( 'country-to-currency' );
const país = "US";
console.log(`La mondeda de ${país} es: ${countryToCurrency[país]}`);

/*
REFERENCIAS:
-----Modedas-----
USD --> Dólar estadounidense
EUR --> Euros
ARS --> Pesos argentinos
MXN --> Pesos mexicanos
BRL --> Reales

-----Países-----


AD: 'EUR',AE: 'AED',AF: 'AFN',AG: 'XCD',AI: 'XCD',AL: 'ALL',AM: 'AMD',AO: 'AOA',AR: 'ARS',AS: 'USD',
AT: 'EUR',AU: 'AUD',AW: 'AWG',AX: 'EUR',AZ: 'AZN',BA: 'BAM',BB: 'BBD',BD: 'BDT',BE: 'EUR',BF: 'XOF',
BG: 'BGN',BH: 'BHD',BI: 'BIF',BJ: 'XOF',BL: 'EUR',BM: 'BMD',BN: 'BND',BO: 'BOB',BQ: 'USD',BR: 'BRL',
BS: 'BSD',BT: 'BTN',BV: 'NOK',BW: 'BWP',BY: 'BYN',BZ: 'BZD',CA: 'CAD',CC: 'AUD',CD: 'CDF',CF: 'XAF',
CG: 'CDF',CH: 'CHF',CI: 'XOF',CK: 'NZD',CL: 'CLP',CM: 'XAF',CN: 'CNY',CO: 'COP',CR: 'CRC',CU: 'CUC',
CV: 'CVE',CW: 'ANG',CX: 'AUD',CY: 'EUR',CZ: 'CZK',DE: 'EUR',DJ: 'DJF',DK: 'DKK',DM: 'DOP',DO: 'DOP',
DZ: 'DZD',EC: 'USD',EE: 'EUR',EG: 'EGP',EH: 'MAD',ER: 'ERN',ES: 'EUR',ET: 'ETB',FI: 'EUR',FJ: 'FJD',
FM: 'USD',FO: 'DKK',FR: 'EUR',GA: 'XAF',GB: 'GBP',GD: 'XCD',GE: 'GEL',GF: 'EUR',GG: 'GBP',GH: 'GHS',
GI: 'GIP',GL: 'DKK',GM: 'GMD',GN: 'GNF',GP: 'EUR',GQ: 'XAF',GR: 'EUR',GT: 'GTQ',GU: 'USD',GW: 'XOF',
GY: 'GYD',HK: 'HKD',HN: 'HNL',HR: 'EUR',HT: 'HTG',HU: 'HUF',ID: 'IDR',IE: 'EUR',IL: 'ILS',IM: 'GBP',
IN: 'INR',IO: 'USD',IQ: 'IQD',IR: 'IRR',IS: 'ISK',IT: 'EUR',JE: 'GBP',JM: 'JMD',JO: 'JOD',JP: 'JPY',
KE: 'KES',KG: 'KGS',KH: 'KHR',KI: 'AUD',KM: 'KMF',KN: 'XCD',KP: 'KPW',KR: 'KRW',KW: 'KWD',KY: 'KYD',
KZ: 'KZT',LB: 'LBP',LC: 'XCD',LI: 'CHF',LK: 'LKR',LR: 'LRD',LS: 'LSL',LT: 'EUR',LU: 'EUR',LV: 'EUR',
LY: 'LYD',MA: 'MAD',MC: 'EUR',MD: 'MDL',ME: 'EUR',MF: 'EUR',MG: 'MGA',MH: 'USD',ML: 'XOF',MM: 'MMK',
MN: 'MNT',MO: 'MOP',MP: 'USD',MQ: 'EUR',MR: 'MRU',MS: 'XCD',MT: 'EUR',MU: 'MUR',MV: 'MVR',MW: 'MWK',
MX: 'MXN',MY: 'MYR',MZ: 'MZN',NA: 'NAD',NC: 'XPF',NE: 'NGN',NF: 'AUD',NG: 'NGN',NI: 'NIO',NL: 'EUR',
NO: 'NOK',NP: 'NPR',NR: 'AUD',NU: 'NZD',NZ: 'NZD',OM: 'OMR',PA: 'PAB',PE: 'PEN',PF: 'XPF',PG: 'PGK',
PH: 'PHP',PK: 'PKR',PL: 'PLN',PM: 'EUR',PN: 'NZD',PR: 'USD',PT: 'EUR',PW: 'USD',PY: 'PYG',QA: 'QAR',
RE: 'EUR',RO: 'RON',RS: 'RSD',RU: 'RUB',RW: 'RWF',SA: 'SAR',SB: 'SBD',SC: 'SCR',SD: 'SDG',SE: 'SEK',
SG: 'SGD',SH: 'SHP',SI: 'EUR',SJ: 'NOK',SK: 'EUR',SL: 'SLL',SM: 'EUR',SN: 'XOF',SO: 'SOS',SR: 'SRD',
SS: 'SSP',ST: 'STN',SV: 'SVC',SX: 'ANG',SY: 'SYP',SZ: 'SZL',TC: 'USD',TD: 'XAF',TF: 'EUR',TG: 'XOF',
TH: 'THB',TJ: 'TJS',TK: 'NZD',TL: 'USD',TM: 'TMT',TN: 'TND',TO: 'TOP',TT: 'TTD',TV: 'AUD',TW: 'TWD',
TZ: 'TZS',UA: 'UAH',UG: 'UGX',UM: 'USD',US: 'USD',UY: 'UYU',UZ: 'UZS',VA: 'EUR',VC: 'XCD',VE: 'VES',
VG: 'USD',VI: 'USD',VN: 'VND',VU: 'VUV',WF: 'XPF',WS: 'USD',YE: 'YER',YT: 'EUR',ZA: 'ZAR',ZM: 'ZMW',
ZW: 'ZWL',HM: 'AUD',FK: 'FKP',GS: 'GEL',LA: 'LAK',MK: 'MKD',AQ: 'USD',PS: 'ILS',TR: 'TRY'
*/
