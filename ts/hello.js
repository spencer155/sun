var age = 18;
var Gender;
(function (Gender) {
    Gender[Gender["BOY"] = 0] = "BOY";
    Gender[Gender["GIRL"] = 1] = "GIRL";
})(Gender || (Gender = {}));
console.log(Gender.BOY, Gender[0]);
console.log(Gender.GIRL, Gender[1]);
var myColor = [0 /* RED */, 1 /* BLUE */, 2 /* YELLOW */];
function fn(x) {
    if (typeof x === 'number') {
        console.log(x);
    }
    else if (typeof x === 'string') {
        console.log(x);
    }
    else {
        console.log(x); // never
    }
}
