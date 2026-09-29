# AL BAY — site vitrine et commande WhatsApp

Site bilingue anglais/arabe pour un restaurant familial à Tripoli, inspiré de la mise en page énergique et des animations de phocafe.co.uk, avec une identité AL BAY originale.

## Voir le site

- **Version en ligne locale** : lancer `python -m http.server 4173 --bind 0.0.0.0` depuis ce dossier, puis ouvrir `http://localhost:4173`.
- **Version autonome** : ouvrir `AL_BAY_Standalone.html` dans un navigateur, même sans serveur ni connexion Internet.

## Fonctionnalités

- Anglais / arabe, avec passage en RTL pour l'arabe et choix mémorisé dans le navigateur.
- Six thèmes mémorisés : Rouge Maison, Obsidian Gold, Emerald, Royal Plum, Sapphire et Champagne.
- Carte filtrable, panier avec quantités, nom, retrait ou demande de livraison et notes libres.
- Le bouton WhatsApp flottant ouvre directement WhatsApp : avec des articles dans le panier, le récapitulatif est prérempli ; sinon, il ouvre une conversation. Le bouton dans le panier envoie également le récapitulatif au **+218 91 344 2640** via `wa.me` (envoi à confirmer dans WhatsApp). Dans certains aperçus intégrés, les liens externes peuvent être bloqués : une fenêtre affiche alors le lien complet et un bouton pour le copier ; collez-le dans un onglet normal pour accéder à WhatsApp. Ouvrez la version autonome dans un navigateur normal pour tester la redirection directe.
- Mise en page responsive, animations d'apparition, bandeaux défilants et interactions accessibles au clavier.

## Avant publication

**Attention : la carte et les prix sont des exemples.** Remplacez-les dans `app.js` (`DISHES`) par les vrais plats, descriptifs et tarifs. Vérifiez ensuite la disponibilité du service de livraison. L'adresse exacte n'ayant pas été fournie, le site affiche seulement « Tripoli, Libya » et une mention indiquant que l'adresse reste à ajouter : renseignez l'adresse réelle dans `index.html` et les traductions `app.js`, puis ajustez le lien Maps. Les photographies sont des illustrations générées pour cette maquette et ne représentent pas nécessairement les plats réels du restaurant.

Pour modifier le numéro, changer `PHONE` dans `app.js` et les liens WhatsApp/téléphone fixes dans `index.html`. Après toute modification, relancer `python build_standalone.py` pour mettre à jour la version autonome.

Fichiers : `index.html` (structure), `styles.css` (design et thèmes), `app.js` (langues, carte, panier), `assets/` (images et polices), `build_standalone.py` (assemblage autonome).
