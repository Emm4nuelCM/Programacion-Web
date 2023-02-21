let greeting = "Hello from greet 5";
let greet = () => {
    console.log(greeting);
}
let test = () => {
    console.log("Esto es una prueba");
}
let jump = () => {
    console.log("I'm jumping");
}
let run = () => {
    console.log("I'm running");
}

module.exports = {
    greet, test, jump, run
}