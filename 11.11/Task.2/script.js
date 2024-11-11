var a = Number(prompt("1-ші санды енгізіңіз"));
var b = Number(prompt("2-ші санды енгізіңіз"));
var c = Number(prompt("3-ші санды енгізіңіз"));
var big = 0;
var small = 0;

// Массивпен вариант жеңіл әрі түсінікті.
// var arr = [a, b, c]
// var big = Math.max(...arr);
// var small = Math.min(...arr)

if (a > b && a > c) {
    var big = a;
} else if (a < b && a < c) {
    var small = a;
}

if (b > a && b > c) {
    var big = b;
} else if (b < a && b < c) {
    var small = b;
}

if (c > a && c > b) {
    var big = c;
} else if (c < a && c < b) {
    var small = c;
}

alert('Ең үлкен және ең кіші санның айырмасы: ' + (big - small));