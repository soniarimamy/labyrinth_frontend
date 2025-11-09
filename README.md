# Labyrinth Frontend (Flask)

## Objectif

Ce projet a pour but de créer une **interface web interactive** en **Flask** permettant de jouer au **Labyrinthe virtuel** développé avec le backend FastAPI.  
Il permet :
- D’**afficher une grille de jeu (5x5)**.
- De **contrôler les déplacements du joueur** avec des boutons.
- De **communiquer avec le backend Labyrinth API** via des requêtes HTTP (`/start`, `/map`, `/move`).
- D’offrir une expérience de jeu simple, intuitive et responsive grâce à **Bootstrap**.

Ce frontend constitue une base légère pour tout projet Flask interactif couplé à un backend RESTful.

---

## Prérequis

Avant de lancer le projet, assurez-vous d’avoir installé sur votre machine :
- **Python 3.11+**
- **Docker** et **Docker Compose**
- **Git**
- **Navigateur moderne** (Chrome, Firefox, Edge…)

---

## ⚙Fonctionnalités principales

| Composant | Description |
|------------|-------------|
| `index.html` | Interface principale affichant la grille et les contrôles |
| `index.js` | Gère la logique du jeu (mouvements, communication avec l’API) |
| `Flask` | Sert l’application web et gère les fichiers statiques |
| `Bootstrap` | Gère la mise en page et le style des boutons |

---

## Étapes de lancement

### 1️ - Cloner le dépôt
```
git clone https://github.com/soniarimamy/labyrinth_frontend.git
```

### 2️ - Se déplacer dans le dossier du projet
```
cd labyrinth_frontend
```

### 3️ - Lancer l’application avec Docker
```
docker-compose up --build -d
```
Une fois le conteneur lancé, l’application sera accessible à l’adresse :
http://127.0.0.1:8002

### N.B:
Assurez-vous que le backend Labyrinth API est en cours d’exécution sur le port 8000, car le frontend communique avec lui via http://localhost:8000.

## Test des fonctionnalités
- Ouvrez votre navigateur sur http://127.0.0.1:8002.
- Cliquez sur Start pour démarrer une nouvelle partie.
- Utilisez les boutons suivants pour déplacer le joueur sur la grille: Up / Down / Left / Right

### N.B: Le jeu se termine :
lorsque vous atteignez la maison (victoire) lorsque vous tombez dans un piège

## Docker Hub
L’image Docker officielle du projet est disponible sur Docker Hub :
```
docker pull rochel05/labyrinth_frontend:latest
```
Vous pouvez l’utiliser directement sans builder localement.

## Architecture du projet
```
labyrinth_frontend/
├── docker-compose.yml
├── Dockerfile
├── LICENSE
├── main.py
├── requirements.txt
├── static/
│   ├── img/
│   └── js/
│       ├── bootstrap.bundle.js
│       ├── bootstrap.bundle.min.js
│       ├── bootstrap.esm.js
│       ├── bootstrap.esm.min.js
│       ├── bootstrap.js
│       ├── bootstrap.min.js
│       └── index.js
└── templates/
    └── index.html
 ```

## Licence
Ce projet est distribué sous la licence MIT.
Vous êtes libre de l’utiliser, le modifier et le redistribuer, à condition de mentionner l’auteur original.

## Auteur
- Nom : Rochel Soniarimamy
- Email : rochel.soniarimamy@gmail.com
- Docker Hub : rochel05
- GitHub : https://github.com/soniarimamy/

## Contact
Pour toute question, suggestion ou contribution, contactez-moi :
- Email : rochel.soniarimamy@gmail.com
- Téléphone : +261 34 92 516 46

