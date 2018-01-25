// const person = {
//   name: 'Courd',
//   age: 27,
//   location: {
//     city: "san tan valley",
//     temp: 500
//   }
// }
//
// const {name = 'Lizzy', age, location} = person;
// console.log(`${name} is ${age}.`);
//
// const {city, temp: temperature} = location;
// if (city && temperature) {
//
// console.log(`it's ${temperature} in ${city}.`);
// }


// const book = {
//   title: 'ego is the enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };
// const { name: publisherName = 'Self-Published' } = book.publisher;
//
// console.log(publisherName);







// const address = ['1358 e harvest rd', 'San Tan Valley', 'Arizona', '85140'];
//
// const [, city, state = "my Butt",] = address;
//
// console.log(`you are in ${city} ${state}`);

const item = ['Coffee (hot)', '$200', '$2.50', '$275'];
const [drink,,medium] = item;

console.log(`A medium ${drink} costs ${medium}`);
