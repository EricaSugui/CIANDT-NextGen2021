/**
 * A senha do cofre, comb de 3 letras e 3 digitos LLLDDD
 * 
 * 1 - A senha corresponde a um número em hexadecimal.
 *     DICA: Isso significa que apenas as letras A, B, C, D, E e F são válidas.
 * 2 - Não há letras repetidas.
 * 3 - As letras A e D estão presentes na senha.
 * 4 - O primeiro dígito é 3 ou 6 (Eles estavam sussurrando então não deu para ouvir muito bem)
 * 5 - A soma dos dígitos é 8.
 * 6 - O dígito zero não aparece na senha
 * 
 * dispara um alarme 5 minutos depois da primeira tentativa incorreta caso o cofre não seja aberto 
 * nesse meio tempo.
 * 
 * Sabendo que a Lara leva em média 2 segundos para testar cada possível senha, será que ela vai 
 * ser capaz de testar todas as combinações válidas no cofre (caso necessário) antes de o alarme 
 * soar? Quanto tempo nossa heroína levará para testar todas essas combinações?
 * 
 * Desenvolva um código que liste todas as possíveis combinações
 * e retorne o tempo que Lara levará para testá-las.
 */

 const letras = ['A', 'B', 'C', 'D', 'E', 'F']
 const digitos = [1,2,3,4,5,6,7,8,9]
 const first = [3, 6]
 const senha = [];

 for (let i = 0; i < 6; i++) {
     for (let j = 0; j < 6; j++) {
         for (let k = 0; k < 6; k++) {
             if (i == j || i == k || j == k) {
                 continue
             } else if ((i == 0 || j == 0 || k == 0) && (i == 3 || j == 3 || k == 3)) {
                for (let l = 0; l < 2; l++) {
                    for (let m = 0; m < 9; m++) {
                        for (let n = 0; n < 9; n++) {
                            if (first[l]+digitos[m]+digitos[n] == 8) {
                                let str1 = first[l].toString();
                                let str2 = digitos[m].toString();
                                let str3 = digitos[n].toString();
                                senha.push(letras[i]+letras[j]+letras[k]+str1+str2+str3)
                            } else {
                                continue
                            }
                        }
                    }
                }
             }
         }
     }
 }
const tempo = senha.length * 2
const minutos = tempo / 60
function laco() {
    for (let i = 0; i < senha.length; i++) {
        console.log(senha[i])
    }
}

console.log("Listando todas as possíveis combinações de senha abaixo:")
laco()
console.log(`Lara levará ${minutos} minutos para testar todas elas.`)

