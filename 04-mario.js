const area1 = ['a'];
const area2 = ['a', 'b', 'c']
const area3 = ['a', 'b', 'c']
const area4 = ['a', 'b']

const mario = () => {
    const area3comb = []

    for (let i = 0; i < area2.length; i++) {
        for (let j = 0; j < area3.length; j++) {
            area3comb.push(area2[i] + area3[j])
        }
    }

    const area4comb = []

    for (let i = 0; i < area3comb.length; i++) {
        if (area3comb[i] == 'aa' || area3comb[i] == 'ba' || area3comb[i] == 'ca') {
            continue
        } else {
            for ( let j = 0; j < area4.length; j++) {
                area4comb.push(area3comb[i] + area4[j])
            }
        }
    }
    return 'Área 1 = '+ area1.length + ', Área 2 = ' + area2.length + ', Área 3 = ' + area3comb.length + ', Área 4 = ' + area4comb.length
}

console.log(mario());
