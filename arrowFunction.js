function add(a,b) {
    const total = a + b;
    return total;
}
add(2,3);

// function expression
const add1 = function add1(a,b){
    const total = a + b;
    return total;
}


// another step
const add3 = function add3(a,b) {
    return a + b
}

const add4 = function (a,b) {
    return a + b
}

// arrow function
// 1. no need to use return key word when I work in a single line
const add5 = (a , b) => a + b;
const value = add5(2, 3)
console.log(value);




const add6 = () => {
    const a = 20;
    const b = 30;
    const total = a + b;
    const avrg = total / 2;

    return avrg;



};
const avrgvalue = add6();
console.log(avrgvalue);



const multiply = (a, b) => a * b;
console.log('Multiply', multiply(2, 4));