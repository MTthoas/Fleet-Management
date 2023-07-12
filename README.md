# Linux Avancé
### Examen

### <ins>Introduction:</ins>

Vous êtes Chief Technical Officer dans une entreprise et on vous demande d’aider le responsable opérationnel d’un grand groupe de service de mise à disposition de flotte de véhicule en développant toute une suite d’outils permettant d'accélérer le développement d’une application Web.

### <ins>Objectif:</ins>

Savoir automatiser un environnement de développement et de production complet à l’aide d’un système d’exploitation GNU/Linux.


## Partie 1 (5 points) : Application

Créer une images permettant de lancer les différents services nécessaires à l’exploitation de l’activité de l’entreprise.

L’image permettra de lancer un serveur Web. Ce serveur Web héberge une application React permettant de communiquer avec le service Web JSONPlaceholder. Cette application sera exposée sur le port de votre choix afin d’être accessible par votre utilisateur.

L’objectif de cette application est de gérer les utilisateurs de la société. Il sera demandé de pouvoir :

- Consulter la liste des utilisateurs
- Consulter la liste des articles
- Consulter la liste des commentaires
- Faire le lien entre les différentes données


## Partie 2 (5 points) : Sauvegarde et récupération

Maintenant que l’application est disponible, vous devez créer un script Shell permettant de sauvegarder l’ensemble des fichiers sources de votre serveur Web hébergeant l’application React. Le script doit pouvoir :

- Synchroniser l’ensemble du code-source
- Accepter en paramètre une date au format ANNEE-MOIS-JOUR
- Accepter en paramètre un dossier dans lequel stocker la sauvegarde
- Demander tous les paramètres non-renseignés de manière interactive

Le script doit être lancé tous les jours à 3h30 du matin. Vous devez être capable de montrer que vous savez tester ce script à tout moment.


## Partie 3 (5 points) : Automatisation IDE

Vous devez automatiser l’installation d’un environnement de développement Web basé sur les outils suivants :

- Fish
- Tmux

À l’aide d’Ansible, vous devez être capable à tout moment de créer un conteneur et de le configurer à l’aide d’un Playbook permettant d’installer ou de réinstaller tout un environnement complet de développement avec les technologies citées ci-dessus.

Vous devez montrer un minimum de configuration et ajouter du style à l’aide des différents plugins, Fish et Tmux afin de rendre l’environnement plus agréable à utiliser pour vos développeurs.


### <ind>Bonus (5 points)</ins>

- Cluster Kubernetes ou Docker Swarm
- Code bien commenté
- Code uniquement en anglais (les commentaires en français)
- Aucune erreur à l’exécution du code
- Tout est fait sur base d’image Docker Alpine
