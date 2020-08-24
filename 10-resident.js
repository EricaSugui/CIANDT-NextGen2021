/**
 * Resident Evil 2
 * porta precida de um código de 2 dígitos para ser aberta.
 * 
 */

let num = 1;
let linha = 1;
let conteudo = [1];
let finalNum = 1969;
let finalLine = Math.ceil(Math.sqrt(finalNum+2));

num++
for (let i = 1; i < finalLine; i++) {
    linha++;
    let len = conteudo.length
    let len2 = conteudo.length + 2
    
    for (let j = 0; j < len2; j++) {
        conteudo.push(num++)
    }
    for(let k = 0; k < len; k++) {
        conteudo.shift()
    }
}
let str = conteudo.join(' ')
console.log(`Linha ${linha} -> ${str}`);