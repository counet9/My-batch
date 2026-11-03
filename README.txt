MON BATCH — VERSION 8 (RECETTES ET QUANTITÉS CORRIGÉES)

CONTENU DU ZIP — À EXTRAIRE À LA RACINE DU DÉPÔT GITHUB PAGES
- index.html : application, 50 recettes, favoris, recherche, batch, courses et mode cuisine.
- manifest.json : configuration PWA installable.
- service-worker.js : cache v8, mise à jour réseau prioritaire pour les pages HTML et suppression des anciens caches Mon Batch.
- icon.svg : icône de l’application.
- README.txt : ces instructions.

PORTIONS ET CALCUL DU BATCH
Chaque fiche de recette est définie pour 1 personne et 1 dîner. La liste de courses calcule les quantités en multipliant chaque ingrédient une seule fois par personnes × jours.
Exemple vérifié pour le poulet miso, 2 personnes × 3 jours (6 dîners) :
- Blanc de poulet : 130 g × 6 = 780 g.
- Brocoli : 150 g × 6 = 900 g.
- Riz cru : 125 g × 6 = 750 g (au-dessus du minimum de 100 g par personne).
- Ail : 1 gousse × 6 = 6 gousses.
La fiche miso Basta ne contient ni oignon ni huile d’olive : elle reprend le miso, la sauce soja, le miel, l’huile de sésame, l’ail, la fécule, l’eau, le poivre, le poulet, le riz et le brocoli.

REPÈRES DE FÉCULENTS PAR PERSONNE ET PAR DÎNER
- Riz cru : 125 g par défaut (minimum demandé : 100 g).
- Pâtes sèches : 175 g (dans la plage souhaitée de 150 à 200 g).
- Nouilles sèches : 150 g.
- Semoule sèche : 100 g.
- Pommes de terre : environ 300 g.
- Gnocchis : 250 g.
Les quantités de viande, volaille et poisson restent des portions réalistes : généralement 120 à 130 g par personne, et environ 150 g pour le saumon, les saucisses ou certaines boulettes. Les légumes et les sauces restent liés à chaque recette ; ils ne sont pas doublés automatiquement.

LES RECETTES
- Les 19 premières fiches correspondent aux 19 recettes Basta fournies en captures. Les ingrédients et les étapes sont repris de ces fiches. Les quantités de féculents sont adaptées aux grandes portions convenues ; les autres ingrédients restent ceux de la recette source.
- Les 31 suivantes sont des créations Mon Batch, avec ingrédients, étapes détaillées, temps, macros estimées, budget indicatif et conseils de conservation.
- Les recettes personnalisées restent enregistrées localement dans le navigateur.

MODE CUISINE
Les étapes reprennent la fiche de recette. Pour préparer l’ensemble d’un batch de plusieurs personnes ou jours, utilise les quantités totales de la liste de courses (personnes × jours). Les étapes sont conservées dans leur formulation d’origine et ne sont pas automatiquement réécrites à chaque changement de portion.

PRIX ET NUTRITION
Les coûts sont des estimations indicatives en euros pour des achats courants en Belgique, non liées à un magasin précis et non garanties en temps réel. Les calories et macros sont également estimées ; elles varient selon les marques et les produits utilisés.

MISE À JOUR SUR GITHUB PAGES
1. Télécharge ce ZIP et décompresse-le.
2. Dans le dépôt GitHub « My-batch », ouvre le dossier publié par GitHub Pages (normalement la racine si Pages est configuré sur /(root)).
3. Remplace les cinq fichiers de la racine par les cinq fichiers du ZIP. Ne place pas les fichiers dans un sous-dossier.
4. Vérifie que index.html, service-worker.js, manifest.json, icon.svg et README.txt sont bien à la racine.
5. Attends la fin du déploiement GitHub Pages, puis ouvre l’adresse du site dans Safari et actualise-la. La version v8 utilise un nouveau cache et privilégie le réseau pour index.html ; l’ancien cache Mon Batch est supprimé lors de l’activation du nouveau service worker.
6. Ferme puis rouvre le raccourci installé sur l’écran d’accueil. Si l’ancienne page persiste, ouvre d’abord le site dans un onglet Safari et actualise-le une fois.

DONNÉES PERSONNELLES
Les favoris, recettes ajoutées, sélections de batch et cases cochées restent stockés localement dans le navigateur. La mise à jour ne demande pas d’effacer les données de Safari et ne doit pas les supprimer.
