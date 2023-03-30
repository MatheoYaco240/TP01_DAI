class Pais{
    constructor(nombre,moneda){
        this.nombre=nombre
        this.moneda=moneda
    }
    obtenerMoneda = (nombre) => this.moneda
}

module.exports = {
    Pais
}