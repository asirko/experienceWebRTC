
# PROJET WEB RTC
By Alexandre SIRKO & Kristen VIGUIER

## Objectif du projet

Les principaux objectifs sont :
* Apprendre et développer nos connaissance des outils Javascript "haute productivité" (Node, Angular, Bower, Grunt, Yeoman, Heroku, MongoDB, etc.) ;
* Développer une platforme de communication multi-support (chat, forum, microphone, webcam) ;
* Profiter de cette plateforme pour partager les informations et compétences acquises.

## Participer au projet

### Installation des outils nécessaires

Cette application utilise de nombreux outils. Dans la suite de cette section, les différents outils sont listés mais il faut faire attention à leurs usages (ils ne sont pas tous utilisés pour le développement).

* [Node.js](https://nodejs.org/en/) : l'interpréteur Javascript. Cet outil est central dans toutes les phases du projet, il est donc conseillé de le télécharger dès que possible. Pour l'installer, utiliser le lien définit plus haut, télécharger la version de Node.js recommandé pour votre système et suivez les étapes d'installation conseillée. Vous pouvez tester votre installation en ouvrant une invite de commande et en tapant la commande `node --version` ;
* [MongoDB](https://www.mongodb.org/) : la base de données NoSQL orientée document. N'étant nécessaire que pour le lancement du serveur, cet outil peut être installé à n'importe quel moment. Comme pour Node.js, MongoDB doit être téléchargé depuis le site officiel puis, en suivant les étapes par défaut, il peut être installé. Pour le tester, ouvrez une invite de commande (en tant qu'administrateur pour Windows) et placez vous dans le dossier bin/ de MongoDB (exemple pour Windows : `C:\Program Files\MongoDB\Server\3.0\bin`), la commande `./mongod.exe` doit lancer le serveur de base de données ;
* [git](http://git-scm.com/) : le gestionnaire de version de l'application. Comme les deux outils précédents, il se télécharge et s'installe très simplement depuis le site officiel. Pour tester son installation, utilisez la commande `git --version` ;
* Les différents outils de l'environnement Javascript peuvent tous s'installer en une seule ligne de commande : `npm install -g yo grunt-cli bower generator-angular-fullstack` les outils ainsi installé sont respectivement :
	* yo : Yeoman un utilitaire de scaffolding (génération de code automatisé à l'initialisation du projet ET à différentes étapes du développement) ;
	* grunt-cli : outil d'automatisation de tâches (génère une version minifié de l'application, démarre le serveur de développement, construit une version déploiyable, etc.) ;
	* bower : outil de gestion des dépendances front-end (contrairement à npm qui se charge des dépendance back-end) ;
	* generator-angular-fullstack : le générateur pour Yeoman permettant de généré du code sur l'architecture choisis.











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