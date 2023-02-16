//CUSTOM EVENTS  //CUSTOM EVENTS  //CUSTOM EVENTS  //CUSTOM EVENTS
let obj = {
    nombre: 'Carlos',
    edad: 44,
    apellido: 'Ulibarri',
    keypress: function () {
        return('Se ha presionado una tecla');
    },
    mouseOver: function () {
        return('El puntero del mouse esta abrriba');
    }
}

console.log(obj.nombre);
console.log(obj['nombre']);

let myKey = 'nombre';
console.log(obj[myKey]);

myKey = 'keypress';
console.log(obj[myKey]());
myKey = 'mouseOver';
console.log(obj[myKey]());

//ARRAYS  //ARRAYS  //ARRAYS  //ARRAYS  //ARRAYS  //ARRAYS  //ARRAYS
let myArray = [];

myArray.push(4);
myArray.push('una cadena');
myArray.push(obj);
myArray.push(function () {
    console.log("hola desde el array");
})
console.log(myArray);
console.log(myArray[2].mouseOver());

let funcArray = [];

funcArray.push( () => {
    console.log("Function 1");
});
funcArray.push( () => {
    console.log("Function 2");
});
funcArray.push( () => {
    console.log("Function 3");
});

funcArray.forEach((item) => {
    item();
})

//EMITTER  //EMITTER   //EMITTER   //EMITTER   //EMITTER 
var Emitter = require('./emitter');
var emtr = new Emitter();

emtr.on('greet', () => {
    console.log('Somewhere, someone said hello.');
});
emtr.on('greet', () => {
    console.log('A greeting occured!');
});

console.log('Hello!');
emtr.emit('greet');