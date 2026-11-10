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

    // Annuler la partie
    if (saisie === null) {
        console.log("Fin de la partie");
        break;
    }

    tentative = Number(saisie);

    // Recommencer la saisie si elle est vide, si elle dépasse les valeurs min et max ou si ce n'est pas un nombre
    if (saisie === "" || tentative < nombreMin || tentative > nombreMax || isNaN(tentative)) {
        console.log(`Mon score est un nombre compris entre ${nombreMin} et ${nombreMax}.`);
        continue;
    }

    nombreTentatives++;

    if (tentative < nombreSecret) {
        console.log("Tu me prends pour un faible ? Augmente le score.");
    } else if (tentative > nombreSecret) {
        console.log("Je ne suis pas encore si fort que ça, diminue le score.");
    } else {
        aTrouve = true;
        console.log(`En plein dans le mille, bravo ! Vous avez trouvé ${nombreSecret} en ${nombreTentatives} tentatives.`);
    }
}
