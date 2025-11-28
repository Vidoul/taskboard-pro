# TaskboardPro

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

## Séquence 2 – Logique réactive du flux de données

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