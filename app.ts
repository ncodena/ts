// Union type => it accepts as many types as needed
// Literal type => exact value it should hold

function combine (input1: number | string, input2: number | string, resultConversion: string) {
    let result;
    if(typeof input1 === 'number' && typeof input2 === 'number' || resultConversion === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }

    return result

    // if(resultConversion === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }  
}

const combinedAges = combine(30,26, 'as-number');
const combinedStringAges = combine('30','26', 'as-number');
const combinedNames = combine('Brad', 'Anna', 'as-text')

console.log(combinedAges)
console.log(combinedStringAges)
console.log(combinedNames)

