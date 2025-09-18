---
title: Carte de bus Montréal
author: Garutako
image: ../../images/transit_map.png
thumbnail: ../../images/transit_map.png
---

Cette application affiche une carte en temps réel de la flotte de véhicules de la Société de transport de Montréal (STM). Il s'agit de mon premier projet réalisé avec [Next.js](https://nextjs.org/) et de mon introduction à la gestion d'état avec [React](https://react.dev/).

Les données utilisées proviennent des [API ouvertes de la STM](https://www.stm.info/en/about/developers). Étant donné que l'API autorise 10 000 requêtes par jour, j'ai fixé la fréquence des requêtes à 10 secondes d'intervale. Cela me permet d'actualiser les données aussi souvent que possible sans dépasser cette limite. L'application sert ensuite ces données aux clients sur demande. Présentement, le client envoie une requête toutes les 30 secondes, mais cette valeur pourra être ajusté en fonction des performances. Il est également possible que j'adopte une autre méthode pour distribuer les données.

La difficulté principale que j'ai rencontré lors de l'utilisation de cette API a été la compréhension de la spécification [GTFS Real-Time](https://gtfs.org/documentation/realtime/reference/). Les sociétés de transport à travers le globe l'utilisent pour structurer leurs données et assurer la cohérence entre les systèmes. Les données de position des bus sont encodées à l'aide de Protocol Buffers (Protobuf). La structure des données est définie dans un fichier [gtfs-realtime.proto](https://gtfs.org/documentation/realtime/proto/). Pour ce projet, j'ai choisi d'utiliser la bibliothèque [gtfs-realtime-bindings](https://github.com/MobilityData/gtfs-realtime-bindings), qui fournit des liaisons JavaScript/TypeScript pré-générées pour GTFS Realtime.

Pour la cartographie, j'ai utilisé la bibliothèque [OpenLayers](https://openlayers.org/) avec les tuiles [OpenStreetMap](https://www.openstreetmap.org), deux technologies libres et bien documentées, idéales pour un projet d'initiation. Les marqueurs sont dessinés directement sur le canevas de la carte et les interactions sont détectées via des événements souris. Les informations disponibles sur un bus sont affichées dans un panneau flottant.

Avec le cœur de l'application et son interface utilisateur de base terminés, je suis satisfait de ce projet. Je ne dispose pas actuellement de serveur pour l'héberger, mais lorsque ce sera le cas, il se pourrait que je le réorganise. J'envisage également d'ajouter des fonctionnalités telles que l'affichage des itinéraires et des horaires des bus.
