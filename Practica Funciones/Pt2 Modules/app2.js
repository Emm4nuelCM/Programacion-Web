function greet() {
    console.log('Hello');
}

let logGreeting = (miParametro) => miParametro();
logGreeting(function () {
    console.log('Hello from a function created on the fly');
});

//INTERPOLACION DE STRINGS
let color="rojo";
let talla="M";
let modelo="Clasico";
console.log(`Juan tiene una playera talla ${talla} de color ${color} y un modelo ${modelo}`);

//JAVASCRIPT MODULES
require('./greet');