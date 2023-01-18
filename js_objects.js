// syntaxe
// let <nom_objet> = {<champ1>: <valeur1>, <champ2>: <valeur2>, ...}
let person = { fname: "John", lname: "Doe", age: 25 };

// access au champs d'objet 
console.log(person.fname);
console.log(person.lname);
console.log(person.age);

console.log(person["age"]);
console.log(person["fname"]);
console.log(person["lname"]);

for (let cle in person) {
  console.log(person[cle]);
}
