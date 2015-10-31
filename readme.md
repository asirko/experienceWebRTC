
# PROJET WEB RTC
By Alexandre SIRKO & Kristen VIGUIER

## Objectif du projet

Les principaux objectifs sont :
* Apprendre et développer nos connaissances des outils Javascript "haute productivité" (Node, Angular, Bower, Grunt, Yeoman, Heroku, MongoDB, etc.) ;
* Développer une platforme de communication multi-support (chat, forum, microphone, webcam) ;
* Profiter de cette plateforme pour partager les informations et compétences acquises.

## Démarrer avec le projet

### Installation des outils nécessaires

Cette application utilise de nombreux outils. Dans la suite de cette section, les différents outils sont listés mais ils peuvent correspondre à différents usages (ils ne sont pas tous utilisés pour les phase de développement).

* [Node.js](https://nodejs.org/en/) : l'interpréteur Javascript. Cet outil est central dans toutes les phases du projet, il est donc conseillé de le télécharger dès que possible. Pour l'installer, utiliser le lien définit plus haut, télécharger la version de Node.js recommandé pour votre système et suivez les étapes d'installation conseillée. Vous pouvez tester votre installation en ouvrant une invite de commande et en tapant la commande `node --version` ;
* [MongoDB](https://www.mongodb.org/) : la base de données NoSQL orientée document. N'étant nécessaire que pour le lancement du serveur, cet outil peut être installé à n'importe quel moment. Comme pour Node.js, MongoDB doit être téléchargé depuis le site officiel puis, en suivant les étapes par défaut, il peut être installé. Pour le tester, ouvrez une invite de commande (en tant qu'administrateur pour Windows) et placez vous dans le dossier bin/ de MongoDB (exemple pour Windows : `C:\Program Files\MongoDB\Server\3.0\bin`), la commande `./mongod.exe` doit lancer le serveur de base de données ;
* [git](http://git-scm.com/) : le gestionnaire de version de l'application. Comme les deux outils précédents, il se télécharge et s'installe très simplement depuis le site officiel. Pour tester son installation, utilisez la commande `git --version`. Si vous êtes amené à utiliser git pour enregistrer des modification sur le code, vous devrez saisir vos identifiants mais normalement git vous expliquera la procédure dès que vous y serez confronté ;
* Les différents outils de l'environnement Javascript peuvent tous s'installer en une seule ligne de commande : `npm install -g yo grunt-cli bower generator-angular-fullstack` les outils ainsi installé sont respectivement :
	* yo : Yeoman un utilitaire de scaffolding (génération de code automatisé à l'initialisation du projet ET à différentes étapes du développement) ;
	* grunt-cli : outil d'automatisation de tâches (génère une version minifiée de l'application, démarre le serveur de développement, construit une version déploiyable, etc.) ;
	* bower : outil de gestion des dépendances front-end (contrairement à npm qui se charge des dépendances back-end) ;
	* generator-angular-fullstack : le générateur pour Yeoman permettant de généré du code sur l'architecture choisis.

**Note :** les outils installés plus haut peuvent nécessiter des configurations supplémentaires suivant votre environnement personnel. Par exemple, les utilisateurs étant derrière un proxy auront besoin de le définir pour npm, git et bower (en effet, ils utilisent le réseau pour télécharger des ressources).

### Télécharger et démarrer l'application

#### Création du Projet

Avant de récupérer les sources de l'application, placez vous en ligne de commande dans le répertoire où vous voulez placer le projet. Il faut garder à l'idée que ce répertoire sera le coeur de votre travail, et que ce travail se fera souvant en ligne de commande.

Une fois dans votre projet, vous pouvez "cloner" le projet. Pour celà, utilisez la commande `git clone https://github.com/asirko/experienceWebRTC.git`. Cette commande va créer le dossier experienceWebRTC et y télécharger l'intégralité du projet à l'image de ce qui est stocké ici.

#### Installation des librairies

Comme tout projet Web, de nombreuses libraires sont nécessaires pour effectuer différentes actions. Heureusement ces librairies n'ont pas besoin d'être installées manuellement. Deux outils permettent de gérer ces libraires :
* npm gère les libraires "back-end" ;
* bower gère les librairies "front-end".

Pour installer les librairies, il faut donc exécuter successivement en ligne de commande à la racine du dossier experienceWebRTC :
* `npm intall`
* `bower install`

Par la suite, il sera possible d'avoir à réutiliser ces commandes, essentiellement si un autre développeur télécharge une nouvelle dépendance pour le projet. 

#### Démarrage du projet

Commençons par démarrer le serveur de base de données, pour les utilisateur windows, ouvrez une invite de commande en mode administrateur. Puis, placez vous dans le répertoire /bin de MongoDB (par défaut pour Windows : `C:\Program Files\MongoDB\Server\3.0\bin`). Enfin démarrer le "demon" MongoDB avec la commande `./mongod.exe`.

Une fois le serveur de base de données démarré, ouvrez une deuxième invite de commande, cette fois-ci, il n'est pas nécessaire de la démarrer en mode administrateur. Placez vous à la racine du dossier /experienceWebRTC et tapez la commande `grunt serve`. Une fois l'application démarrée, votre navigateur devrait se démarrer seul à l'adresse localhost:9000.

L'application est ainsi démarrée et peut être utilisée.

### Pousser des modifications

Le terme "pousser" désigner l'action de publier du code sur le répertoire parent et donc de partager vos modifications. Pour pouvoir effectivement pousser du code, il faut avoir à l'esprit que les administrateur de ce répertoire doivent vous y autoriser.

Dans la plupart des cas, pousser du code s'effectuer en trois commandes successives:
```
git add --all
git commit -m "votre message décrivant ce qui est commité"
git push origin master
```

* **add** permet d'ajouter des fichiers que git pourra prendre en compte, en association avec **rm**, il est possible d'ajouter de nouveaux fichiers ou d'en écarter temporairement d'autre le temps d'un commit.
* **commit** permet de dire à git "Le code qui a évolué est dans un état "fini"", archivant les modifications dans le système de gestion des versions local. Essayez de préciser dans le message lié au "commit" les fonctionnalités impactées et les raisons des modifications.
* **push** permet de pousser les commit vers d'autres répertoires. Dans l'exemple plus haut, *origin* correspond au répertoire d'où le code provient (normalement, le répertoire sur github) et *master* correspond à la branche sur laquelle le code doit être poussé.

**Note :** Il se peut que la réponse soit en erreur, vous précisant que votre version du code code n'est pas à jour par rapport au code présent sur le répertoire central. Dans ce cas vous devrez [mettre à jour votre code](https://github.com/asirko/experienceWebRTC#récupérer-les-modifications-des-autres)

### Récupérer les modifications des autres

Lorsque de nouvelles fonctionalités ont été développées par d'autre, il est très simple de les récuppérer sur sa verion du projet. Il faut utiliser la commande : `git pull`.

Ici encore, il faut être vigilant, le "git pull" nécessite de ne pas avoir de modification "flottante". Le terme de modification "flottante" du code est utilisé ici pour désigner des modifications qui n'auraient pas été commités.

## Structure du projet

### Librairies utilisées

### Architecture

#### Décomposition globale

#### Strucure Front-End

#### Structure Back-End

## Outils de développement

### Gestion des dépendances

#### npm : les dépendances Back-End

#### bower : les dépendances Front-End

### Exécution de tâches automatisées avec `grunt`

### Scaffolding avec `Yeoman`

#### Focus sur le generateurs `angular-fullstack`













### Listes commandes utiles classées par catégorie


#POUR ROUTES
	(Si pas déjà installer faire) -> npm install –g yo generator-angular-fullstack

	Créer une route : yo angular-fullstack:route nomDeLaRoute



#LANCER SERVEUR

	1)Ouvrir deux invites de commandes

	2) Dans l'un : 
			- se rendre dans "C:\Program Files\MongoDB\Server\3.0\bin"
			- taper ./mongod.exe
		(Permet de lancer le service mongoDB)
		
	3) Dans l'autre : 
			- se rendre à la racine du projet .\project
			- taper grunt serve
		(Permet de lancer le serveur sur le port 9000)






***À mettre en forme, les commandes pour heroku***

installer "Heroku Toolbelt Download" (utilitaire en ligne de commande pour manipuler le serveur heroku)

Avant d'utiliser la moindre commande lié à heroku, il faut se connecter à son compte sur heroku avec la commande :
heroku login

pour générer l'application sur heroku :
yo angular-fullstack:heroku

pour manipuler l'application déployé sur heroku, il faut se placer dans le dossier dist/

angular-fullstack utilise mongoDB, il faut donc préciser à heroku d'utiliser mongo avec la commande (il faut avoir saisir ses données bancaire même si out est gratuit)
heroku addons:add mongohq

Pour démarrer l'application, il faire la commande :
heroku open




You may need to address the issues mentioned above and restart the server for the app to work correctly.
After app modification run
        grunt build
Then deploy with
        grunt buildcontrol:heroku