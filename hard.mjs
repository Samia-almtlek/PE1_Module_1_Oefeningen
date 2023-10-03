let dagen=1;
let uren=5;
let minuten=32;
let seconden=12;

let totaalSeconden=seconden;
totaalSeconden=totaalSeconden + minuten * 60;
totaalSeconden=totaalSeconden + uren * 60 * 60;
totaalSeconden=totaalSeconden + dagen * 24 * 60 * 60;
console.log(totaalSeconden);