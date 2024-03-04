

//Defining a function regular way
function add(a: number, b: number) {
    let result;
    result = a+b;
    return result
}


//Defining a function ES6 way with arrow functions - Variation 1
const add_new_1 = (a: number, b: number) => {
    return a+b;
}

//Defining a function ES6 way with arrow functions - Variation 2
const add_new_2 = (a: number, b: number) => a+b;


//Defining a function ES6 way with arrow functions with default value - Variation 3
const add_new_3 = (a: number, b: number=1) => a+b;



//Defining a function ES6 way with arrow functions with unlimited input method parameters - Variation 4
const add_new_4 = (...numbers: number[]) => {
    return numbers.reduce((curResult, currentValue) => {
        return curResult + currentValue;
    },0)
}

console.log(add(2,5))