console.log("=== Bienvenue dans le jeu de devinettes ! ===");
console.log("=== Mon score se situe entre 1 et 180. ===");

// Valeurs fixes
const nombreMin = 1;
const nombreMax = 180;

// Nombre a deviner
const nombreSecret = Math.floor(Math.random() * 100) + 1;

// Variables qui se modifient
let nombreTentatives = 0;
let aTrouve = false;
let tentative = 0;
