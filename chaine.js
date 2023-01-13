let uneChaine = "Bonjour tout le monde";
let nom = "Hassan";

// concatenation avec l'operateur +
let phrase = "Mon nom est : " + nom;
let output;

output = uneChaine + "\n" + phrase;

console.log(output);

// les caacteres d'echpement
// escaping characters
console.log('the ninja screamed "whaaa"');
console.log("the ninja scream 'whaaa'");
console.log("the ninja scream \\whaaa\\");
console.log("the ninja scream \t whaaa");
console.log("the ninja scream \n whaaa");
console.log('the ninja screamed "whaaa"');
console.log("the ninja scream 'whaaa'");

// taille d'une chaine
let ch = "ETTI";
let taille = ch.length;

// Template strings
console.log(`la taille de ${ch} est ${taille}`);

// une paragraphe
let long_chaine =
  "Lorem ipsum dolor sit amet \
consectetur, adipisicing elit. \
Beatae vel ipsum, omnis consequuntur \
officiis esse atque repellat possimus";

// Declaration avec la classe String
// (!!!! a ne pas utiliser dans votre code!!!)
let ecole = new String("Ecole de Topographie, Technologie et Informatique");
console.log(ecole);
