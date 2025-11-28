# TaskboardPro

## Séquence 1

## Commandes faites

Commandes utilisées : 
```bash 
ng new taskboard-pro --routing --style=scss
ng generate component home --standalone
ng generate component about --standalone
```
Routes fonctionnelles : 
```bash 
/ (Home) et /about (About)
```

## Séquence 2

1. Concepts compris

La programmation réactive permet à l'application de réagir automatiquement aux changements de données sans avoir à demander manuellement une mise à jour. Angular utilise la librairie RxJS pour gérer ces flux.

2. Rôle du BehaviorSubject

Dans le TaskService, nous utilisons un BehaviorSubject. C'est un type d'Observable qui :

Garde en mémoire la dernière valeur émise (la liste des tâches à jour).

Diffuse cette valeur immédiatement à tout nouveau composant qui s'y abonne.

Permet d'émettre de nouvelles valeurs via la méthode .next().

3. Rôle du Pipe Async (| async)

Dans le template HTML, le pipe async :

S'abonne automatiquement (subscribe) à l'Observable tasks$.

Récupère les données et met à jour l'affichage à chaque changement.

Se désabonne automatiquement (unsubscribe) quand le composant est détruit, évitant les fuites de mémoire.

4. Fonctionnement du flux

Service : Stocke les données et notifie les changements (this.tasksSubject.next(...)).

Composant : Récupère le flux (tasks$) via l'injection de dépendance.

Template : Affiche les données en temps réel grâce au pipe async.

## Seuence 3

### Qu'est-ce que le Lazy Loading ?

Le Lazy Loading (chargement paresseux) est une technique d'optimisation : au lieu de charger tout le code de l'application au démarrage, il ne charge le code d'une page (une feature) que lorsque l'utilisateur y accède.

Résultat : L'application est beaucoup plus rapide à démarrer.

### Comment on structure une app avec features/

Structurer par features/ (fonctionnalités) consiste à organiser le code par domaines d'application plutôt que par type de fichier.

features/ : Contient le code des fonctionnalités spécifiques (ex: tasks/, auth/). Ces dossiers sont chargés en Lazy Loading.

core/ : Contient les services et les éléments qui doivent être des singletons (uniques et accessibles partout, ex: TaskService).

shared/ : Contient les composants réutilisables (ex: FooterComponent).

Cette structure permet de rendre chaque fonctionnalité indépendante et de la charger à la demande.