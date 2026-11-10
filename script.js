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

// Boucle de jeu
while (!aTrouve) {
    const saisie = prompt(`Devinez mon score (entre ${nombreMin} et ${nombreMax}) :`);
    tentative = Number(saisie);
    nombreTentatives++;

    if (tentative < nombreSecret) {
        console.log("Tu me prends pour un faible ? Augmente le score.");
    } else if (tentative > nombreSecret) {
        console.log("Je ne suis pas encore si fort que ça, diminue le score.");
    } else {
        console.log("En plein dans le mille, bravo !");
    }
}
