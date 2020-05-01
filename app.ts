// Core types

function add (n1: number, n2: number, showResult: boolean, phrase: string) {
    console.log(typeof number2)
    const result = n1 + n2;
    if (showResult){
        console.log( phrase + result)
    } else {
        return result
    }
}

const number1 = 5;
const number2 = 2.8;
const printResult = true;
const resultPhrase =  'Result is: ';
add(number1, number2, printResult, resultPhrase);

// Objects and arrays

// const person: {
//     name: string;
//     age: number;
// } = {
//     name: 'Colt',
//     age: 26
// };

const person = {
    name: 'Colt',
    age: 26,
    hobbies: ['Sports', 'Cooking', 'Cycling', 'Baking', 'Playing']
};

let favouriteActivities: string[];
favouriteActivities = ['Cycling'];

console.log(person.name)

for(const hobby of person.hobbies) {
    console.log(hobby.toUpperCase())
}




