# Portfolio — Mathis Valour

Mon portfolio de développeur web : profil, parcours, compétences et projets, sur une seule page.

En ligne : [mvalour.github.io/portfolio](https://mvalour.github.io/portfolio/)

Angular 22 (composants standalone, signals, zoneless) · CSS sans framework.

## Lancer le projet

```sh
npm install
npm start          # http://localhost:4200
npm run build      # build de production dans dist/portfolio/browser
```

## Modifier le contenu

Tous les textes (expériences, formation, compétences, projets, contact) sont dans
`src/app/data/portfolio.data.ts`. Les visuels des projets sont dans `public/img/`.

## Mise en ligne

GitHub Pages, via `.github/workflows/deploy.yml`, à chaque push sur `main`.
