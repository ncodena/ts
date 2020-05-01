// Number, string and boolean

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

// Object, array

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

// Tuple => fixed-length-type array. It throws an error if it does not follow the rule

const person2: {
    name: string;
    age: number;
    hobbies: string[];
    role: [number, string]

} = {
    name: 'Max',
    age: 36,
    hobbies: ['Sports', 'Cooking', 'Cycling', 'Baking', 'Playing'],
    role: [2, 'author']
};

// Push method is an exception which is allowed in tuples
// person2.role.push('admin');

person2.role = [0, 'user']

console.log(person2)

// Enum => It gives an enumerated list in which the labels are translated into numbers starting at 0.
// It assigns labels to numbers

enum Role { ADMIN, READ_ONLY, AUTHOR };

const person3 = {
    name: 'Eva',
    age: 26,
    hobbies: ['Sports', 'Cooking', 'Cycling', 'Baking', 'Playing'],
    role: Role.ADMIN
};





