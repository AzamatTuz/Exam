let num1 = +prompt('1-shi sandy en');
let tanba = prompt('Tanba engiz');
let num2 = +prompt('2-shi sandy en');

function calc(a, b, c) {
    switch (c) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
    
        default:
            return 'San engiz'
    }
}

alert(calc(num1, num2, tanba));