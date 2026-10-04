# مطعم العيلة — site démo familial et carte QR

La marque est affichée **uniquement en arabe : مطعم العيلة**, dans les versions arabe et anglaise. Site vitrine et carte numérique à feuilleter par catégories, six thèmes, panier et commande par WhatsApp au +218 91 344 2640.

## Fichiers du site

- `index.html`, `styles.css`, `app.js` : accueil, mise en page et panier.
- `menu.html`, `menu.css`, `menu.js` : carte QR distincte en forme de livre (catégories, pages animées, balayage mobile).
- `assets/` : images et polices locales.
- `QR_Menu_Restaurant_AlEila.png` : QR seul, et `QR_Menu_Restaurant_AlEila_affiche.pdf` : affiche bilingue à imprimer.

## Mise en ligne

Le ZIP `Restaurant_AlEila_upload_GitHub.zip` contient les fichiers de déploiement directement à sa racine. Après extraction, remplacez `index.html`, `app.js`, `styles.css`, `menu.html`, `menu.js`, `menu.css` et `assets/` **au même endroit que le `index.html` publié aujourd'hui** dans votre dépôt GitHub. Laissez Vercel redéployer.

La carte reste accessible à `https://al-bay.vercel.app/menu.html`. **L'ancienne adresse Vercel est conservée provisoirement pour les tests**, conformément à votre choix ; elle contient encore l'ancien nom dans l'URL, mais le nom n'apparaît plus dans le site ni sur l'affiche. Le QR actuel pointe toujours vers cette adresse : il continue donc de fonctionner après la mise à jour. Si vous changez plus tard de domaine, modifiez `MENU_URL` dans `make_qr.py`, générez un **nouveau** QR puis remplacez les affiches imprimées.

## Avant un usage officiel

La carte et les prix sont des exemples : remplacez les plats/prix dans **`app.js` ET `menu.js`** pour conserver les deux cartes cohérentes. Ajoutez l'adresse précise du restaurant et ses véritables photos. L'affiche porte la mention « TEST MENU » tant que la vraie carte n'est pas prête. Vérifiez aussi que le numéro WhatsApp est actif et que les conditions de livraison correspondent à la réalité.

Pour générer les fichiers autonomes : `python build_standalone.py`. Pour régénérer le QR : `python make_qr.py` (nécessite `qrcode` et Pillow). Pour tester localement : `python -m http.server 4173 --bind 0.0.0.0` puis ouvrir `/` et `/menu.html`.
