
// Performing a task
function greet(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName);
}

// Calculating a value
function square(number) {
    return number * number;
}

greet('John', 'Smith');
console.log(square(2));

function formatDecimal(id) {
    let x = document.getElementById(id).innerHTML;
    let y = x.includes('.') ? x.replace(/\.?0+$/, '') : x;
    document.getElementById(id).innerHTML = y;
}

formatDecimal('p123');


// ✅ remove trailing zeros from a number
const num1 = 13.4530000;
const result1 = parseFloat(num1);
console.log(result1); // 👉️ 13.453

// ✅ parse a string to a number and remove trailing zeros
const str1 = '13.453000';
const result2 = parseFloat(str1);
console.log(result2); // 👉️ 13.453
