import haskellLogo from "../media/haskell.svg";
import jsLogo from "../media/js.svg";
import reactLogo from "../media/react.svg";
import pythonLogo from "../media/python.svg";
import javaLogo from "../media/java.svg";
import ocamlLogo from "../media/ocaml.svg";
import cplusplusLogo from "../media/c++.svg";
import mipsLogo from "../media/mips.svg";

export const projectsData = [
  {
    id: 1,
    name: "Street fighter",
    languages: ["Haskell"],
    source: "https://github.com/adanBougherara/Street-fighter",
    info: "Refonte d'un jeu de combat de type Street Fighter dans un style fonctionnel réalisé dans le cadre du master STL. Il est à noté que le jeu nécessite SDL 2 qui ne semble fonctionner que sous certaines versions de linux. Un rapport plus complet est également disponible avec le code source.",
    icons: [haskellLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 2,
    name: "Site personnel",
    languages: ["Javascript", "React"],
    source: "https://github.com/adanBougherara/Site-personnel",
    info: "Il s'agit du site sur lequel vous naviguez actuellement. Le code source est disponible sur mon Github.",
    icons: [jsLogo, reactLogo],
    authors: ["Adan Bougherara"]
  },

  {
    id: 3,
    name: "Gestionnaire de voeux",
    languages: ["Python"],
    source: "https://github.com/adanBougherara/Gestionnaire-de-voeux-UE",
    info: "Ce projet a été réalisé dans le cadre du master STL. Il s'agit d'un gestionnaire de voeux permettant d'affecter des unités d'enseignement aux étudiants du master en respectant diverses contraintes notamment celles liées aux emploi du temps. Nous avons utilisé le solveur de contraintes Gurobi pour mener ce projet. Plus de détails sont disponibles dans le rapport accompagnant le code source",
    icons: [pythonLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 4,
    name: "Compilateur d'un langage basique vers une mini-ZAM",
    languages: ["Java"],
    source: "https://github.com/adanBougherara/Compilation-mini-ZAM",
    info: "Le but de ce projet réalisé en première année du Master STL était de coder un compilateur prenant en entrée un programme source écrit dans un langage séquentiel assez simple. L'idée était ensuite de transformer ce programme en instructions interprétables par une mini-ZAM fournie pour l'occasion",
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 5,
    name: "Représentation de polynômes",
    languages: ["OCaml"],
    source: "https://github.com/adanBougherara/Representation-de-polynomes",
    info: "Le but du problème consiste à manipuler deux modèles de structure de données : l’une sous forme linéaire et l’autre arborescente. Des expérimentations sur ces structures ont ensuite été menées par Vivien Demeulenaere et moi-même. Nos conclusions sont disponibles dans le rapport accompagnant le code source.",
    icons: [ocamlLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 6,
    name: "Représentation de ROBDD",
    languages: ["Python"],
    source: "https://github.com/adanBougherara/ROBDD",
    info: "Lors de notre premier semestre de Master, il nous a été demandé de représenter des diagrammes de décision binaire (ou BDD pour Binary Decision Diagram en anglais) ainsi que leur version compressée (ROBDD). Vous trouverez ainsi des algorithmes de compression et de fusion. Plus de détails sont fournis dans le rapport se trouvant avec le code source.",
    icons: [pythonLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 7,
    name: "Optimisation de code MIPS",
    languages: ["C++", "MIPS"],
    source: "https://github.com/adanBougherara/Optimisation-code-MIPS",
    info: "Durant ma première année de Master, nous avons du réaliser un programme permettant d'optimiser du code MIPS à partir de bouts de code déjà existants. Il nous a donc fallu implanter divers algorithmes permettant entre autres de définir des blocs de base ou encore de renommer des variables selon leur vivacité.",
    icons: [cplusplusLogo, mipsLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 8,
    name: "Modélisation d'une ville intelligente à l'aide de BCM4Java",
    languages: ["Java"],
    source: "https://github.com/adanBougherara/Smart-city",
    info: "L’objectif de ce projet était d’implanter un prototype simplifié de système de gestion d’événements complexe pour une ville intelligente. Il a été réalisé avec l'outil BCM4Java, ayant une approche orientée composants et permettant entre autres une gestion du parallélisme et la mise en place d'un système réparti en masquant au développeur les appels RMI de Java.",
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },

  {
    id: 9,
    name: "Casse-Briques",
    languages: ["Java"],
    source: "https://github.com/adanBougherara/Casse-briques",
    info: <p>Projet de refonte du fameux jeu-vidéo <em>Casse-briques</em> réalisé dans le cadre
    de ma première année de Master à l'aide de la bibliothèque <em>JavaFX</em>. Un rapport est
    disponible avec le code source du projet</p>,
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
  {
    id: 10,
    name: "Résolution du problème de cercle minimun à l'aide de l’algorithme Welzl",
    languages: ["Java"],
    source: "https://github.com/adanBougherara/Welzl",
    info: "Mise en place de l'algorithme de Welzl dans le but de résoudre un problème de cercle minimum. Deux versions de l'algorithme sont disponibles : l'une récursive et l'autre itérative. Ces deux versions ont fait l'objet de comparaisons avec un algorithme naïf. Ce projet fut réalisé lors de ma première année de Master.",
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
  {
    id: 11,
    name: "Arbre de Steiner dans un graphe avec et sans restriction",
    languages: ["Java"],
    source: "https://github.com/adanBougherara/Steiner",
    info: "Etant donné un graphe G = (V, E) et un sous ensemble S ⊆ V de sommets, le probleme de l’arbre de Steiner couvrant S consiste a calculer un sous graphe de G qui est un arbre et qui passe par tous les points de S, tel que la longueur totale des arêtes de l’arbre est la plus petite possible. La version avec budget consiste à fixer une limite au poids total des arêtes. Il faudra alors passer par le plus de sommets possible tout en respectant cette limite. Ce projet fut réalisé lors de ma première année de Master.",
    icons: [javaLogo],
    authors: ["Adan Bougherara &", "Vivien Demeulenaere"]
  },
];

export const authorsText = {
      singular: "Auteur",
      plural: "Auteurs"
    }