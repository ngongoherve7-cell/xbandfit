# XBandFit — Master Prompt / Directives permanentes

Ce fichier est lu automatiquement au début de chaque session sur ce repo.
Il fait foi tant que l'utilisateur ne le modifie pas explicitement.

## Philosophie du projet

L'objectif n'est pas d'utiliser des outils pour utiliser des outils.
La logique est :

```
SKILLS + CONNECTEURS + CODE + ASSETS + IA + 3D + MOTION DESIGN
                          ⬇️
        UNE EXPÉRIENCE XBANDFIT CINÉMATIQUE
```

Quand plusieurs outils/skills peuvent contribuer à un même objectif (par
exemple : un outil génère/optimise une animation, un autre analyse les
performances, un autre travaille les images, un autre teste le
responsive), on les exploite ensemble, de façon coordonnée.

On ne fait jamais "utilise absolument tout" sans discernement : cela peut
produire l'effet inverse (dépendances inutiles, complexité, ralentissement
du site, régressions). La bonne approche est : **découvrir tout ce qui est
disponible, puis exploiter intelligemment ce qui est réellement pertinent**
pour l'objectif demandé.

## Règle absolue : audit avant modification importante

**Aucune modification importante du site ne doit être entreprise avant
d'avoir audité les outils disponibles (skills, connecteurs/intégrations),
le Cloud, et l'architecture actuelle du projet.**

Une "modification importante" = tout ce qui touche à la stack, à
l'hébergement, à une nouvelle dépendance/techno, ou à une refonte
structurelle d'une section du site. Un simple correctif de texte, de style
ou de contenu ne nécessite pas de ré-audit complet, mais doit tout de même
respecter les règles ci-dessous.

## Discipline à suivre avant toute modification du site

1. Inspecter l'intégralité des skills disponibles dans l'environnement.
2. Inspecter l'intégralité des connecteurs/intégrations disponibles.
3. Identifier lesquels peuvent réellement améliorer : le frontend ; le
   backend ; la base de données ; le Cloud ; les images ; les vidéos ; la
   3D ; les animations ; le design ; les performances ; le SEO ;
   l'accessibilité ; la boutique ; l'analyse UX ; les tests ; le
   déploiement.
4. N'utiliser un outil que lorsqu'il apporte une amélioration réelle et
   mesurable au projet.
5. Ne jamais remplacer une fonctionnalité existante qui fonctionne par une
   solution externe si cela risque de casser l'architecture actuelle.
6. Avant d'installer, modifier ou remplacer une technologie, vérifier sa
   compatibilité avec l'existant (site statique multi-pages, GitHub Pages,
   i18n fr/en/de embarqué dans `index.html`, `assets/concept.css` /
   `assets/concept.js` partagés par les pages concept).
7. Réutiliser au maximum les outils, composants, assets, données et
   intégrations déjà présents dans le projet plutôt que d'en recréer.
8. Ne jamais supposer qu'un connecteur, une API, une librairie ou un skill
   existe ou fonctionne : vérifier d'abord (ex. `ToolSearch`, test réel).
9. Si plusieurs outils permettent de faire la même chose, choisir celui qui
   donne le meilleur résultat en qualité, performance, stabilité et
   maintenance à long terme.
10. À la fin d'une tâche significative, fournir un résumé des
    skills/connecteurs réellement utilisés et de leur rôle dans le
    résultat.

## Règles standing du projet (issues des sessions précédentes)

- Aucun `&amp;` littéral, aucun tiret cadratin "—" nulle part sur le site.
- Formatage des nombres en virgule décimale française (ex. 1,5 kg).
- Aucun média généré ou modifié par IA n'est publié sans validation
  visuelle explicite préalable de l'utilisateur.
- Le site est un site statique HTML/CSS/JS multi-pages, servi par GitHub
  Pages sur `main` (domaine `xbandfit.com` via `CNAME`). Toute modification
  doit être poussée à la fois sur `claude/ouvrir-le-dossier-efzr6h` et sur
  `main`.
- Assets media (images, vidéos) autant que possible auto-hébergés sous
  `assets/`, plutôt que dépendants de liens CDN externes tiers.
- Commits terminés par :
  `Co-Authored-By: Claude Sonnet 5 <noreply@anthropic.com>`
  `Claude-Session: https://claude.ai/code/session_01RQpR4ebuDFY9QzMWS6aUVY`

## État connu de l'architecture (pour éviter de re-découvrir à chaque session)

- `index.html` : page d'accueil, contient son propre `<style>`/`<script>`
  embarqué, avec i18n (objet `translations` fr/en/de, attributs
  `data-i18n`/`data-i18n-html`).
- Pages concept (`concept-*.html`) et pages entraînement
  (`entrainement-*.html`) : partagent `assets/concept.css` et
  `assets/concept.js`.
- `sitemap.xml` : à tenir à jour à chaque ajout/suppression de page.
- Outils IA déjà connectés et testés dans ce projet : Higgsfield (image,
  vidéo, upscale, reframe), GitHub (dépôt et déploiement Pages). D'autres
  connecteurs existent dans l'environnement (Figma, Canva, Comfy, Imagine,
  Vercel, Shopify, Stripe, Resend, Notion, Dropbox, Google Drive/Gmail/
  Calendar, Apollo.io) mais ne sont pas utilisés sur ce site statique sauf
  besoin explicite et justifié après audit.
