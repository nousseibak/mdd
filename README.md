# Projet MDD

MDD (Monde de Dév) est un réseau social pour développeurs. Le but est de développer le MVP (Minimum Viable Product).
Le MVP permettra aux utilisateurs de s'inscrire, se connecter/se déconnecter, afficher/modifier son profil, s’abonner/se désabonner de sujets liés à la programmation (comme JavaScript, Java, Python, Web3, etc.). Le fil d’actualité affichera chronologiquement les articles correspondants aux abonnements. L’utilisateur pourra également écrire des articles et poster des commentaires.

## Technologies 

Back-end:
- Java 17
- Spring Boot 3.3.0
- Mapstruct
- Lombok
- Spring Security et JWT(json web token)

Front-end:
- Angular 14.1.3
- Tailwind

Base de données:
- MySql


## Base de données

Le script pour créer la base de données MySql et ses tables se trouve dans le dossier ressources.

## Back

Modifier le fichier application.properties avec les informations de la bdd.

Faire un clean/install puis lancer le projet

## Front

Installer node_modules avant de commencer (`npm install`).

Lancer la commande `ng serve` pour démarrer le projet. Aller à l'adresse `http://localhost:4200/` pour voir l'application.
