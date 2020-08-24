/**
 * obtemos a distância em metros(D) através da divisão da velocidade(V) ao quadrado, 
 * em quilômetros por hora, que o veículos utilizava no momento da frenagem, 
 * pelo coeficiente de atrito (250ü).
 * Se vc começa a reta a uma velocidade de 260km/h
 * Quantos metros você precisará que a reta tenha para que você consiga frear
 * totalmente o veículo, considerando ü=1?
 */

 let V = 260
 let atrito = 1
 let D = (V * V) / (250 * atrito)

 console.log(`${D} metros.`)
