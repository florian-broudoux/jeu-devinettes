// Valeurs fixes
const nombreMin = 1;
const nombreMax = 180;

// Fonctions

function genererNombre(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function demanderTentative() {
    const question = `Devinez mon score (entre ${nombreMin} et ${nombreMax}) :`;
    let saisie = prompt(question);

    while (saisie !== null) {
        const nombre = Number(saisie);

        if (saisie === "") {
            console.log("Vous n'avez rien saisi.");
        } else if (isNaN(nombre) || nombre < nombreMin || nombre > nombreMax) {
            console.log(
                `Mon score est un nombre compris entre ${nombreMin} et ${nombreMax}.`,
            );
        } else {
            return nombre;
        }

        saisie = prompt(question);
    }

    return null;
}

function verifierTentative(tentative, nombreSecret) {
    if (tentative < nombreSecret) {
        return "trop bas";
    } else if (tentative > nombreSecret) {
        return "trop haut";
    } else {
        return "trouvé";
    }
}

function afficherResultat(resultat, nombreSecret, nombreTentatives) {
    if (resultat === "trop bas") {
        console.log("Tu me prends pour un faible ? Augmente le score.");
    } else if (resultat === "trop haut") {
        console.log("Je ne suis pas encore si fort que ça, diminue le score.");
    } else {
        console.log(
            `En plein dans le mille, bravo ! Vous avez trouvé ${nombreSecret} en ${nombreTentatives} tentatives.`,
        );
    }
}

function afficherBilan(statistiques) {
    console.log("=== BILAN DE LA PARTIE ===");

    // Affichage de l'historique
    console.log("Historique de vos tentatives :");
    for (let i = 0; i < statistiques.historique.length; i++) {
        console.log(`Tour ${i + 1} : ${statistiques.historique[i]} `);
    }

    // Calcul de la durée en seconde
    const duree = Math.floor(
        (statistiques.tempsFin - statistiques.tempsDebut) / 1000,
    );

    //Affichage des statistiques
    console.log("Statistiques de la partie");
    console.log(`Nombre secret : ${statistiques.nombreSecret}`);
    console.log(`Nombre de tentatives : ${statistiques.nombreTentatives}`);
    console.log(`Meilleure tentative : ${statistiques.meilleureTentative}`);
    console.log(`Durée de la partie : ${duree} s`);

    //Message personnalisé si trouve en moins de 3 ou de 5
    if (statistiques.aTrouve) {
        if (statistiques.nombreTentatives <= 3) {
            console.log("Tu as un don ! incroyable");
        } else if (statistiques.nombreTentatives <= 5) {
            console.log("Tu as trouvé rapidement, félicitations !");
        } else {
            console.log("Bravo !");
        }
    } else {
        console.log("Partie abandonnée.");
    }

    console.log("==============================");
}

function jouer() {
    let continuerAJouer = true;

    while (continuerAJouer) {
        console.log("=== Bienvenue dans le jeu de devinettes ! ===");
        console.log("=== Mon score se situe entre 1 et 180. ===");

        //Tableau pour l'historique des tentatives
        const historique = [];

        // Heure de début
        const tempsDebut = Date.now();

        // Nombre a deviner avec la fonction
        const nombreSecret = genererNombre(nombreMin, nombreMax);

        // Variables qui se modifient
        let nombreTentatives = 0;
        let aTrouve = false;
        let tentative = 0;

        // Boucle de jeu
        while (!aTrouve) {
            // Tentative avec la fonction
            tentative = demanderTentative();

            // Annuler la partie
            if (tentative === null) {
                console.log("Fin de la partie");
                break;
            }

            // Ajout d'une tentative
            nombreTentatives++;

            //Ajouter la tentative à l'historique
            historique.push(tentative);

            // Vérifier le résulat avec la fonction
            const resultat = verifierTentative(tentative, nombreSecret);

            // Affficher le résultat avec la fonction
            afficherResultat(resultat, nombreSecret, nombreTentatives);

            // Fin de la boucle si le score est trouvé
            if (tentative === nombreSecret) {
                aTrouve = true;
            }
        }

        // Objet statistiques
        const statistiques = {
            nombreSecret: nombreSecret,
            nombreTentatives: nombreTentatives,
            historique: historique,
            tempsDebut: tempsDebut,
            tempsFin: Date.now(),
            aTrouve: aTrouve,
        };

        // Ajouter la meilleure tentative dans les statistiques
        statistiques.meilleureTentative = "Aucune";
        let plusPetitEcart = nombreMax - nombreMin + 1;
        for (let i = 0; i < historique.length; i++) {
            const ecart = Math.abs(historique[i] - nombreSecret);
            if (ecart < plusPetitEcart) {
                plusPetitEcart = ecart;
                statistiques.meilleureTentative = historique[i];
            }
        }

        afficherBilan(statistiques);

        let reponse = prompt(
            "Voulez-vous rejouer ? Tapez oui pour rejouer, non pour arrêter.",
        );

        while (reponse !== "oui" && reponse !== "non" && reponse !== null) {
            console.log("Saisie incorrecte. Répondez par oui ou non.");
            reponse = prompt(
                "Voulez-vous rejouer ? Tapez oui pour rejouer, non pour arrêter.",
            );
        }

        if (reponse === "non" || reponse === null) {
            continuerAJouer = false;
            console.log("Merci d'avoir joué, à bientôt !");
        }
    }
}

// Lancer le jeu avec la fonction
jouer();
