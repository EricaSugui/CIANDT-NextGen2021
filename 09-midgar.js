/**
 * Midgar
 * 8 setores de áreas iguais
 * aprox. 2827.43kmˆ2
 * parte central: 314.15kmˆ2
 * evacuar os habitantes da cidade baixa no setor 7
 * 
 */
let pi = 3.14
let setor = 360/8

let areaTotal = 2827.43
let raioQuadradoTotal = areaTotal/pi
let raioTotal = raioQuadradoTotal/2

let setorTotal = setor * pi * raioQuadradoTotal / 360

let areaCentral = 314.15
let raioQuadradoCentral = areaCentral/pi
let raioCentral = raioQuadradoCentral/2

let setorCentral = setor * pi * raioQuadradoCentral / 360

let setorSete = setorTotal - setorCentral

console.log(setorSete.toFixed(2)+"km2")