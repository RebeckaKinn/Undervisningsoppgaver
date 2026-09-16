// Et objekt samler informasjon som hører sammen

//Med variabler
let name = "Ola";
let age = 25;
let city = "Oslo";

//Med array
let personArray = ["Ola", 25, "Oslo"];
console.log(personArray[0]);

//Med objekter
let person = {
  name: "Ola",
  age: 25,
  city: "Oslo",
};
console.log(person);

//Spesifisering av hva vi skal ha tak i

console.log(person.name); // Ola
console.log(person.age); // 25
console.log(person.city); // Oslo

// Endre verdi

person.age = 26;
console.log(person.age); // 26

//Legge til en ny property

person.country = "Norway";

//Objekter kan også brukes som verdier i andre variabler.

let personName = person.name;
let personAge = person.age;

console.log(personName);
console.log(personAge);

//variabler som property-verdier

let name2 = "Ola";
let age2 = 25;

let testPerson = {
  name: name2,
  age: age2,
};

//Objekt i et objekt
//En property kan inneholde et objekt

let person = {
  name: "Ola",
  age: 25,

  address: {
    street: "Storgata 10",
    city: "Oslo",
    postalCode: "0155",
  },
};

console.log(person.name);
console.log(person.address);
console.log(person.address.city);

// Funksjon som oppretter et objekt

function createPerson(name, age, city) {
  let newPerson = {
    name: name,
    age: age,
    city: city,
  };

  return newPerson;
}

let person1 = createPerson("Ola", 25, "Oslo");
let person2 = createPerson("Kari", 32, "Bergen");

console.log(person1);
console.log(person2);
