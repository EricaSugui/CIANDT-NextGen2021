/**
 * hipotenusa - velocidade: 80km/h
 * angulo: 45º
 * tempo: 5s
 * achar o cateto adjacente
 */
const gorilla = (speed, degree, sec) => {
    const kmseg = speed / 3600;
    const dist = kmseg * sec;
    
    const radian = degree * (Math.PI/180);
    const cos = Math.cos(radian)
    
    const finaldist = dist * cos

    console.log(Number.parseFloat(finaldist).toFixed(2))
}
gorilla(80, 45, 5)
 