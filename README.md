# AL BAY — site + carte QR à feuilleter

Site bilingue anglais/arabe pour un restaurant familial à Tripoli, avec six thèmes luxueux et commande WhatsApp au +218 91 344 2640. La carte QR est une **page distincte**, conçue comme un livre numérique à feuilleter (catégories, boutons précédent/suivant, balayage sur mobile, navigation au clavier), sans la navigation du site principal.

## Pages

- `index.html` — accueil et site vitrine.
- `menu.html` — carte à feuilleter, accessible directement par QR code à l'adresse `https://al-bay.vercel.app/menu.html` **une fois les nouveaux fichiers publiés**.
- `QR_Menu_AL_BAY.png` — QR code seul.
- `QR_Menu_AL_BAY_affiche.pdf` — affiche bilingue imprimable, avec indication « menu test ».

Le QR a été généré pour `https://al-bay.vercel.app/menu.html` et son contenu a été vérifié par décodage. **Ne l'imprimez pas pour les clients avant d'avoir déployé `menu.html` et testé le scan sur un téléphone.** Si l'URL définitive change, modifiez `MENU_URL` dans `make_qr.py`, puis relancez `python make_qr.py` (nécessite `qrcode` et Pillow).

## Publier depuis GitHub sur Vercel

Dans GitHub, déposez `menu.html`, `menu.js`, `menu.css` **au même endroit que votre `index.html` existant** et mettez à jour `index.html`, `app.js`, `styles.css` ainsi que le dossier `assets/`. Si votre `index.html` se trouve dans `al-bay/`, déposez ces fichiers dans `al-bay/` ; s'il est à la racine, déposez-les à la racine. **Ne changez pas votre Root Directory Vercel actuel si `https://al-bay.vercel.app/` fonctionne.** Après le commit, attendez le nouveau déploiement, puis testez `https://al-bay.vercel.app/menu.html`. Le ZIP `AL_BAY_upload_GitHub.zip` contient directement les fichiers à déposer dans le dossier où se trouve `index.html`, sans dossier parent supplémentaire.

## Contenu à personnaliser avant lancement officiel

**La carte et les tarifs sont fictifs.** Remplacez les données dans `app.js` (`DISHES`) **et dans `menu.js` (`DISHES`)** pour que le site et la carte QR restent cohérents. L'adresse exacte du restaurant manque encore. Confirmez aussi les conditions de livraison, le numéro WhatsApp et les photos des vrais plats (les photographies actuelles sont des illustrations générées). L'affiche indique « menu test » pour éviter de présenter les prix fictifs comme définitifs.

Le panier se conserve entre le site et la carte QR via le stockage local du navigateur. Dans certains aperçus intégrés, les liens vers WhatsApp sont bloqués : une fenêtre affiche alors le lien complet et un bouton pour le copier. Testez l'envoi final depuis le site Vercel dans un navigateur normal.

Pour produire des versions HTML autonomes sans serveur ni CDN : `python build_standalone.py` (génère `AL_BAY_Standalone.html` et `Menu_AL_BAY_Standalone.html`). Pour tester le site source localement : `python -m http.server 4173 --bind 0.0.0.0` puis ouvrir `/` et `/menu.html`.
