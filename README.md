# Écurie Sept-Nord

Prototype portfolio Hacker Studio pour une niche automotive premium : atelier Porsche indépendant fictif en Normandie.

Ce site a été créé pour corriger le problème du prototype Atelier Cauchois : trop proche d’Atelier Montclair, même niche architecture/intérieur, même vocabulaire beige/serif/carnet de chantier.

## Direction

Concept : atelier de diagnostic Porsche, télémétrie et inspection bay.

Le site ne vend pas du lifestyle automobile. Il vend de la confiance mécanique : protocole, symptômes, arbitrage, trace de sortie.

## Stack

Next.js App Router, TypeScript, Tailwind CSS v4, `next/font`, Metadata API, JSON-LD CreativeWork, sitemap, robots noindex.

## Lancer

```bash
npm install
npm run dev
```

## Vérifier

```bash
npm run lint
npm run build
npm audit --audit-level=moderate
```

## Pages

`/` homepage radicale automotive.

`/atelier` protocole.

`/brief` fiche véhicule.

## Déploiement Vercel

Importer le repo GitHub dans Vercel. Domaine placeholder : `https://ecurie-sept-nord.vercel.app`.
