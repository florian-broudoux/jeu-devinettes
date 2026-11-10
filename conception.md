MON JEU DE DEVINETTES
═════════════════════════════════════════

Thème du jeu : Score de flechettes

Limites du nombre secret (deux constantes) :
  NOMBRE_MIN = 1     NOMBRE_MAX = 180

Messages de feedback :
  Quand la tentative est trop haute : "Je ne suis pas encore si fort que ça, diminue le score."
  Quand la tentative est trop basse : "Tu me prends pour un faible ? Augmente le score."
  Quand le joueur trouve :           "En plein dans le mille, bravo !"

Fonctions à créer  :
  □ genererNombre(min, max)                 → retourne un nombre aléatoire
  □ demanderTentative()                     → demande un nombre au joueur (prompt)
  □ verifierTentative(tentative, secret)    → compare et retourne le résultat
  □ afficherResultat(resultat)              → affiche le message du résultat
  □ jouer()                                 → orchestre la partie complète

Statistiques de fin de partie (objet statistiques) :
  □ nombreSecret       □ nombreTentatives     □ historique
  □ tempsDebut         □ tempsFin             □ aGagne
