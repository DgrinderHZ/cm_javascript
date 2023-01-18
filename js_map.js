fruits = new Map([
  ["apples", 500],
  ["bananas", 300],
  ["oranges", 200],
]);

// Set Map Values
fruits.set("cafe", 900);

for (const item of fruits) {
    let cle = item[0];
    let val = item[1];
  console.log("cle : "+ cle + "=>  valeur"+ val);
}

fruits.forEach(function(val, cle) {
    console.log("cle : " + cle + "=>  valeur" + val);
});

for (const cle of fruits.keys()) {
  console.log(cle);
}

for (const cle of fruits.values()) {
  console.log(cle);
}