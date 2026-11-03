MON BATCH — version avec recherche améliorée

CONTENU (5 fichiers)
- index.html : application complète, catalogue, recherche, recettes, courses et mode cuisine.
- manifest.json : configuration installable PWA.
- service-worker.js : mise en cache hors-ligne (cache renouvelé pour charger cette version).
- icon.svg : icône de l'application.
- README.txt : ces instructions.

RECHERCHE DANS LES RECETTES
Dans l'onglet Recettes, la barre « Rechercher dans les plats » filtre les recettes par nom, catégorie, ingrédients et étapes. La recherche ignore les accents et les petits mots courants. Exemples : « poulet miso brocoli riz », « miso », « brocoli » ou « riz ».

MISE À JOUR
Remplace les 5 anciens fichiers par ceux de cette archive à la racine du dépôt GitHub Pages. Attends la fin du déploiement. Sur iPhone, ferme complètement l'application puis rouvre-la ; le nouveau cache service worker est prévu pour actualiser l'interface.

DONNÉES
Les recettes ajoutées, favoris, sélections et cases cochées sont enregistrés dans le stockage local du navigateur. Ne supprime pas les données du site dans les réglages du navigateur.
