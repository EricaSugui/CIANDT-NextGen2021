const totalYoshi = 1000;

let yoshi = 450;
let choco = 330;
let cookie = 340;

let yoshiChoco = 200;
let yoshiCookie = 180;
let chocoCookie = 100;
let All = 30;

yoshi = yoshi - yoshiChoco - yoshiCookie - All;
choco = choco - chocoCookie - yoshiChoco - All;
cookie = cookie - chocoCookie - yoshiCookie -  All;

let anyLand = totalYoshi - (All +yoshi + choco + cookie +yoshiChoco+yoshiCookie+chocoCookie)
let oneLand = yoshi + choco + cookie

console.log('Yoshis que não gostam de nenhuma localidade = ', anyLand, ', Yoshis que gostam de uma única localidade = ', oneLand)