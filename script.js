function greet(name) {

    return "Hello " + name;

}

const add = function(a, b) {

    return a + b;

};

const multiply = (a, b) => {

    return a * b;

};

document.getElementById("declaration").textContent =

    greet("Ramya");

document.getElementById("expression").textContent =

    "Addition = " + add(10, 20);

document.getElementById("arrow").textContent =

    "Multiplication = " + multiply(5, 4);
