const myst = (num) => {
    if(num < 2) {
        return false;
    } 
    for (let i = 2; i < num; i++) {
        if (num % i == 0){
            return false;
        }
    }
    return true;
}
const isPrime = () => {
    let array = [];
    for (let i = 0; i< 120; i++){
        if (myst(i)){
            array.push(i);
        }
    }
    console.log(array);
}
isPrime();
