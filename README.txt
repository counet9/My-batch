MON BATCH — VERSION CORRIGÉE

CE QUI CHANGE
- Les fiches de recettes affichent de vraies photos intégrées à l’application, au lieu des emojis. Les 19 plats favoris correspondent aux photos des captures fournies ; certaines photos sont réutilisées pour les autres recettes.
- Dans « Mon batch », chaque recette possède maintenant deux réglages distincts : « Nombre de personnes » et « Nombre de jours ».
- Réglage initial : 2 personnes pendant 2 jours (4 grandes portions). Tu peux changer les deux nombres indépendamment pour chaque plat : 1 personne pendant 3 jours, 2 personnes pendant 3 jours, etc.
- Les ingrédients et la liste de courses sont recalculés en fonction des personnes × jours.
- Le cache de l’application est renouvelé pour que l’iPhone charge cette nouvelle version au lieu de l’ancienne.

IMPORTATION
1. Décompresse cette archive.
2. Importe les 5 fichiers à la racine de ton dépôt GitHub : index.html, manifest.json, service-worker.js, icon.svg et README.txt.
3. Attends que GitHub Pages termine le déploiement.
4. Ouvre l’adresse du site dans Safari et actualise. Ferme ensuite complètement l’application installée sur l’écran d’accueil et relance-la.

Les photos sont incorporées dans index.html : aucun dossier photo supplémentaire n’est nécessaire.
Les recettes et favoris enregistrés localement sont conservés. Les réglages de batch déjà présents sont gardés lorsqu’ils contiennent déjà un nombre de personnes et de jours ; les anciens éléments à portions seules démarrent à 2 personnes × 2 jours.
