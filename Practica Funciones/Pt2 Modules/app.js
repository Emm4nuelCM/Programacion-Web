//JAVASCRIPT MODULES
let greet = require('./greet');
greet();

//JAVASCRIPT OBJECTS
let persona = {
    nombre: "Carlos",
    apellido: "Ulibarri",
    getName: function () {
        return `${this.nombre} ${this.apellido}`;
    },
    domicilio: {
        calle: "Madero #144",
        colonia: "Centro",
        cp: 28000,
        municipio: "Colima",
        getDomicilio: function () {
            return `${this.calle} Colonia: ${this.colonia} CP: ${this.cp},${this.municipio}`;
        }
    }
}
console.log(persona.getName());
console.log(persona.domicilio.getDomicilio());