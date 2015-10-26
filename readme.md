
# PROJET WEB RTC
## By Alexandre SIRKO & Kristen VIGUIER

### Initialisation du projet

#### Installation des outils nécessaires

Cette application utilise de nombreux outils. Dans la suite de cette section, les différents outils sont listés mais il faut faire attention à leurs usages (ils ne sont pas tous utilisés pour le développement).

* [Node.js](https://nodejs.org/en/), l'interpréteur Javascript



C'est beau









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