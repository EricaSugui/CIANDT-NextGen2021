const distance = 149600000;
const speed = 28440;

const temp = (dist, spd) => {
    const hours = dist /spd;
    return Math.floor(hours/24);
}
const result = temp(distance, speed);

console.log(`Para percorrer ${distance}km estando a ${speed}km/h serão necessários `, result, " dias.");