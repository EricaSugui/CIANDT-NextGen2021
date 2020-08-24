/**
 * Castlevania
 * Torre de Hanoi
 * Solução 1 = mostrando e contando os movimentos, usando iteração
 */

let A = [1, 2, 3, 4, 5]
let B = []
let C = []
let movimentos = 0
let pilha = []
let comando=[]

function mover(origem, destino) {
    movimentos++
    console.log(`[${movimentos}]: ${origem} -> ${destino}`)
}

function hanoi(n) {
    let origem = 1
    let destino = 3
    let auxiliar = 2

    comando = [n, origem, destino, auxiliar]
    pilha.push(comando)

    while(pilha != "") {
        if (n > 1) {
            n--
            origem = comando[1]
            destino = comando[2]
            auxiliar = comando[3]

            comando = [n, origem, auxiliar, destino]
            pilha.push(comando)
        } else {
            comando = pilha.pop()
            n = comando[0]
            origem = comando[1]
            destino = comando[2]
            auxiliar = comando[3]

            mover(origem, destino)

            if(n > 1) {
                n--
                comando = [n, auxiliar, destino, origem]
                pilha.push(comando)
            }
        }
    }
    console.log(movimentos)
}
hanoi(5)

/**
 * Fórmula da Torre de Hanoi
 * 2ˆn - 1
 * onde n = número de discos
 * Solução 2 = usando Math.pow() - potência
 */

let discos = 5

console.log(Math.pow(2, discos)-1)