import React from "react";

import "./accueil.css";
import GrappesOrphelines from "../grappes-orphelines/GrappesOrphelines";
import IdeesOrphelines from "../idees-orphelines/IdeesOrphelines";
import Grappe from "../grappe/Grappe";
import BarLeft from "../bar-left/BarLeft";

class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      grappe: [
        {
          id: 574,
          nom: "wiki",
          description: "le wiki de l'histoire",
          grappeParent: null,
          grappeEnfants: [
            {
              id: 576,
              nom: "otherside",
              description:
                "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 642,
                  nom: "nom",
                  description: "regroupement les noms ",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 644,
                      nom: "les noms",
                      description:
                        "les noms sont la seconde partie d'une identité d'une personne",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 44,
                  nom: "mode de connexion",
                  description:
                    "un mode de connexion est une façon de passer d'un monde à un autre",
                  grappeParent: null,
                  grappeEnfants: null,
                  type: null,
                  idees: [
                    {
                      id: 236,
                      nom: "connexion par la porte d'or",
                      description:
                        "il y a la légende de la porte d'or où sa localisation reste un mystère et que beaucoup cherche mais en fait, il s'agit d'une porte intime que peut ouvrir quelqu'un qui atteint une certaine connaissance du fonctionnement de l'univers",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 237,
                      nom: "connexion par des voyages dans le temps",
                      description:
                        "sans aucune raison, parfois l'esprit est comme aspiré dans ces passages dimensionnels qui se crée de façon aléatoire dans le monde",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 238,
                      nom: "connexion par les rêves",
                      description:
                        "pendant la période de sommeil, notre corps est plus sensible à l'éther et dont permet de passer dans un autre monde",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 239,
                      nom: "connexion en frôlant la mort",
                      description:
                        "parfois en frôlant la mort, le corps et l'esprit résiste et trouve par l'ether un échappatoire, qui crée une sorte de coma où l'on voit une lumière blanche qui mène à un autre monde",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 240,
                      nom: "connexion par trou de ver",
                      description:
                        "des machines permets de créer des sortes de passages dymensionnelles",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 241,
                      nom: "connexion par la méditation",
                      description:
                        "la méditation permet simplement de capter les flux éthériques sans artifice ni aides",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 242,
                      nom: "connexion par les drogues",
                      description:
                        "la prise de drogues permet une meilleure perception des flux éthérique comme si le fait d'être sous drogue permettait de voir réellement les flux ",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 243,
                      nom: "connexion par les cheveux",
                      description:
                        "une injection dans la boite crânienne permet de mieux capter les flux éthérique comme si les cheveux agissaient tels des fils de connexion",
                      organisation: null,
                      grappes: []
                    }
                  ]
                }
              ],
              type: null,
              idees: []
            },
            {
              id: 580,
              nom: "modèle",
              description:
                "le projet a pour but de lister des modèles genre, des références",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 482,
                  nom: "type de boss",
                  description: "il y a différent type de méchant",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 205,
                      nom: "cosmique",
                      description:
                        "faire le mal est la seule chose qu'il sait faire, la vie et le monde n'a aucune importance",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 206,
                      nom: "psychopathe",
                      description:
                        "C’est la brute, l’assassin ou – plus spectaculaire – le tueur en série,\r\nfigure contemporaine du croque-mitaine, popularisée et exploitée\r\n(jusqu'à l'excès?) au cinéma et dans la littérature",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 207,
                      nom: "bête et méchant",
                      description:
                        "Le premier est plus ridicule qu'inquiétant, plus maladroit que dangereux\r\n(ses manigances ont tendance à se retourner contre lui), le second est\r\nsouvent un gentil qui a mal tourné.",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 208,
                      nom: "traitre",
                      description:
                        "celui qui trahi par ambition et qui attend le meilleur moment pour le faire",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 209,
                      nom: "seigneur maléfique",
                      description:
                        "Habité par la volonté de puissance, il rêve de conquérir la terre voire\r\nl'univers.",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 210,
                      nom: " savant fou",
                      description:
                        "Mégalomane et dévoré d’ambition, il se sert de ses inventions à des fins\r\ncriminelles. \r\n",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 211,
                      nom: "génie du mal",
                      description:
                        "Manipulateur et sans scrupules, il est doté d'une grande intelligence\r\nqu’il met au service de machinations criminelles complexes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 491,
                  nom: "type personnage",
                  description:
                    "les types de personnages sont des archétype de personnages",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 46,
                      nom: "sensei",
                      description: "un sensei est un professeur",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 641,
                          nom: "type sensei",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 309,
                              nom: "le sensei pervers",
                              description:
                                "le sensei pervers est un personnage qui ne recherche que le sexe opposé",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 310,
                              nom: "le sensei dingue pyschopathe",
                              description:
                                "le sensei est un peu hors norme, dingue, voir psychopathe",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 311,
                              nom: "le sensei qui ne semble pas puissant",
                              description:
                                "le sensei qui semble tout frêle mais en fait, c'est un monstre",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 312,
                              nom: "le sensei drôle",
                              description:
                                "le sensei qui prend tout à la rigolade et qui est particulièrement drole",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 313,
                              nom: "le sensei comlètement fou",
                              description:
                                "un sensei qui fou dans sa tête, déjanté",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 314,
                              nom: "le sensei senile sans mémoire",
                              description:
                                "le sensei tellement vieu qu'il perd la memoire comme un poisson rouge",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 315,
                              nom: "le sensei feignant et menteur",
                              description:
                                "le sensei qui entraine en faisant bosser pour lui, il hesite pas à mentir pour arriver à ses faim",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 316,
                              nom: "le sensei grobills",
                              description: "le sensei qui est over balèze ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 317,
                              nom: "le sensei mega sévère",
                              description:
                                "le sensei où son enseignement ressemble plus à un esclave qu'autre chose",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 318,
                              nom: "le sensei alcoolique",
                              description:
                                "le sensei qui ne fait que picoler à longeur de temps",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 319,
                              nom: "le sensei pas drôle",
                              description:
                                "le sensei qui essai d'être drôle mais qui l'est pas",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 320,
                              nom: "le sensei coach",
                              description:
                                "le sensei est faible mais il sait te coacher",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 47,
                      nom: "rival",
                      description: "un rival est un rival",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 48,
                      nom: "ami",
                      description: "un ami est un un proche",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 49,
                      nom: "ame soeur",
                      description:
                        "une ame soeur est une personne avec qui ont a une relation très particulière",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 50,
                      nom: "ennemi",
                      description:
                        "un ennemi est un homme qui a des ambitions opposés",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 51,
                      nom: "amour",
                      description:
                        "un amour est un personne avec qui tu as une relation",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 52,
                      nom: "acolyte",
                      description:
                        "un acolyte est un homme avec qui tu as fait toute ta vie",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 53,
                      nom: "adorateur",
                      description:
                        "un adorateur est une personne qui a une foi total en toi au point de l’idolâtrie",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 198,
                      nom: "génie inné",
                      description: "le génie où tout lui semble inné",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 199,
                      nom: "génie du travail",
                      description:
                        "le mec qui a besoin de travaillé mais en bossant il sublime la chose",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 533,
                  nom: "catégorie de personne",
                  description: null,
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 406,
                      nom: "éphémère",
                      description: "qui dure une seule journée ou 7 jours",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 620,
                      nom: "petite enfance",
                      description: "avant 7 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 400,
                      nom: "enfance",
                      description: "de 7 à 14 ans ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 401,
                      nom: "adolescence",
                      description: "de 14 à 21 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 402,
                      nom: "adulescence",
                      description: "de 21 à 28 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 403,
                      nom: "adulte mineur",
                      description: "de 28 à 35 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 404,
                      nom: "adulte majeur",
                      description: "de 35 à 42 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 405,
                      nom: "vieilesse",
                      description: "après 42 ans",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 579,
                  nom: "modèle manga",
                  description: "modèle tiré des mangas",
                  grappeParent: null,
                  grappeEnfants: null,
                  type: null,
                  idees: []
                },
                {
                  id: 588,
                  nom: "modèle film",
                  description: "modèle tiré des films",
                  grappeParent: null,
                  grappeEnfants: null,
                  type: null,
                  idees: []
                },
                {
                  id: 589,
                  nom: "modèle série",
                  description: "modèle tiré des séries",
                  grappeParent: null,
                  grappeEnfants: null,
                  type: null,
                  idees: []
                },
                {
                  id: 593,
                  nom: "charact design",
                  description: "charact design",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 85,
                      nom: "taille",
                      description: "la taille ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 103,
                      nom: "poids",
                      description: "le poids",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 104,
                      nom: "la couleur des cheveux",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 105,
                      nom: "couleur des yeux",
                      description: "la couleur des yeux",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 106,
                      nom: "le nez",
                      description: "la forme du nez",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 107,
                      nom: "visage",
                      description: "la forme du visage",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 108,
                      nom: "oreilles",
                      description: "la forme des oreilles",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 109,
                      nom: "les yeux",
                      description: "la forme des yeux",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 110,
                      nom: "la couleur de peau",
                      description: "la couleur de peau",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 111,
                      nom: "torse/poitrine",
                      description: "le forme du torse et le type poitrine",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 112,
                      nom: "ventre",
                      description: "le forme du ventre",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 113,
                      nom: "bras",
                      description: "la forme de bras",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 114,
                      nom: "langue",
                      description: "la forme de la langue",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 115,
                      nom: "mains",
                      description: "la forme des mains",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 116,
                      nom: "jambes",
                      description: "la forme des jambes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 117,
                      nom: "pieds",
                      description: "la forme des pieds",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 118,
                      nom: "ailes",
                      description: "la forme des ailes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 119,
                      nom: "queue",
                      description: "la forme de la queue",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 120,
                      nom: "cornes",
                      description: "la forme des cornes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 121,
                      nom: "dents",
                      description: "la forme des dents",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 122,
                      nom: "griffes",
                      description: "la forme des griffes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 123,
                      nom: "épines",
                      description: "la forme des épines",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 124,
                      nom: "carapace",
                      description: "la forme de la carapace",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 125,
                      nom: "peau",
                      description: "composition de la peau",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 126,
                      nom: "dans les airs",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 127,
                      nom: "sur terre",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 128,
                      nom: "sur mer",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 129,
                      nom: "dans l'eau",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 130,
                      nom: "sous terre",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 131,
                      nom: "sur sable",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 132,
                      nom: "sous le sable",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 133,
                      nom: "dans un trou noire",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 200,
                      nom: "personnage neutre",
                      description:
                        "personnage qui na pas choisit de camp, il est parfois gentil et parfois méchant ou possède un coté sombre",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 201,
                      nom: "personnage influençable",
                      description:
                        "un personnage influençable est un personnage qui peut prendre beaucoup de persona différentes en fonction de l'influence présente",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 202,
                      nom: "rebelle",
                      description: "le rebelle",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 203,
                      nom: "le dark",
                      description:
                        "le personnage se dit du coté du bien mais il démontre par ses actes qui oeuvre plutôt du coté du mal",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 417,
                      nom: "taille normal",
                      description:
                        "la taille normal est comprise entre 1m40 et 2m10",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 418,
                      nom: "taille des géants",
                      description:
                        "la taille la plus grande , dépassant les 7 mètres de haut",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 419,
                      nom: "taille des très petits",
                      description: "la taille la plus petit, inférieur à 70 cm",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 420,
                      nom: "taille des grands",
                      description:
                        "la taille des grands est comprise entre 2m10 et 3m50",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 421,
                      nom: "taille des petits",
                      description:
                        "la taille des petits est comprise entre 0,70 et 1m40",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 422,
                      nom: "tailles des très grands",
                      description:
                        "la taille des très grand est comprise entre 3m50 et 4,90m",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 423,
                      nom: "taille des petits géants",
                      description:
                        "la taille des petits géants est comprise entre 4,90m et 7m",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 490,
                      nom: "caractéristique physique",
                      description: "cela défini l'apparence de quelqu'un",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 551,
                      nom: "tailles",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 552,
                      nom: "couleur",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 424,
                          nom: "couleurs neutre",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 425,
                          nom: "couleur opposé",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 426,
                          nom: "couleurs primaires",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 427,
                          nom: "couleurs secondaire",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                }
              ],
              type: null,
              idees: []
            },
            {
              id: 581,
              nom: "scenario",
              description: "regroupe les différents scenario",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 582,
                  nom: "book",
                  description: "le livre principal",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 529,
                      nom: "Blank Book",
                      description:
                        "bouquin qui relate l'histoire avant d'être seraphins et sephiroths",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 367,
                          nom: "Tome 1",
                          description: "introduction - rencontre x2",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 375,
                          nom: "Tome 2",
                          description: "introduction - rencontre filles - mecs",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 376,
                          nom: "Tome 3",
                          description: "tournoi noobs",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 377,
                          nom: "Tome 4",
                          description: "guild rival",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 378,
                          nom: "Tome 5",
                          description: "guild emperium",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 379,
                          nom: "Tome 6",
                          description: "guilde noire",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 380,
                          nom: "Tome 7",
                          description: "outro - départ aventure",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 526,
                      nom: "Black Book",
                      description:
                        "bouquin qui relate l'histoire des séphiroths",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 374,
                          nom: "Tome 1",
                          description: "projet natal",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 449,
                              nom: "Pride - projet natal - Ténèbres",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 339,
                          nom: "Tome 2",
                          description: "game of throne",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 452,
                              nom: "Sloth - Europe - révolutionnaire",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 337,
                          nom: "Tome 3",
                          description: "corruption de la justice",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 454,
                              nom: "Wrath - Foudre - Corruption",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 328,
                          nom: "Tome 4",
                          description: "nolife",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 456,
                              nom: "Gluttonny - URSS - realiste",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 336,
                          nom: "Tome 5",
                          description: "religion et extrémisme",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 458,
                              nom: "Envy - Feu - extremisme",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 333,
                          nom: "Tome 6",
                          description: "mob ultime",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 459,
                              nom: "Greed - île Indépendante - Mob ultime",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 334,
                          nom: "Tome 7",
                          description: "escalavage",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 461,
                              nom: "Lust - Terre - Esclavagisme",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 527,
                      nom: "White Book",
                      description:
                        "bouquin qui relate l'histoire des séraphins",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 332,
                          nom: "Tome 1",
                          description: "la mafia",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 450,
                              nom: "Meiko - mafia - Asie",
                              description: "tome blanc",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 330,
                          nom: "Tome 2",
                          description: "le mob clan",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 451,
                              nom: "Freyr - Eau - clan mob ",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 331,
                          nom: "Tome 3",
                          description: "religion et secte",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 453,
                              nom: "Mayachiru - Afrique - secte",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 335,
                          nom: "Tome 4",
                          description: "realiste",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 455,
                              nom: "Ishtar - Glace - Nolife",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 329,
                          nom: "Tome 5",
                          description: "justice vs criminel",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 457,
                              nom: "Lucifuge - Amérique Sud - gangs",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 326,
                          nom: "Tome 6",
                          description: "royaliste vs anarchiste",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 460,
                              nom: "Rainer - Vent - Anarchiste",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 327,
                          nom: "Tome 7",
                          description: "impérialisme",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 462,
                              nom: "Him - Amérique Nord - Impérialisme",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 528,
                      nom: "Gray Book",
                      description:
                        "bouquin qui relate l'histoire commune des séraphins et séhiroths",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 338,
                          nom: "Tome 1",
                          description: "faire de l'Xp",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 368,
                          nom: "Tome 2",
                          description: "faire une quete",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 369,
                          nom: "Tome 3",
                          description: "crafter",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 370,
                          nom: "Tome 4",
                          description: "ellipse 2 ans",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 371,
                          nom: "Tome 5",
                          description: "job",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 372,
                          nom: "Tome 6",
                          description: "ellipse 7 ans",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 373,
                          nom: "Tome 7",
                          description: "l'après apocalypse",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 509,
                  nom: "Hors séries",
                  description:
                    "ce sont les hors séries qui sont externes à l'histoire",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 217,
                      nom: "le voyage temporel",
                      description:
                        "le hors série qui relate le voyage temporel",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 218,
                      nom: "la dimension parallèl",
                      description:
                        "le hors série qui relate de la dimension parallèle",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 219,
                      nom: "l'intelligence artificielle",
                      description:
                        "le hors série qui relate l'histoire avec l'intelligence artificielle",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 583,
                  nom: "miniBook",
                  description:
                    "les mini books sont les petites histoires qui enrichissent l'univers ",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 483,
                      nom: "histoire des Chefs",
                      description:
                        "ce sont les histoires sur les chefs du monde",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 216,
                          nom: "chef de gouvernement",
                          description:
                            "ce sont les histoires des chefs de gouvernement",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 492,
                      nom: "histoire des peuples",
                      description:
                        "ce sont les histoires sur les différents peuples ",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 33,
                          nom: "histoires des peuples du jour",
                          description: "les histoires des peuples du jour",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 230,
                              nom: "histoire des peuples de l'asie",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 231,
                              nom:
                                "histoire des peuples des iles indépendantes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 232,
                              nom: "histoire des peuples de l'afrique",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 233,
                              nom: "histoire des peuples de l'URSS",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 234,
                              nom: "histoire des peuples de l'amerique du sud",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 235,
                              nom: "histoire des peuples de l'europe",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 236,
                              nom: "histoire des peuples de l'amérique du nord",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 584,
                          nom: "histoires des peuples de la nuit",
                          description: "les histoires des peuples de la nuit",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 222,
                              nom: "histoire des peuples de la terre",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 223,
                              nom: "histoire des peuples de l'eau",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 224,
                              nom: "histoire des peuples du feu",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 225,
                              nom: "histoire des peuples de la glace",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 226,
                              nom: "histoire des peuples du vent",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 227,
                              nom: "histoire des peuples des ténèbres",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 228,
                              nom: "histoire des peuples du sacre",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 229,
                              nom: "histoire des peuples de la foudre",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 496,
                      nom: "histoire des stages",
                      description:
                        "ce sont les histoires sur les différents stages",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 237,
                          nom: "histoire du stage de la terre",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 238,
                          nom: "histoire du stage de l'eau",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 239,
                          nom: "histoire du stage du feu",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 240,
                          nom: "histoire du stage de la glace",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 241,
                          nom: "histoire du stage de la foudre",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 242,
                          nom: "histoire du stage du vent",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 243,
                          nom: "histoire du stage des ténèbres et du sacre",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 508,
                      nom: "histoires des continents",
                      description:
                        "ce sont les histoires des différents continent",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 244,
                          nom: "histoire du continent de l'asie",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 245,
                          nom: "histoire du continent des iles indépendantes",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 246,
                          nom: "histoire du continent de l'afrique",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 247,
                          nom: "histoire du continent de l'URSS",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 248,
                          nom: "histoire du continent de l'amerique du sud",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 249,
                          nom: "histoire du continent de l'europe",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 250,
                          nom: "histoire du continent de l'amerique du nord",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 510,
                      nom: "background",
                      description:
                        "ce sont les histoires qui se passent avant l'histoire, centré sur un personnage précis",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 214,
                          nom: "birth",
                          description:
                            "ce sont les backgrounds de la naissance de personnage",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 215,
                          nom: "enfance",
                          description:
                            "ce sont les backgounds de l'enfance de personnage",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 220,
                          nom: "job",
                          description:
                            "ce sont les backgounds des différents jobs pratiqué par un personnage",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 221,
                          nom: "activité",
                          description:
                            "ce sont les backgrounds des différentes activités pratiqué par un personnage",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 511,
                      nom: "préquels",
                      description:
                        "les préquels sont les histoires qui se sont passés avant , il ne sont pas centré sur un personne comme les backgrounds",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                }
              ],
              type: null,
              idees: []
            },
            {
              id: 585,
              nom: "world",
              description: "world est la partie du projet qui gère l'univers",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 54,
                  nom: "monde",
                  description: "un monde represente une dimension",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 595,
                      nom: "géographie",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 3,
                          nom: "pays",
                          description: "un pays represente une nation",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 3,
                              nom: "Asie",
                              description: "l'Asie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 4,
                              nom: "îles indépendantes",
                              description: "les îles indépendantes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 5,
                              nom: "Afrique",
                              description: "l'afrique",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 6,
                              nom: "Urss",
                              description: "l'U.R.S.S",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 7,
                              nom: "Amerique Sud",
                              description: "l'amérique du sud",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 8,
                              nom: "Europe",
                              description: "l'europe",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 9,
                              nom: "Amerique nord",
                              description: "l'amérique du nord",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 10,
                              nom: "Terre",
                              description: "la Terre",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 11,
                              nom: "Eau",
                              description: "l'Eau",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 12,
                              nom: "Feu",
                              description: "le Feu",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 13,
                              nom: "Glace",
                              description: "La Glace",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 14,
                              nom: "Foudre",
                              description: "La Foudre",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 15,
                              nom: "Vent",
                              description: "le vent",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 16,
                              nom: "Ténèbre",
                              description: "les ténèbres",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 4,
                          nom: "region",
                          description:
                            "une region représente une partie d'un pays",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 45,
                              nom: "Egypte",
                              description:
                                "la region où était l'ancienne égypte",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 46,
                              nom: "Algérie",
                              description:
                                "la region où était l'ancienne algérie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 47,
                              nom: "Congo",
                              description: "la region où était le congo",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 48,
                              nom: "Arabie saoudite",
                              description:
                                "la region où était l'arabie saoudite",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 49,
                              nom: "Nigéria",
                              description: "la region où était le nigéria",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 50,
                              nom: "Ethiopie",
                              description: "la region où était l'éthiopie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 51,
                              nom: "Botswana",
                              description: "la region où était le botswana",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 52,
                              nom: "Old York",
                              description:
                                "la region où était l'ancienne New York",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 53,
                              nom: "Los Diablos",
                              description:
                                "la region où était l'ancienne ville de los angeles",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 54,
                              nom: "Las vegas",
                              description:
                                "la region où était l'ancienne ville de las vegas",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 55,
                              nom: "Montreal",
                              description:
                                "la region où est la ville de montreal",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 56,
                              nom: "Québec",
                              description: "la region du québéc",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 57,
                              nom: "Toronto",
                              description:
                                "la region où est la ville de toronto",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 58,
                              nom: "Miami",
                              description: "la region où est la ville de Miami",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 59,
                              nom: "Tour de paris",
                              description: "la tour où était la france",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 60,
                              nom: "Tour de berlin",
                              description: "la tour où était l'allemagne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 61,
                              nom: "Tour de londres",
                              description:
                                "la tour où était la grande bretagne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 62,
                              nom: "Tour de rome",
                              description: "la tour où était l'italie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 63,
                              nom: "Tour de madrid",
                              description: "la tour où était l'espagne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 64,
                              nom: "Tour de stockholm",
                              description:
                                "la tour où était la suède et la norvège",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 65,
                              nom: "Australie",
                              description: "l'île de l'australie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 66,
                              nom: "La réunion",
                              description: "l'île de la réunion",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 67,
                              nom: "Japon",
                              description: "l'île de du japon",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 68,
                              nom: "Madagascar",
                              description: "l'île de de madagascar",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 69,
                              nom: "Jamaïque",
                              description: "l'île de de la jamaïque",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 70,
                              nom: "Polynésie",
                              description: "c'est un regroupement d'îles",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 71,
                              nom: "Cuba",
                              description: "l'île de cuba",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 72,
                              nom: "Stalingrad",
                              description:
                                "la région où était la ville de stanlingrad autrefois",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 73,
                              nom: "SIbérie",
                              description: "la région sibérienne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 74,
                              nom: "Roumanie",
                              description: "la région où était la roumanie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 75,
                              nom: "Pologne",
                              description: "la région où était la Pologne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 76,
                              nom: "Bulgarie",
                              description: "la région où était la bulgarie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 77,
                              nom: "Leningrad",
                              description:
                                "région de là où était Saint-Pétersbourg",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 78,
                              nom: "poutinegrad",
                              description:
                                "région où on érigea une ville en hommage de poutine",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 79,
                              nom: "pekin",
                              description: "région de pekin",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 80,
                              nom: "Shangaï",
                              description: "région de shangaï",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 81,
                              nom: "Bombay",
                              description: "région de bombay",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 82,
                              nom: "Dehli",
                              description:
                                "région où était la ville de new dehli",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 83,
                              nom: "Calcutta",
                              description: "région de calcutta",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 84,
                              nom: "Seoul",
                              description: "région de la corée",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 85,
                              nom: "Jakarta",
                              description: "région de la ville de jarkata",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 86,
                              nom: "Favelas de rio",
                              description: "région de rio de janeiro",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 87,
                              nom: "Favelas de medellin",
                              description: "région de medellin",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 88,
                              nom: "Favelas de mexico",
                              description: "région de la ville de mexico",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 89,
                              nom: "Favelas de lima",
                              description: "région de la ville de lima",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 90,
                              nom: "Favelas de santiago",
                              description: "région de la ville de santiago",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 91,
                              nom: "Favelas de caracas",
                              description: "région de la ville de caracas",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 92,
                              nom: "Favelas de buenos aires",
                              description: "région de la ville de buenos aires",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 93,
                              nom: "Tour de portugal",
                              description:
                                "la tour où était le portugal, actuellement détruite",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 101,
                              nom: "Régions des noobs",
                              description:
                                "région où atterrissent tous les nouveaux arrivants",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 102,
                              nom: "Régions des fôrets",
                              description:
                                "région totalement boisées dans une forêt parfois vivantes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 103,
                              nom: "Régions des montagnes",
                              description:
                                "région pleine de montagne et chaines de montagnes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 104,
                              nom: "Régions des plaines",
                              description:
                                "région très calmes où les plaines s'étendent à perte de vue",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 105,
                              nom: "Régions des ravins",
                              description:
                                "région où le sol se craque et forme d'énorme ravin",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 106,
                              nom: "Régions moyen-âgeux",
                              description:
                                "région où on a l'impression d'être au moyen âge avec ses chateaux, ses chevaliers et ses cheveaux",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 107,
                              nom: "Régions dimension double",
                              description:
                                "région où l'on devient 2 fois plus petit, donc le monde nous apparaît 2 fois plus grand",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 108,
                              nom: "Régions fonds marins",
                              description:
                                "régions situées dans les prodofondeurs des océans",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 109,
                              nom: "Régions plages",
                              description:
                                "régions où le sable chaud et la mer paradisiaque sont à perte de vue",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 110,
                              nom: "Régions pluvieuses",
                              description:
                                "régions où la pluie ne cesse de tomber rendant tout humide",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 111,
                              nom: "Régions des rivières",
                              description:
                                "régions possèdant un reseau complet de rivières , où la terre est par contre inhospitalière",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 112,
                              nom: "Régions des océans",
                              description:
                                "régions où il n'y a pas une seule parcelle de terre, ni même un îlot",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 113,
                              nom: "Régions des marécages",
                              description:
                                "régions marécageuses où il n'y a pas un seul coins sans un bon marécage",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 114,
                              nom: "Régions des îles",
                              description:
                                "régions où il y a un archipel d'île avec une ville dans chaucun d'elle où tout tourne autour du port",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 115,
                              nom: "Régions du désert",
                              description:
                                "régions où c'est le désert à perte de vue",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 116,
                              nom: "Régions des montagnes de sables",
                              description:
                                "régions montagneuses où les montagnes ne sont pas de pierre mais de sable",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 117,
                              nom: "Régions des oasis",
                              description:
                                "régions plutôt agreable par rapport au désert où il y a de l'eau et la fraîcheur",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 118,
                              nom: "Régions arides",
                              description:
                                "régions où la terre est arides, où rien ne pousse, le sol est crackelé",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 119,
                              nom: "Régions sous le sable",
                              description:
                                "régions inhôpitalière où les gens se réfugient sous le sable, dans des galeries sableuses",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 120,
                              nom: "Régions pierreafeu",
                              description:
                                "région où on sculpte et travaille la pierre et le sable comme personne",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 121,
                              nom: "Régions des pyramides",
                              description:
                                "région où sont érigés de grandes pyramides en guise de ville",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 122,
                              nom: "Régions des montagnes de glace",
                              description:
                                "région montagneuse où tout est glacé ou enneigé",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 123,
                              nom: "Régions de la banquise",
                              description:
                                "région sur la glace, où tout flotte sur de la glace",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 124,
                              nom: "Régions des plaines enneigées",
                              description:
                                "région où il fait bon vivre et où la neige est juste à niveau pour être sympas",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 125,
                              nom: "Régions des cavernes",
                              description: "région pleines de cavernes glacés",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 126,
                              nom: "Régions de noël",
                              description:
                                "région où l'ambiance et les décorations sont celles de noël",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 127,
                              nom: "Régions des froids extrêmes",
                              description:
                                "région où la temperature est si froide que l'être humain classique n'est pas sensé y survivre sans disposition éthérique",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 128,
                              nom: "Régions sous la neige",
                              description:
                                "région où les gens vivent sous la neige, dans des galeries de neige à l'image des galeries des sables",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 129,
                              nom: "Régions des éclairs",
                              description:
                                "région sous une pluie d'éclair perpétuel",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 130,
                              nom: "Régions des décharges",
                              description:
                                "région qui ressemble à une immense décharge où des milliards d'objets en tout genre forme les villes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 131,
                              nom: "Régions futuristes",
                              description:
                                "région où la technologie et la magie fusionnent pour donner un environnement futuriste où tout a 30 ans d'avance sur le reste des autres régions des mondes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 132,
                              nom: "Régions steam",
                              description:
                                "région où la technologie a pris un autre virage, celui du style steam punk",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 133,
                              nom: "Régions de la magie",
                              description:
                                "région où tout est fait avec de la magie, exit la technologie, c'est interdit",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 134,
                              nom: "Régions robotisé",
                              description:
                                "région où tout est informatisé et issue de la robotique",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 135,
                              nom: "Régions ecolo",
                              description:
                                "région où tout est avec des énergies renouvellables comme l'énergie éoliennes, solaires, etc...",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 136,
                              nom: "Régions nuage",
                              description:
                                "région composé de nuages solide, où on peut marcher et contruire dessus",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 137,
                              nom: "Régions rocher volant",
                              description:
                                "région où flottent des rochers , comme s'il était en suspension dans l'air",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 138,
                              nom: "Régions bulles",
                              description:
                                "région où tout les choses flottent avec des bulles, les bulles étant plus solide que de vrais bulles",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 139,
                              nom: "Régions inversés",
                              description:
                                "région où la gravité est inversée, on vit la tête en bas",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 140,
                              nom: "Régions des bateaux volants",
                              description:
                                "région où naviguent des bateaux volants formants des cités volantes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 141,
                              nom: "Régions des cités volantes",
                              description:
                                "région où des cités géantes flottent dans les airs grâce à la magie et la technologie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 142,
                              nom: "Régions des dragons",
                              description:
                                "région très dangereuse où des dragons ont établis leur maison, portant sur leurs dos, des cités",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 143,
                              nom: "Régions des trous noirs",
                              description:
                                "région où aucune lumière ne passe, le noir absolu",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 144,
                              nom: "Régions du cauchemard",
                              description:
                                "région totalement cauchemardesque où l'horreur est quotidien",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 145,
                              nom: "Régions maudites",
                              description:
                                "région où pleuvent les malédictions",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 146,
                              nom: "Régions halloween",
                              description:
                                "région où on a l'impression d'être perpétuellement en période d'halloween",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 147,
                              nom: "Régions ghetto",
                              description:
                                "région détruite où tout semble ravagé",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 148,
                              nom: "Régions empoisonnées",
                              description:
                                "région où tout semble empoisonné, impossible à accéder pour le commun des mortels",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 149,
                              nom: "Régions enfer",
                              description:
                                "région qui ressemble à l'enfer, le coin le plus dangereux de tous",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 493,
                          nom: "type d'environnement",
                          description: "il y a différents type d'environnement",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 32,
                          nom: "ville",
                          description:
                            "une ville est un rassemblement important de vivant ",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 31,
                          nom: "lieu",
                          description:
                            "un lieu est le niveau le plus bas sur la précision géographique",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 577,
                  nom: "religion",
                  description: "gestion de la partie religion",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 27,
                      nom: "divinité",
                      description:
                        "une divinité est le dieu qui représente la religion",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 289,
                          nom: "dieu",
                          description: "le dieu représente le bien",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 290,
                          nom: "diable",
                          description: "le diable représente le mal",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 291,
                          nom: "phoenix du nord",
                          description: "le phoenix du nord",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 292,
                          nom: "phoenix du sud",
                          description: "le phoenix du sud",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 293,
                          nom: "phoenix de l'ouest",
                          description: "le phoenix de l'ouest",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 294,
                          nom: "phoenix de l'est",
                          description: "le phoenix de l'est",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 28,
                      nom: "precepte",
                      description:
                        "une précepte est un loi dicté par une religion",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 29,
                      nom: "chef religion",
                      description:
                        "un chef religieux est comme un représentant de dieu",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 30,
                      nom: "messie",
                      description:
                        "le messie est considéré comme la réincarnation ou son plus fidèle serviteur",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 463,
                      nom: "les cavaliers de l'apocalypse",
                      description:
                        "les cavaliers de l'apocalypse apporte la destruction d'un monde",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 464,
                      nom: "les cavaliers de la genèse",
                      description:
                        "les cavaliers de la genèse apporte la création d'un monde",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 465,
                      nom: "les rois mages blanc",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 466,
                      nom: "les rois mages noire",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 467,
                      nom: "eves",
                      description:
                        "les eves sont les femmes bénies de dieu qui mettent au monde les futurs séraphins ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 468,
                      nom: "liliths",
                      description:
                        "les liliths sont les femmes maudites du diable qui mettent au monde les futurs séphiroths",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 469,
                      nom: "adams",
                      description:
                        "les adams sont les hommes qui seront les vrais père autant pour les séraphins que les séphiroths",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 531,
                      nom: "vertu",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 532,
                      nom: "péché",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 569,
                      nom: "les cavaliers",
                      description:
                        "les cavaliers sont à l'origine de la création ou de la destruction d'un monde",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 570,
                      nom: "les mages",
                      description: "",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 571,
                      nom: "elues",
                      description:
                        "les élues sont des personnes qui ont un grand rôle dans la guerre du bien contre le mal",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 575,
                      nom: "Influence",
                      description:
                        "influence est la partie du projet qui gère tout ce qui se rapporte aux influence",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 638,
                      nom: "religions connues",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 228,
                          nom: "Athé",
                          description:
                            "personne sans religion, ne croit pas en l'existence des dieux",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 229,
                          nom: "monothéiste",
                          description:
                            "personne croyant en l'existence du dieu bon et unique",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 230,
                          nom: "sataniste",
                          description:
                            "personne croyant qu'il y a bien un dieu mais qu'il est malveillant alors il faut le satisfaire",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 231,
                          nom: "animiste",
                          description:
                            "personne croyant au fait qu'il y ait 3 dieux, un pour les hommes, un pour la flore et un pour les mobs",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 232,
                          nom: "polytheiste",
                          description:
                            "personne à plusieurs dieux sans savoir combien il y en a",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 233,
                          nom: "gaia",
                          description:
                            "personne croyant que tout élément est vivant et personnifiée par une personne",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 234,
                          nom: "ordre du phoenix",
                          description:
                            "personne croyant au principe des 4 entités qui habitent chaque être vivant",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 235,
                          nom: "boudhisme",
                          description:
                            "personne croyant en l'homme qui peut devenir un véritable dieux s'il fait ce qu'il faut",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 578,
                  nom: "politique",
                  description:
                    "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 5,
                      nom: "mode de gouvernement",
                      description:
                        "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 24,
                          nom: "Aucun gouvernement",
                          description: "personne ne gouverne",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 25,
                          nom: "Religieux",
                          description: "les religieux gouvernent",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 26,
                          nom: "Conglomérat",
                          description: "les entreprises gouvernent",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 27,
                          nom: "Voyous",
                          description: "les voyous gouvernent",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 28,
                          nom: "Femmes",
                          description: "les femmes gouvernent",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 29,
                          nom: "Riches",
                          description: "les riches gouvernent",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 30,
                          nom: "Communisme",
                          description: "le communisme",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 157,
                          nom: "Anciens",
                          description: "les anciens gouvernent les plus jeunes",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 158,
                          nom: "bon roi",
                          description:
                            "le roi est quelqu'un perçu comme bon et vieillant sur son peuple",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 159,
                          nom: "groupe dominant",
                          description: "le systeme de groupe dominant",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 160,
                          nom: "intelligents",
                          description:
                            "les intelligents sont au sommet de la societé",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 161,
                          nom: "élus",
                          description:
                            "le roi est quelqu'un d'élu par son peuple",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 162,
                          nom: "Aristocratie",
                          description:
                            "les familles nobles dominent les autres familles",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 163,
                          nom: "Despote",
                          description:
                            "un despote gouverne son royaume d'une main de fer",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 6,
                      nom: "Police",
                      description:
                        "la police permet de faire appliquer les lois d'un gouvernement",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 55,
                      nom: "or d'un pays",
                      description:
                        "l'or d'un pays représente ce qui compte le plus dans un pays",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 31,
                          nom: "Emplacement",
                          description: "l'emplacement géographique",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 32,
                          nom: "Armes",
                          description: "les armes possèdées",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 33,
                          nom: "Etre fertile",
                          description: "être fertile pour procréer",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 34,
                          nom: "Etage dans la tour",
                          description:
                            "sa position vis à vis du nuage de pollution",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 35,
                          nom: "Santée",
                          description: "sa bonne santé",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 36,
                          nom: "Santé",
                          description: "les médicaments",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 37,
                          nom: "Nourriture",
                          description: "la nourriture",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 33,
                          nom: "Etre fertile",
                          description: "être fertile pour procréer",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 56,
                      nom: "persecution",
                      description: "il y a des persécutions partout",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 38,
                          nom: "Gros",
                          description: "Les gros sont persécutés",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 39,
                          nom: "Immigré",
                          description:
                            "Les personnes voulants entrer sur l'île",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 40,
                          nom: "Pauvre",
                          description: "Les pauvres sont persécutés",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 41,
                          nom: "Hommes stériles",
                          description: "Les hommes stériles sont persécutés",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 42,
                          nom: "Malades",
                          description: "Les gens maladent sont persécutés",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 43,
                          nom: "Sans camps",
                          description: "Les gens sans camps sont persécutés",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 44,
                          nom: "Athés",
                          description: "Les gens sans réligion sont persécutés",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 57,
                      nom: "religion",
                      description: "religion",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 525,
                      nom: "les pilliers d'une societé",
                      description: "les pilliers d'une societé",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 353,
                          nom: "1er pillier",
                          description: "le premier pillier d'une societé",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 321,
                              nom: "l'alimentation",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 352,
                          nom: "2ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 322,
                              nom: "le travail",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 323,
                              nom: "la finance",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 350,
                          nom: "3ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 326,
                              nom: "l'education",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 325,
                              nom: "la sociologie",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 324,
                              nom: "la religion",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 351,
                          nom: "4ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 331,
                              nom: "les forces de l'ordre",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 332,
                              nom: "l'armée",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 333,
                              nom: "la justice",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 334,
                              nom: "la loi",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 347,
                          nom: "5ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 328,
                              nom: "l'aide interne",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 329,
                              nom: "les relations internes",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 330,
                              nom: "l'aménagement du territoire",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 327,
                              nom: "la santé",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 348,
                          nom: "6ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 349,
                          nom: "7ème pillier",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 335,
                              nom: "les relations externes",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 336,
                              nom: "les activités sportives",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 337,
                              nom: "les activités ludiques",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 338,
                              nom: "les activités médicales",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 339,
                              nom: "les activités sexuelles",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 340,
                              nom: "les activités  de commémoration",
                              description: null,
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 341,
                              nom: "les activités de la communauté",
                              description: null,
                              organisation: null,
                              grappes: []
                            }
                          ]
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 594,
                      nom: "organisation",
                      description:
                        "une organisation est un regroupement de personne",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 34,
                          nom: "héritier",
                          description:
                            "l'héritier est celui qui succédera au chef du gouvernement en cas où le chef ne doit ou ne plus plus exercer la direction d'un pays ",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 487,
                          nom: "type d'organisation",
                          description:
                            "le type d'organisation est le schema de l'organisation",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 21,
                              nom: "pyramidale",
                              description:
                                "une organisation pyramidale est une organisation où il faut l'accord de son supérieur à chaque fois",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 22,
                              nom: "groupusculaire ",
                              description:
                                "une organisation groupusculaire est une organisation où il y a un leader pour chaque entité , et chaque leader d'une entité fait partie d'un groupe supérieur avec un leader aussi",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 23,
                              nom: "libertique",
                              description:
                                "une organisation libertique est une organisation simple, il y a un groupe leader qui prend des decisions et n'importe qui peut exécuter l'action et est libre de la façon de faire, du moment que l'action est pas contraire à l'ordre du début",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 24,
                              nom: "hiérarchique",
                              description:
                                "une organisation hiérarchique est basé sur le grade, un grade donne des pouvoirs et des devoirs, des limites et des fonctions",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 25,
                              nom: "anarchique",
                              description:
                                "une organisation anarchique est basés sur la liberté totale, aucune volonté d'être un groupe, seul le résultat compte et si tu es pas d'accord, rien ne t'oblige",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 26,
                              nom: "sectaire",
                              description:
                                "une organisation sectaire est basé sur des branches , une branche par objectif avec un leader de branche qui doit accomplir l'objectif de sa branche",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 636,
                          nom: "organisations connues",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 524,
                              nom: "mafia",
                              description:
                                "le mafia est une organisation criminel",
                              grappeParent: null,
                              grappeEnfants: [
                                {
                                  id: 354,
                                  nom: "mafia albanaise",
                                  description: "",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 355,
                                  nom: "la mafia Aryan Brotherhood",
                                  description: "",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 356,
                                  nom: "la mafia Mara Salvatrucha",
                                  description: "la Mara Salvatrucha ou MS-13",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 357,
                                  nom: "la mafia du cartel",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 358,
                                  nom: "la mafia franc maçon",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 359,
                                  nom: "mafia sioniste",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 360,
                                  nom: "la mafia illuminati",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 361,
                                  nom: "la mafia italienne",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 362,
                                  nom: "la mafia africaine",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 363,
                                  nom: "les yakuzas japonais",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 364,
                                  nom: "la triade chinois",
                                  description: null,
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                }
                              ],
                              type: null,
                              idees: []
                            },
                            {
                              id: 534,
                              nom: "mobs clans",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 535,
                              nom: "gouvernements",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 536,
                              nom: "marchands",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 537,
                              nom: "religions",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 538,
                              nom: "pirates",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 539,
                              nom: "criminels",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 540,
                              nom: "barbares",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 541,
                              nom: "realistes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 542,
                              nom: "nolife",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 543,
                              nom: "sectes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 544,
                              nom: "extrémistes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 545,
                              nom: "terroristes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 546,
                              nom: "anarchistes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 547,
                              nom: "impérialiste",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 548,
                              nom: "révolutionnaire",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 549,
                              nom: "royalistes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 550,
                              nom: "hackers",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 586,
                  nom: "être vivant",
                  description: "être vivant est sur les être vivants",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 365,
                      nom: "vivant sur dystropia",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 207,
                          nom: "Arabe",
                          description:
                            "peuple qui est très réligieux et roi de l'afrique",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 208,
                          nom: "Noir",
                          description: "peuple ayant la couleur sombre",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 209,
                          nom: "Israelien",
                          description:
                            "peuple ayant été massacré par les autres peuples pour des raisons réligieuses",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 210,
                          nom: "Gens des sables",
                          description:
                            "peuple ayant immigré pour plus de profi",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 211,
                          nom: "Métisse",
                          description:
                            "peuple ayant la couleur café et roi de l'amerique nord",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 212,
                          nom: "Canadien",
                          description:
                            "peuple de bûcheron qui vivent dans le nord du pays",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 213,
                          nom: "Quebecois",
                          description:
                            "peuple ayant tenté de migrer ailleurs et aurait échoué",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 214,
                          nom: "Brésilien",
                          description:
                            "peuple ayant le sens du rythme et la fête mais pas de la guerre",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 215,
                          nom: "Latinos",
                          description:
                            "peuple latin qui aime la guerre et les conflits",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 216,
                          nom: "Gothiks",
                          description:
                            "peuple ayant un atrait pour la mort et les drames",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 217,
                          nom: "Asiatique",
                          description:
                            "peuple plus très nombreux ayant subi de plein fouet l'apocalypse",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 218,
                          nom: "Hindous",
                          description:
                            "peuple ancienne indiens qui ont réussi à rester plus nombreux malgré l'apocalypse",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 219,
                          nom: "Tibetin",
                          description:
                            "peuple pacifiste qui ont pratiquement disparu tellement ils étaient hai pour avoir échappé à l'apoalypse",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 220,
                          nom: "Eurasien",
                          description:
                            "peuple banquier du monde et qui le tient entre ses billets",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 221,
                          nom: "Saxon",
                          description:
                            "peuple banquier du monde et qui le tient entre ses billets",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 222,
                          nom: "Breton",
                          description:
                            "peuple farouche et combattant qui ont refusé la mondialisation et l'élévation",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 223,
                          nom: "Rasta",
                          description:
                            "peuple assez cool avec une philophie de vie",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 224,
                          nom: "Maori",
                          description: "peuple attaché au principe d'île isolé",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 225,
                          nom: "Aryen",
                          description:
                            "peuple aux cheveux bloncs et à la peau clair",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 226,
                          nom: "Albinos",
                          description:
                            "peuple au cheveu blanc et aux yeux rouges",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 227,
                          nom: "Turc",
                          description:
                            "peuple ayant presque disparu à cause de la famine",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 244,
                          nom: "Poltergeist",
                          description:
                            "peuple le plus petit du monde, si petit qu'il faut plisser les yeux pour les voir",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 245,
                          nom: "Homme préhistorique",
                          description: "peuple vivant avec les moyens primitif",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 246,
                          nom: "Esquimau",
                          description:
                            "peuple immigrant qui a fuit le réchauffement planètaire pour la glace éternel",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 247,
                          nom: "Golem de pierre",
                          description:
                            "peuple géant de pierre où la pierre est la pierre angulaire de leur société",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 248,
                          nom: "Gens des rivières",
                          description:
                            "peuple qui vivent exclusivement sur les rivières et ses bords, naviguant en pirogue à longueur de temps",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 249,
                          nom: "Clan contrôle",
                          description:
                            "peuple qui arrive à imposer sa volonté aux mobs",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 250,
                          nom: "Peuple homme-poisson",
                          description:
                            "peuple mi homme mi poisson selon des proportions différentes",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 366,
                      nom: "vivant sur Utopia",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 164,
                          nom: "Clan invocation",
                          description: "peuple capable d'invoquer des mobs",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 165,
                          nom: "Golem de glace",
                          description:
                            "peuple de géant de glace qui ne fond qu'un avec elle",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 166,
                          nom: "Egyptien",
                          description:
                            "peuple immigrant qui sont à l'origine des pyramides dans les 2 mondes",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 167,
                          nom: "Peuple nomade",
                          description:
                            "peuple toujours en mouvant dans leurs caravanes à travers le désert",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 168,
                          nom: "Clan transformation",
                          description:
                            "peuple qui peut se transformer partiellement ou entièrement en mob",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 169,
                          nom: "Gigantos",
                          description: "peuple de géant qui vivent simplement",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 170,
                          nom: "Fire hair",
                          description:
                            "peuple totalement fou de bagarre, d'amour mais surtout de bagarre",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 171,
                          nom: "Portugais",
                          description:
                            "peuple immigrant qui a décidé de vivre de pêche, du transport de marchandise mais aussi des mercenaires",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 172,
                          nom: "Gens des marécages",
                          description:
                            "peuple vivant exclusivement dans les marécages où ils sont à l'écart du reste du stage",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 173,
                          nom: "peuple des pirates des mers",
                          description:
                            "peuple vivant sur leurs bateaux en mer et vivant de la piraterie",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 174,
                          nom: "Gens des plages",
                          description:
                            "peuple vivant exclusivement sur les plages et ayant un sens de la fête très prononcé",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 175,
                          nom: "Sang bleu",
                          description:
                            "peuple au sang froid, ils peuvent survivre à n'importe quelle température négative",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 176,
                          nom: "Yeti",
                          description:
                            "peuple de grands hommes poilus adorable",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 177,
                          nom: "Génome",
                          description:
                            "peuple où la population entière n'a qu'un seul visage issue de clonage",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 178,
                          nom: "Gens des décharges",
                          description:
                            "peuple exclu qui vivent dans les décharges géantes pour y recupérer tout ce qui peut être encore utilisable",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 179,
                          nom: "Geeks",
                          description:
                            "peuple complètement fou qui adore fait et défaire ce qu'ils font, ils innovent perpetuellement",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 180,
                          nom: "SteamPunk",
                          description:
                            "peuple qui refuse la magie et la haute technologie pour utiliser des machines plutot mécanique que électronique",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 181,
                          nom: "Clan modification",
                          description:
                            "clan pouvant modifier les mobs à leur guise, afin de les rendre plus féroces, plus utiles, plus dociles",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 182,
                          nom: "Cyborg",
                          description:
                            "peuple ayant franchi la barrière entre l'humain et la machine, dans un sens comme dans l'autre",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 183,
                          nom: "indiens d'amérique",
                          description:
                            "peuple immigrant qui a fui l'éradication afin de trouver un lieu plus propice à leur mode de vie",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 184,
                          nom: "Anges",
                          description:
                            "peuple adorable ayant de petites ailes qui leur permet de flotter",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 185,
                          nom: "Gens des bateaux volants",
                          description:
                            "peuple de marins des airs, ils vivent comme si tout était une enchère",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 186,
                          nom: "clan fusion",
                          description:
                            "clan mob qui peut fusionner avec les mobs ou les faire fusionner ensemble",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 187,
                          nom: "Pirates des airs",
                          description:
                            "communauté de brigants qui pillent et attaquent tous ce qui peut rapporter",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 188,
                          nom: "Allemand",
                          description:
                            "Peuple ayant été chassé par les autres peuples d'europe",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 189,
                          nom: "Volien",
                          description:
                            "Peuple d'être volant qui ont un certain style aristocratique et très sectaire",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 190,
                          nom: "Dragoon",
                          description:
                            "Peuple ayant une affinité particulière avec les dragons",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 191,
                          nom: "Peuple face Sacre",
                          description:
                            "Peuple dans leurs versions sacre, quand le bien domine le monde",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 192,
                          nom: "Peuple face Ténèbre",
                          description:
                            "Peuple dans leurs versions sacre, quand le mal domine le monde",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 193,
                          nom: "Baphomet",
                          description: "Peuple ayant l'apparence du baphomet",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 194,
                          nom: "Nephelim",
                          description:
                            "Peuple ayant l'apparence de grand aigle",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 195,
                          nom: "Diablotin",
                          description:
                            "Peuple ayant l'apparence de petit diable",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 196,
                          nom: "Chérubin",
                          description:
                            "Peuple ayant l'apparence de petit ébé ange",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 199,
                          nom: "Fantome",
                          description: "Peuple immatériel qui hante les lieux",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 200,
                          nom: "Ame",
                          description: "Peuple immatériel qui bénit les lieux",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 201,
                          nom: "Gangstar",
                          description:
                            "Peuple de gens un peu root qui ont pas leur langue dans la poche",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 202,
                          nom: "Bobo",
                          description:
                            "Peuple complèment coincé et pleins de manières",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 203,
                          nom: "mort-vivant",
                          description:
                            "Peuple immortel qui ont transcendé la mort",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 204,
                          nom: "immortel",
                          description:
                            "Peuple immortel qui ont transcendé la vie",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 205,
                          nom: "Clan nécro",
                          description:
                            "clan mob qui joue avec des mob mort-vivant",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 206,
                          nom: "Clan créa",
                          description:
                            "clan mob qui peut créer ses propres mobs",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 251,
                          nom: "Peuple minito",
                          description: "peuple humain de petite taille",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 252,
                          nom: "Japonais",
                          description:
                            "peuple immigrant qui a décidé de vivre comme à l'époque Edo",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 253,
                          nom: "Peuple des noobs",
                          description:
                            "peuple si fragile qu'ils en meurent des centaines chaque jour, il n'y a que dans leur chief où ils sont invincibles",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 254,
                          nom: "Peuple flore",
                          description:
                            "peuple appartement à la flore, ils sont liés à la nature et vivent caché dans la forêt",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 255,
                          nom: "Peuple nain",
                          description:
                            "peuple qui vivent sous, sur et dans les montagnes",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 256,
                          nom: "Clan symbiose",
                          description:
                            "peuple qui vit en harmonie avec les mobs",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 257,
                          nom: "Gens des ravins",
                          description: "peuple qui suspendu dans les ravins",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 637,
                      nom: "différents règnes",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 568,
                          nom: "mineral",
                          description:
                            "les minéraux sont des êtres vivants de la matière",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 562,
                          nom: "Elemental",
                          description:
                            "les élementals sont des êtres vivants basé sur des élements du monde",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 566,
                          nom: "végétal",
                          description:
                            "les végétaux sont les êtres vivants florales",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 564,
                          nom: "mob",
                          description:
                            "les mobs sont les êtres vivants animaux",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 484,
                              nom: "classement mob",
                              description:
                                "le classement mob est la classification de puissance d'un mob",
                              grappeParent: null,
                              grappeEnfants: [
                                {
                                  id: 13,
                                  nom: "noobs",
                                  description:
                                    "le mob noob est le plus répandu et le plus facile à battre",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 14,
                                  nom: "classique",
                                  description:
                                    "le mob classique est celui dont la force est celle de base",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 15,
                                  nom: "feroce",
                                  description:
                                    "le mob féroce est un mob plus puissant qu'un classique car il est féroce",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 16,
                                  nom: "rare",
                                  description:
                                    "le mob rare est un mob que l'on trouve pas si facilement et qui est plutot puissant",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 17,
                                  nom: "pgm",
                                  description:
                                    "le mob pgm est un mob de classe importante il faut un certain niveau pour le battre",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 18,
                                  nom: "légendaire",
                                  description:
                                    "le mob légendaire est un mob de classe mondiale qui est très dure à combattre et donc à battre",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 19,
                                  nom: "golden",
                                  description:
                                    "le mob golden est le plus puissant possible pour un animal, le mob king étant juste un titre du plus puissant parmis les golden",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: []
                                },
                                {
                                  id: 20,
                                  nom: "king",
                                  description:
                                    "le mob king est  le plus puissant de sa race animale, tout animal de son espèce lui est soumis",
                                  grappeParent: null,
                                  grappeEnfants: null,
                                  type: null,
                                  idees: [
                                    {
                                      id: 150,
                                      nom: "Démon aux 7 corps",
                                      description:
                                        "le mob king du stage des ténèbres",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 151,
                                      nom: "Dragon aux 7 ailes",
                                      description:
                                        "le mob king du stage du vent",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 152,
                                      nom: "Tyranosaures aux 7 bouches",
                                      description:
                                        "le mob king du stage de la foudre",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 153,
                                      nom: "Ours aux 7 yeux",
                                      description:
                                        "le mob king du stage de la glace",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 154,
                                      nom: "Scorpion aux 7 queues",
                                      description:
                                        "le mob king du stage du feu",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 155,
                                      nom: "Locness aux 7 tentacules",
                                      description:
                                        "le mob king du stage de l'eau",
                                      organisation: null,
                                      grappes: []
                                    },
                                    {
                                      id: 156,
                                      nom: "Gorille aux 7 bras",
                                      description:
                                        "le mob king du stage de la terre",
                                      organisation: null,
                                      grappes: []
                                    }
                                  ]
                                }
                              ],
                              type: null,
                              idees: []
                            },
                            {
                              id: 495,
                              nom: "type de mob",
                              description: "il y a différents types de mobs",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 563,
                          nom: "humain",
                          description: "les humains sont les êtres humanoïdes ",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 565,
                          nom: "artificielle",
                          description: "les robots, IA etc...",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 11,
                          nom: "persona",
                          description: "les personas sont les influences",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 385,
                              nom: "orgeuil",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 386,
                              nom: "paresse",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 387,
                              nom: "colere",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 388,
                              nom: "gourmandise",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 389,
                              nom: "envie",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 390,
                              nom: "avidité",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 391,
                              nom: "luxure",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 392,
                              nom: "chasteté",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 393,
                              nom: "générosite",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 394,
                              nom: "charité",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 395,
                              nom: "modération",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 396,
                              nom: "patience",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 397,
                              nom: "courage",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 398,
                              nom: "modestie",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 407,
                              nom: "Tranquillité",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 408,
                              nom: "Joie",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 409,
                              nom: "Colère",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 411,
                              nom: "Tristesse",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 412,
                              nom: "Surprise",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 413,
                              nom: "Peur",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 414,
                              nom: "Dégoût",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 415,
                              nom: "Terreur",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 416,
                              nom: "Fureur",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 567,
                          nom: "spectrale",
                          description:
                            "les spectres sont des êtres vivants sans matière",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 635,
                      nom: "type de peuples",
                      description: "type de peuple ",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 572,
                          nom: "type de peuple de la nuit",
                          description: "le type de peuple de la nuit",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 470,
                              nom: "les peuples drôles",
                              description:
                                "les peuples drôles sont là pur l'aspect comique",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 471,
                              nom: "les peuples belliqueux",
                              description:
                                "les peuples belliqueux ont une tendance à être hostile ",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 472,
                              nom: "les peuples marchands",
                              description:
                                "les peuples marchands ont une tendance à faire du commerce",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 473,
                              nom: "les peuples pacifique",
                              description:
                                "les peuples pacifique ont des principes de non agressions",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 474,
                              nom: "les peupes IRL",
                              description:
                                "les peuples irl ont immigré vers le monde de la nuit",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 475,
                              nom: "les peuples king",
                              description:
                                "les peuples king ont pris le pouvoir",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 476,
                              nom: "les peuples mob",
                              description:
                                "les peuples mob ont un lien avec les mobs",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 573,
                          nom: "type de peuple du jour",
                          description: "type de peuple du jour",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 477,
                              nom: "les peuples nombreux",
                              description:
                                "les peuples nombreux sont souvent les moins privilégiés",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 478,
                              nom: "les peuples souverains",
                              description:
                                "les peuples souverains sont ceux qui domine le continent",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 479,
                              nom: "les peuples ancestrâles",
                              description:
                                "les peuples ancestrâles sont les peuples connus avant le dernière age, nos peuples actuels",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 480,
                              nom: "les peuples disparus",
                              description:
                                "les peuples disparus sont ceux qui ont disparu au cours du dernière age",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 481,
                              nom: "les peuples IG",
                              description:
                                "les peuples ig ont immigré dans la phase jour",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 591,
                  nom: "commerce",
                  description: "gestion de la partie commerce",
                  grappeParent: null,
                  grappeEnfants: null,
                  type: null,
                  idees: []
                }
              ],
              type: null,
              idees: []
            },
            {
              id: 587,
              nom: "power",
              description: "power est la partie combat ",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 497,
                  nom: "base",
                  description: "les bases des powers",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 66,
                      nom: "attaque",
                      description: "tout ce qui se rapporte à l'attaque",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 276,
                          nom: "attaque corps à corps",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 277,
                          nom: "attaque zone",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 278,
                          nom: "attaque à distance",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 67,
                      nom: "défense",
                      description: "tout ce qui se rapporte à la défense",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 279,
                          nom: "defense corps à corps",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 280,
                          nom: "defense de zone",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 599,
                          nom: "défense à distance",
                          description:
                            "la défense à distance permet de défendre quelqu'un plutot que soit",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: [
                    {
                      id: 295,
                      nom: "force",
                      description:
                        "la force détermine la puissance de l'attaque",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 296,
                      nom: "endurance",
                      description:
                        "l'endurance détermine la faculté à maintenir la force",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 297,
                      nom: "renforcement",
                      description:
                        "le renforcement est la capacité à encaisser des attaques",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 298,
                      nom: "resistance",
                      description:
                        "la resistance est la faculté à maintenir le renforcement",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 299,
                      nom: "vitesse",
                      description:
                        "la vitesse est  la capacité à sortir une attaque",
                      organisation: null,
                      grappes: []
                    },
                    {
                      id: 300,
                      nom: "agilité",
                      description:
                        "l'agilité est la capacité à esquiver une attaque",
                      organisation: null,
                      grappes: []
                    }
                  ]
                },
                {
                  id: 502,
                  nom: "les boosts",
                  description: "les 6 boosts permet de décupler ses capacités",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 281,
                      nom: "booster",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 410,
                      nom: "Coupure avec ses émotions",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 590,
                  nom: "fight",
                  description: "tout ce qui se rapporte au combat\r\n",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 553,
                      nom: "issue d'un combat",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 616,
                          nom: "white",
                          description: "façon de faire white",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 442,
                              nom: "ne fait que neutraliser",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 443,
                              nom: "gentleman , ne profite jamais faiblesse",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 444,
                              nom: "le soigne après defaite",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 445,
                              nom: "partage un repas après le fight",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 446,
                              nom: "ne fait que se défendre, n'attaque jamais",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 447,
                              nom: "lui propose une revanche",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 448,
                              nom: "ne fait que des one shot",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 617,
                          nom: "black",
                          description: "façon de faire black",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 435,
                              nom: "viol avant la mort",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 436,
                              nom: "lui vole tout après la mort",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 437,
                              nom: "le défigure ou mutile avant la mort",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 438,
                              nom: "mange après la mort",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 439,
                              nom: "lui écrase la tete",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 440,
                              nom: "le laisse agonisant",
                              description: "car la flemme d'achever",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 441,
                              nom: "continue post mortem à le frapper",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 554,
                      nom: "mode de victoire",
                      description: "la façon de faire quand la personne gagne",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 428,
                          nom: "victoire totale",
                          description: "il y a no match voir one shot",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 429,
                          nom: "victoire facile",
                          description:
                            "il y a une victoire sans trop de difficulté",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 430,
                          nom: "victoire difficile",
                          description: "une victoire à l'arraché",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 431,
                          nom: "match nul",
                          description: "aucun gagnant",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 432,
                          nom: "défaite difficile",
                          description: "défaite mais bien combattu",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 433,
                          nom: "défaite justifié",
                          description: "une défaite qui ne faisait aucun doute",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 434,
                          nom: "défaite totale",
                          description: "il y a aussi eu no match",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 598,
                      nom: "style de combat",
                      description:
                        "le style de combat détermine la façon de se battre",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 89,
                          nom: "au corps à corps",
                          description:
                            "le combat au corps est corps est le combat au plus près, au contract de l'adversaire",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 90,
                          nom: "à distance",
                          description:
                            "le combat à distance est le plus où on préfère rester à distance de son adversaire",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 91,
                          nom: "de zone",
                          description:
                            "le combat de zone est un combat de mêlée où on attaque pas une cible précisément mais plutôt une zone  ",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 596,
                  nom: "les 7 voies possibles",
                  description: "les 7 voies possibles",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 58,
                      nom: "Arme blanche",
                      description:
                        "les armes blanches sont des armes qui sont au corps à corps ou à courte distance",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 342,
                          nom: "armes blanches type bankai",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 344,
                          nom: "armes blanches type shikai",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 345,
                          nom: "école d'arme blanche",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 513,
                          nom: "type d'armes blanches",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 266,
                              nom: "les épées",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 267,
                              nom: "les lances",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 268,
                              nom: "les haches",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 269,
                              nom: "les dagues",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 270,
                              nom: "les fouets",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 271,
                              nom: "les marteaux",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 630,
                              nom: "les masses",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: [
                            {
                              id: 274,
                              nom: "épée",
                              description: "les épées",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 275,
                              nom: "lance",
                              description: "les lances",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 276,
                              nom: "dague",
                              description: "les dagues",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 277,
                              nom: "masse",
                              description: "les masses, marteaux",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 278,
                              nom: "hache",
                              description: "les haches",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 279,
                              nom: "fouet",
                              description: "les fouets",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 280,
                              nom: "baton",
                              description: "les batons",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 514,
                          nom: "la qualité de l'arme",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 272,
                              nom: "qualité des élements ancestraux",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 273,
                              nom: "qualité des métaux modernes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 274,
                              nom: "qualité des pierres pécieuses",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 275,
                              nom: "qualité spéciale - matériaux mobs",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 601,
                          nom: "les armes blanches Black-White",
                          description: "les armes B&W",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 343,
                              nom: "armes blanches maudites",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 346,
                              nom: "armes blanches bénies",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 59,
                      nom: "Arme à feu",
                      description: "les armes à feux s'utilisent à distance ",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 520,
                          nom: "type d'arme",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 312,
                              nom: "armes ancestrales",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 313,
                              nom: "armes moyenageuse",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 314,
                              nom: "arme basique",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 315,
                              nom: "arme à rafale",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 316,
                              nom: "arme précise et puissante",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 317,
                              nom: "arme à gros dégats",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: [
                            {
                              id: 281,
                              nom: "ancestrales",
                              description:
                                "les armes à feux ancestrales sont les arcs, lance pierre",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 282,
                              nom: "ancestrale évolué",
                              description:
                                "les armes à feux  ancestrales évolués sont les fusils et arbalettes",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 283,
                              nom: "basique",
                              description:
                                "les armes à feux basique sont les flingues",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 284,
                              nom: "rafale",
                              description:
                                "les armes à feux à rafales sont les mitrailettes, uzis et flingue automatique",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 285,
                              nom: "précis",
                              description:
                                "les armes à feux précis et puissants sont les snipers , les catapultes et les lasers",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 286,
                              nom: "gros dégats",
                              description:
                                "les armes à feux à gros dégats sont les bazzoka, les lance roquette, les bombes et lances grenades",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 287,
                              nom: "rasengan",
                              description:
                                "les armes à feux à rasengan sont les rasengans, chidori, kame, getsuga tenshou",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 288,
                              nom: "cataclysme",
                              description:
                                "les cataclysmes sont les fuuton rasengan, les kamehameha et big bang attack",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 521,
                          nom: "type de balle",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 318,
                              nom: "balle matériaux ancestraux",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 319,
                              nom: "balle effet",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 320,
                              nom: "balle matériaux modernes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 600,
                          nom: "energy Black-white",
                          description: "la séparation B&W",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 68,
                              nom: "énergie malsaine",
                              description:
                                "l'énergie malsaine est produite en puisant des sentiments comme la haine, la violence, etc....",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 69,
                              nom: "énergie saine",
                              description:
                                "l'énergie saine est produite en puisant des sentiments comme la protection ou le respect",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 60,
                      nom: "invocation",
                      description:
                        "les invocations sont des entités qui se battent à votre place",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 340,
                          nom: "nombre d'invocation",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 515,
                          nom: "type d'invocation",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 284,
                              nom: "remplace l'invocateur",
                              description:
                                "apparaît à la place de l'invocateur",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 516,
                          nom: "temps d'invocation",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 283,
                              nom: "éphémère",
                              description:
                                "apparaît pour faire une unique action puis disparait",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 631,
                          nom: "invocation black white",
                          description: "",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 632,
                              nom: "invocation sacrée",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 633,
                              nom: "invocation profane",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 61,
                      nom: "transformation",
                      description:
                        "les transformations sont des modifications du corps ",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 305,
                          nom: "transformation Black-White",
                          description: "",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 602,
                              nom: "transformation démoniaque",
                              description: "transfo black",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 603,
                              nom: "transformation angelique",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 519,
                          nom: "type de transformation",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 300,
                              nom: "modification apparence du corps",
                              description: "agrandir, grossir, allonger",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 301,
                              nom: "modification physique du corps",
                              description:
                                "renforcer fragmenter, ajouter un membre",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 302,
                              nom: "take over",
                              description: "voir take over de fairy tail",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 303,
                              nom: "sceaux maudit",
                              description: "voir sceaux maudit dans naruto",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 304,
                              nom: "mask",
                              description: "voir vizards dans bleach",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 306,
                              nom: "possession",
                              description: "se laisser posséder par un monstre",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 307,
                              nom: "virtualisation",
                              description: "bras invisible, etc...",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 308,
                              nom: "transfo spéciale mob",
                              description: "",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 311,
                              nom: "absorption dans le corps",
                              description:
                                "nager dans l'eau, voler dans le ciel, ramper sur le sol, grimper au arbre, passer à travers la glace",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 62,
                      nom: "magie",
                      description: "la magie ",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 517,
                          nom: "type de magie",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 282,
                              nom: "magie bleu",
                              description: "magie defensive",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 285,
                              nom: "magie grise",
                              description: "magie des soins",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 286,
                              nom: "magie rouge",
                              description: "magie boost",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 287,
                              nom: "magie verte",
                              description: "magie de zone",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 288,
                              nom: "magie marron",
                              description: "magie offensive corps à corps",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 289,
                              nom: "magie jaune",
                              description: "magie d'immobilisation",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: [
                            {
                              id: 266,
                              nom: "magie blanche",
                              description:
                                "la magie blanche est une magie sacrée",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 267,
                              nom: "magie noire",
                              description:
                                "la magie noire est une magie maudite",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 268,
                              nom: "magie bleu",
                              description: "la magie bleu est une magie de ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 269,
                              nom: "magie verte",
                              description: "la magie verte est une magie de ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 270,
                              nom: "magie rouge",
                              description: "la magie bleu est une magie de ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 271,
                              nom: "magie jaune",
                              description: "la magie jaune est une magie de ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 272,
                              nom: "magie violet",
                              description: "la magie violet est une magie de ",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 273,
                              nom: "magie grise",
                              description: "la magie grise est une magie de ",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        },
                        {
                          id: 518,
                          nom: "lancement de magie",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 291,
                              nom: "par les signes",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 292,
                              nom: "par une incantation vocale",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 293,
                              nom: "par l'écriture",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 294,
                              nom: "par le sacrifice du sang",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 295,
                              nom: "par contact",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 296,
                              nom: "par rune",
                              description: "comme fried dans fairy tail",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 299,
                              nom: "magie algorythmique",
                              description:
                                "un magie agit toute seule, si un sort de feu est lancé, un sort de glace est triggé",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 604,
                          nom: "catégorie de magie",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 290,
                              nom: "magie perdue",
                              description:
                                "magie qui ne s'apprend pas dans les bouquins",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 297,
                              nom: "magie ancestrale",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 298,
                              nom: "magie interdite",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 605,
                          nom: "magie Black-White",
                          description: "magie b&w",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 606,
                              nom: "magie noire",
                              description: "magie black",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 607,
                              nom: "magie blanche",
                              description: "magie white",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 63,
                      nom: "élementaliste",
                      description: "les éléments manipulent des élement",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 522,
                          nom: "intéraction élemental",
                          description: "la façon d’interagir avec l’Élément",
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 321,
                              nom: "la manipulation",
                              description: "manipuler une source existante",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 322,
                              nom: "la création",
                              description:
                                "pas besoin de source pour créer l’élément",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 323,
                              nom: "mode logia",
                              description: "la personne devient l’élément",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 324,
                              nom: "mode eveillé",
                              description:
                                "la personne peut transformer quelque chose en l'élément",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 325,
                              nom: "absorbe",
                              description:
                                "la personne doit absorber l'élément pour l'utiliser",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 523,
                          nom: "type élement",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 64,
                      nom: "main nue",
                      description:
                        "les combats à mains nues sont le combat le plus simple",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 309,
                          nom: "effet - composition du corps",
                          description: "elastique, gluant, glissant, ressort",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 310,
                          nom: "effet - au toucher",
                          description: "effet coupant, perçant, magnetique",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 341,
                          nom: "école de combat à mains nues",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 65,
                      nom: "non classable",
                      description:
                        "il s'agit de pouvoir qui ne se range dans aucune classe",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 494,
                      nom: "level",
                      description: "le niveau qui le caractérise",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 608,
                          nom: "capacité 0X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 190,
                              nom: "0.1",
                              description:
                                "capacité d'une personne qui n'a est à la limite de la mort ou de neutralisation",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 191,
                              nom: "0.2",
                              description:
                                "capacité d'une personne qui est très affaiblit",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 192,
                              nom: "0.3",
                              description: "capacité d'une personne affaiblit",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 193,
                              nom: "0.4",
                              description:
                                "capacité d'une personne très fatigué",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 194,
                              nom: "0.5",
                              description: "capacité d'une personne fatigué",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 195,
                              nom: "0.6",
                              description:
                                "capacité d'une personne qui commence à ressentir une légère fatigue",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 196,
                              nom: "0.7",
                              description:
                                "capacité d'une personne qui montre est en cours d'effort ",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 197,
                              nom: "0.0",
                              description: "capacité totalement nulle",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 609,
                          nom: "capacité 1.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 134,
                              nom: "1.0",
                              description:
                                "capacité normal d'une personne dans dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 135,
                              nom: "1.2",
                              description:
                                "capacité d'une personne qui est au dessus de la moyenne sur dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 136,
                              nom: "1.1",
                              description:
                                "capacité d'une personne qui force sur dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 137,
                              nom: "1.3",
                              description:
                                "capacité d'une personne qui est très bon dans le domaine sur dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 138,
                              nom: "1.4",
                              description:
                                "capacité d'une personne avec des capacités incroyable par rapport aux autres sur dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 139,
                              nom: "1.5",
                              description:
                                "capacité limite d'une personne sur dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 140,
                              nom: "1.6",
                              description:
                                "capacité d'une personne qui dépasse le cadre de dystropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 141,
                              nom: "1.7",
                              description:
                                "capacité d'une personne bien au delà des capacités de distropia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 610,
                          nom: "capacité 2.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 142,
                              nom: "2.0",
                              description:
                                "capacité normal d'une personne dans Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 143,
                              nom: "2.1",
                              description:
                                "capacité d'une personne qui force sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 144,
                              nom: "2.2",
                              description:
                                "capacité d'une personne qui force très fort sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 145,
                              nom: "2.3",
                              description:
                                "capacité d'une personne qui est au dessus de la moyenne sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 146,
                              nom: "2.4",
                              description:
                                "capacité d'une personne qui est bien au dessus de la moyenne sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 147,
                              nom: "2.5",
                              description:
                                "capacité d'une personne qui est très bon dans le domaine sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 148,
                              nom: "2.6",
                              description:
                                "capacité d'une personne qui est vraiment très bon dans le domaine sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 149,
                              nom: "2.7",
                              description:
                                "capacité limité pour quelqu'un qui n'est pas confirmé dans le monde d'utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 611,
                          nom: "capacité 3.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 150,
                              nom: "3.0",
                              description:
                                "capacité d'une personne confirmé sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 151,
                              nom: "3.1",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 152,
                              nom: "3.2",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 153,
                              nom: "3.3",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 154,
                              nom: "3.4",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 155,
                              nom: "3.5",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 156,
                              nom: "3.6",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 157,
                              nom: "3.7",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 612,
                          nom: "capacité 4.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 158,
                              nom: "4.0",
                              description: "capacité très puissance sur Utopia",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 159,
                              nom: "4.1",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 160,
                              nom: "4.2",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 161,
                              nom: "4.3",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 162,
                              nom: "4.4",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 163,
                              nom: "4.5",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 164,
                              nom: "4.6",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 165,
                              nom: "4.7",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 613,
                          nom: "capacité 5.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 166,
                              nom: "5.0",
                              description: "capacité d'une personne pgm",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 167,
                              nom: "5.1",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 168,
                              nom: "5.2",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 169,
                              nom: "5.3",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 170,
                              nom: "5.4",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 171,
                              nom: "5.5",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 172,
                              nom: "5.6",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 173,
                              nom: "5.7",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 614,
                          nom: "capacité 6.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 174,
                              nom: "6.0",
                              description: "capacité d'une personne golden",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 175,
                              nom: "6.1",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 176,
                              nom: "6.2",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 177,
                              nom: "6.3",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 178,
                              nom: "6.4",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 179,
                              nom: "6.5",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 180,
                              nom: "6.6",
                              description: null,
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 181,
                              nom: "6.7",
                              description:
                                "capacité limite pour quelqu'un de non divin",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        },
                        {
                          id: 615,
                          nom: "capacité 7.X",
                          description: null,
                          grappeParent: null,
                          grappeEnfants: [
                            {
                              id: 182,
                              nom: "7.0",
                              description: "capacité de niveau divin",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 183,
                              nom: "7.1",
                              description: "capacité de niveau archange",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 184,
                              nom: "7.2",
                              description:
                                "capacité de niveau adorateur/acolyte",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 185,
                              nom: "7.3",
                              description:
                                "capacité de niveau seraphin/sephiroth ",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 186,
                              nom: "7.4",
                              description: "capacité de niveau cavaliers",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 187,
                              nom: "7.5",
                              description: "capacité de niveau rois mages",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 188,
                              nom: "7.6",
                              description:
                                "capacité juste au dessous du maximum",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            },
                            {
                              id: 189,
                              nom: "7.7",
                              description: "capacité au maximum possible",
                              grappeParent: null,
                              grappeEnfants: null,
                              type: null,
                              idees: []
                            }
                          ],
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 597,
                  nom: "composante",
                  description: "les composantes sont un découpage ",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 505,
                      nom: "la forme",
                      description:
                        "la forme de l'attaque est ce qu'elle cherche à faire",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 506,
                      nom: "le déclenchement",
                      description: "comment se déclenche une action",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 98,
                          nom: "par triggers",
                          description:
                            "le déclenchement se fait par un mécanisme à retardement ou sous condition",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 99,
                          nom: "instantanée",
                          description: "le déclenchement se fait tout de suite",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 100,
                          nom: "par incantation",
                          description:
                            "le déclenchement se faire après une incantation précise",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 101,
                          nom: "par etat de persona",
                          description:
                            "le déclenchement se fait en fonction de la persona qui nous possède",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 102,
                          nom: "par limit",
                          description:
                            "le déclenchement se fait au péril de sa vie, comme une ultime attaque avant la mort",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 507,
                      nom: "la cible",
                      description: "quel est la cible de l'action",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 92,
                          nom: "le corps",
                          description:
                            "on peut attaquer le corps physique de quelqu'un, c'est à dire faire des dégats sa partie externe",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 93,
                          nom: "le corps interne",
                          description:
                            "on peut attaquer une personne de l'intérieur, les dégâts sont internes et ne se voient pas forcément",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 94,
                          nom: "l'âme",
                          description:
                            "on peut attaquer l'âme de quelqu'un plutôt que son physique, cela attaque l'âme qui commande le corps",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 95,
                          nom: "le persona",
                          description:
                            "on peut attaquer le persona que représente quelqu'un, ainsi on fait perdre ses bonus",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 96,
                          nom: "le psychique",
                          description:
                            "on peut attaquer quelqu'un sans forcément de façon matériel, cela joue sur la psychologie",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 97,
                          nom: "othercorpse",
                          description:
                            "on peut attaquer le corps réel de la personne , si jamais elle est pas du même monde",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 634,
                  nom: "numérologie",
                  description: null,
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 498,
                      nom: "source",
                      description: "il existe deux sources possibles",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: [
                        {
                          id: 290,
                          nom: "diable",
                          description: "le diable représente le mal",
                          organisation: null,
                          grappes: []
                        },
                        {
                          id: 289,
                          nom: "dieu",
                          description: "le dieu représente le bien",
                          organisation: null,
                          grappes: []
                        }
                      ]
                    },
                    {
                      id: 499,
                      nom: "domination",
                      description: "il existe 3 formes de dominations",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 70,
                          nom: "physique",
                          description:
                            "la personne sous domination a ses capacités qui diminuent ",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 71,
                          nom: "psychologique",
                          description:
                            "la personne sous domination se voit envahie par des sentiments opposés à ce qui fait sa force",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 72,
                          nom: "totale",
                          description:
                            "la personne sous domination totale perd connaissance",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 500,
                      nom: "instinct",
                      description: "il existe 4 instincts",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 73,
                          nom: "de tueur",
                          description:
                            "l'instinct de tueur améliore l'attaque de façon significative",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 74,
                          nom: "maternel/paternel",
                          description:
                            "l'instinct maternel/paternel améliore la défense de façon significative",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 75,
                          nom: "de survie",
                          description:
                            "l'instinct de survie améliore la vitesse de façon significative",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 76,
                          nom: "de conservation",
                          description:
                            "l'instinct de conservation améliore la la résistance de façon significative",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 501,
                      nom: "sens",
                      description: "il existe 5 sens",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 77,
                          nom: "la vue",
                          description: "le vue est le send qui permet de voir",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 78,
                          nom: "l’ouïe",
                          description:
                            "l’ouïe est le le sens qui permet d'entendre",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 79,
                          nom: "l'odorat",
                          description:
                            "l'odorat est le sens qui permet de sentir une odeur",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 80,
                          nom: "le toucher",
                          description:
                            "le toucher est le sens qui permet de sentir un contact",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 81,
                          nom: "le gout",
                          description:
                            "le gout est le sens qui permet de sentir un aliment",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 503,
                      nom: "les 6 corps",
                      description:
                        "les 6 corps permet de changer d'enveloppe charnel pour devenir plus puissant",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 82,
                          nom: "corps aux limites",
                          description:
                            "lorsque le corps est faible, c'est le power up de la dernière chance",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 83,
                          nom: "corps en transe",
                          description:
                            "lorsque la personne prend plaisir à se batttre, c'est le power du plaisir",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 84,
                          nom: "le corps en berserk",
                          description:
                            "au prix de sa conscience, le corps devient rouge et grossit pour obtenir un gros power up",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 86,
                          nom: "corps cherubin / diablotin",
                          description:
                            "le corps change de plan, à celui de divin, le corps redevient pure comme celui d'un enfant, sa taille, sans sexe et donc androgyne",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 87,
                          nom: "corps seraphins / sephiroth",
                          description:
                            "le corps devient sensible à l'affinité opposé à son camps, le corps devient celui avec des ailes blanches ou noires et un halo ou des cornes apparaissent",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 88,
                          nom: "corps divin",
                          description:
                            "le corps divin devient immatériel et n'est sensible qu'aux attaques de même niveau",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        }
                      ],
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                }
              ],
              type: null,
              idees: []
            },
            {
              id: 592,
              nom: "cosmologie",
              description:
                "la cosmologie regroupe la création du monde et sa destruction",
              grappeParent: null,
              grappeEnfants: [
                {
                  id: 488,
                  nom: "espérance",
                  description: "l'espérance de vie ",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 43,
                      nom: "éphémère",
                      description:
                        "une espérance de vie éphémère est de 1 jounée irl soit 7 jours ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 42,
                      nom: "semi éphémère",
                      description:
                        "une espérance de vie semi éphémère est de 7 jours irl soit 49 jours ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 41,
                      nom: "très courte",
                      description:
                        "une espérance de vie très courte est de 1 mois irl soit 7 mois ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 40,
                      nom: "semi très courte",
                      description:
                        "une espérance de vie semi très courte est de 7 mois irl soit 49 mois ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 39,
                      nom: "courte",
                      description:
                        "une espérance de vie courte est de 1 ans irl soit 7 ans ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 38,
                      nom: "semi courte",
                      description:
                        "une espérance de vie semi courte est de 7 ans irl donc 49 ans ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 36,
                      nom: "normal ig",
                      description:
                        "une personne ayant une espérance de vie normal ig peut vivre 777 ans soit 111 ans irl",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 37,
                      nom: "normal irl",
                      description:
                        "l'espérance normal irl s'est stabilisé à 77 ans soit 539 ans ig",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 35,
                      nom: "immortel",
                      description:
                        "un immortel est souci aux 3 règles possibles d'immortalité :\r\n- non souci au temps\r\n- soumise à condition (perte du premier amour, trahision d'un précepte)\r\n- immortel mais fragile (noobs ne vieillisse pas mais meurt facilement)",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 512,
                  nom: "time",
                  description: "échelle de temps",
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 251,
                      nom: "une seconde dystropia <-> 7 secondes Utopia",
                      description: "une seconde dystropia <-> 7 seconde Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 252,
                      nom: "une minute dystropia <-> 7 minutes Utopia",
                      description: "une minute dystropia <-> 7 minutes Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 253,
                      nom: "1 heure dystropia <->7 heures Utopia",
                      description: "1 heure dystropia <-> 7 heures Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 254,
                      nom: "3 heures dystropia <-> une journée Utopia",
                      description: "3 heures dystropia <-> une journée Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 255,
                      nom: "21 heures = 1 journée dystropia <-> une semaine Ut",
                      description:
                        "21 heures = 1 journée dystropia <-> une semaine Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 256,
                      nom: "une semaine dystropia <-> un mois = 7 semaines  Ut",
                      description:
                        "une semaine dystropia <-> un mois = 7 semaines  Utopia ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 257,
                      nom: "1 mois = 7 semaines dystropia =  7 mois = une anné",
                      description:
                        "1 mois = 7 semaines dystropia =  7 mois = une année Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 258,
                      nom: "un an = 7 mois Dystropia = 7 ans Utopia",
                      description: "un an = 7 mois Dystropia = 7 ans Utopia",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 259,
                      nom: "un siècle Dystropia <-> 7 siècle Utopia",
                      description: null,
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 530,
                  nom: "genre",
                  description: null,
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 381,
                      nom: "masculin",
                      description: "du genre masculin",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 382,
                      nom: "feminin",
                      description: "du genre feminin",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 383,
                      nom: "androgine",
                      description: "qui est à la fois feminin et masculin",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 384,
                      nom: "Agenre",
                      description: "qui n'est ni masculin ni feminin",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                },
                {
                  id: 619,
                  nom: "cycle de la vie",
                  description: null,
                  grappeParent: null,
                  grappeEnfants: [
                    {
                      id: 2,
                      nom: "Genèse universel",
                      description:
                        "la genèse est un événement sensé créer une monde",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 621,
                      nom: "règne mineral",
                      description: "le choc des galaxies et des planètes",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 622,
                      nom: "règne élémentaire",
                      description: "le chocs des éléments périodiques ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 623,
                      nom: "règne végétal",
                      description: "règne des plantes, arbres ",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 624,
                      nom: "règne animal",
                      description: "le règne des dinosaures aux mobs",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 625,
                      nom: "règne humain",
                      description: "le règne des humains",
                      grappeParent: null,
                      grappeEnfants: [
                        {
                          id: 629,
                          nom: "genèse des humains",
                          description: "la genèse des humains sur terre",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: []
                        },
                        {
                          id: 213,
                          nom: "apocalypse des humains",
                          description:
                            "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                          grappeParent: null,
                          grappeEnfants: null,
                          type: null,
                          idees: [
                            {
                              id: 17,
                              nom: "Sterilité",
                              description: "reproduction très limite",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 18,
                              nom: "Pollution",
                              description: "pollution extrème",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 19,
                              nom: "Famine",
                              description: "manque de nourriture",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 20,
                              nom: "Catastrophe",
                              description: "catastrophe naturelle",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 21,
                              nom: "Guerre",
                              description: "guerre civile",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 22,
                              nom: "Maladie",
                              description: "toutes sortes de maladie",
                              organisation: null,
                              grappes: []
                            },
                            {
                              id: 23,
                              nom: "ras de marée",
                              description: "ras de marée impressionnant",
                              organisation: null,
                              grappes: []
                            }
                          ]
                        }
                      ],
                      type: null,
                      idees: []
                    },
                    {
                      id: 626,
                      nom: "règne des robots",
                      description: "le règne des machines",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 627,
                      nom: "règne des persona",
                      description: "le règne des influences matérialisés",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 628,
                      nom: "règne spectrale",
                      description: "le règnes des sans matière",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    },
                    {
                      id: 1,
                      nom: "Apocalypse universel",
                      description:
                        "l'apocalypse est un événement sensé détruire le monde",
                      grappeParent: null,
                      grappeEnfants: null,
                      type: null,
                      idees: []
                    }
                  ],
                  type: null,
                  idees: []
                }
              ],
              type: null,
              idees: []
            }
          ],
          type: null,
          idees: []
        }
      ],
      idee: {
        id: 1,
        nom: "Dystropia",
        description: "Le monde du réel, le notre qui a subi l'apoalypse",
        organisation: {
          mapIdees: {},
          ideeEsclaves: [],
          organisationFilles: [
            {
              id: 595,
              nom: "géographie",
              description: null,
              mapIdees: {},
              ideeEsclaves: [],
              grappes: [
                {
                  id: 3,
                  nom: "pays",
                  description: "un pays represente une nation",
                  mapIdees: {},
                  ideeEsclaves: [
                    {
                      id: 3,
                      nom: "Asie",
                      description: "l'Asie",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 97,
                            nom: "Assassin",
                            description:
                              "les assassins sont la force armées des mafias",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 238,
                                    nom: "connexion par les rêves",
                                    description:
                                      "pendant la période de sommeil, notre corps est plus sensible à l'éther et dont permet de passer dans un autre monde",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 17,
                                    nom: "Sterilité",
                                    description: "reproduction très limite",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 28,
                                    nom: "Femmes",
                                    description: "les femmes gouvernent",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 33,
                                    nom: "Etre fertile",
                                    description: "être fertile pour procréer",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 41,
                                    nom: "Hommes stériles",
                                    description:
                                      "Les hommes stériles sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 79,
                                    nom: "pekin",
                                    description: "région de pekin",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 80,
                                    nom: "Shangaï",
                                    description: "région de shangaï",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 81,
                                    nom: "Bombay",
                                    description: "région de bombay",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 82,
                                    nom: "Dehli",
                                    description:
                                      "région où était la ville de new dehli",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 83,
                                    nom: "Calcutta",
                                    description: "région de calcutta",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 84,
                                    nom: "Seoul",
                                    description: "région de la corée",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 85,
                                    nom: "Jakarta",
                                    description:
                                      "région de la ville de jarkata",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 217,
                                    nom: "Asiatique",
                                    description:
                                      "peuple plus très nombreux ayant subi de plein fouet l'apocalypse",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 218,
                                    nom: "Hindous",
                                    description:
                                      "peuple ancienne indiens qui ont réussi à rester plus nombreux malgré l'apocalypse",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 219,
                                    nom: "Tibetin",
                                    description:
                                      "peuple pacifiste qui ont pratiquement disparu tellement ils étaient hai pour avoir échappé à l'apoalypse",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 4,
                      nom: "îles indépendantes",
                      description: "les îles indépendantes",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 99,
                            nom: "Aucune police",
                            description:
                              "aucune police n'est nécessaire dans un lieu paradisiaque",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 20,
                                    nom: "Catastrophe",
                                    description: "catastrophe naturelle",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 23,
                                    nom: "ras de marée",
                                    description: "ras de marée impressionnant",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 24,
                                    nom: "Aucun gouvernement",
                                    description: "personne ne gouverne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 39,
                                    nom: "Immigré",
                                    description:
                                      "Les personnes voulants entrer sur l'île",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 66,
                                    nom: "La réunion",
                                    description: "l'île de la réunion",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 65,
                                    nom: "Australie",
                                    description: "l'île de l'australie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 67,
                                    nom: "Japon",
                                    description: "l'île de du japon",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 69,
                                    nom: "Jamaïque",
                                    description: "l'île de de la jamaïque",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 68,
                                    nom: "Madagascar",
                                    description: "l'île de de madagascar",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 70,
                                    nom: "Polynésie",
                                    description: "c'est un regroupement d'îles",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 71,
                                    nom: "Cuba",
                                    description: "l'île de cuba",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 224,
                                    nom: "Maori",
                                    description:
                                      "peuple attaché au principe d'île isolé",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 223,
                                    nom: "Rasta",
                                    description:
                                      "peuple assez cool avec une philophie de vie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 5,
                      nom: "Afrique",
                      description: "l'afrique",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 94,
                            nom: "Guerrier Masaï",
                            description:
                              "les guerriers masaï sont la force des lois religieuses",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 241,
                                    nom: "connexion par la méditation",
                                    description:
                                      "la méditation permet simplement de capter les flux éthériques sans artifice ni aides",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 20,
                                    nom: "Catastrophe",
                                    description: "catastrophe naturelle",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 25,
                                    nom: "Religieux",
                                    description: "les religieux gouvernent",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 31,
                                    nom: "Emplacement",
                                    description: "l'emplacement géographique",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 44,
                                    nom: "Athés",
                                    description:
                                      "Les gens sans réligion sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 45,
                                    nom: "Egypte",
                                    description:
                                      "la region où était l'ancienne égypte",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 46,
                                    nom: "Algérie",
                                    description:
                                      "la region où était l'ancienne algérie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 47,
                                    nom: "Congo",
                                    description: "la region où était le congo",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 48,
                                    nom: "Arabie saoudite",
                                    description:
                                      "la region où était l'arabie saoudite",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 49,
                                    nom: "Nigéria",
                                    description:
                                      "la region où était le nigéria",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 50,
                                    nom: "Ethiopie",
                                    description:
                                      "la region où était l'éthiopie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 51,
                                    nom: "Botswana",
                                    description:
                                      "la region où était le botswana",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 209,
                                    nom: "Israelien",
                                    description:
                                      "peuple ayant été massacré par les autres peuples pour des raisons réligieuses",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 208,
                                    nom: "Noir",
                                    description:
                                      "peuple ayant la couleur sombre",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 207,
                                    nom: "Arabe",
                                    description:
                                      "peuple qui est très réligieux et roi de l'afrique",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 6,
                      nom: "Urss",
                      description: "l'U.R.S.S",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 100,
                            nom: "KGB",
                            description:
                              "le KGB est la force armée des communistes",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 239,
                                    nom: "connexion en frôlant la mort",
                                    description:
                                      "parfois en frôlant la mort, le corps et l'esprit résiste et trouve par l'ether un échappatoire, qui crée une sorte de coma où l'on voit une lumière blanche qui mène à un autre monde",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 19,
                                    nom: "Famine",
                                    description: "manque de nourriture",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 30,
                                    nom: "Communisme",
                                    description: "le communisme",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 37,
                                    nom: "Nourriture",
                                    description: "la nourriture",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 38,
                                    nom: "Gros",
                                    description: "Les gros sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 72,
                                    nom: "Stalingrad",
                                    description:
                                      "la région où était la ville de stanlingrad autrefois",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 73,
                                    nom: "SIbérie",
                                    description: "la région sibérienne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 74,
                                    nom: "Roumanie",
                                    description:
                                      "la région où était la roumanie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 76,
                                    nom: "Bulgarie",
                                    description:
                                      "la région où était la bulgarie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 75,
                                    nom: "Pologne",
                                    description:
                                      "la région où était la Pologne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 78,
                                    nom: "poutinegrad",
                                    description:
                                      "région où on érigea une ville en hommage de poutine",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 77,
                                    nom: "Leningrad",
                                    description:
                                      "région de là où était Saint-Pétersbourg",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 226,
                                    nom: "Albinos",
                                    description:
                                      "peuple au cheveu blanc et aux yeux rouges",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 227,
                                    nom: "Turc",
                                    description:
                                      "peuple ayant presque disparu à cause de la famine",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 225,
                                    nom: "Aryen",
                                    description:
                                      "peuple aux cheveux bloncs et à la peau clair",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 7,
                      nom: "Amerique Sud",
                      description: "l'amérique du sud",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 96,
                            nom: "Farcs",
                            description:
                              "les farcs était l'ancienne force armée avant que les voyous la détruisent",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 242,
                                    nom: "connexion par les drogues",
                                    description:
                                      "la prise de drogues permet une meilleure perception des flux éthérique comme si le fait d'être sous drogue permettait de voir réellement les flux ",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 22,
                                    nom: "Maladie",
                                    description: "toutes sortes de maladie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 27,
                                    nom: "Voyous",
                                    description: "les voyous gouvernent",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 35,
                                    nom: "Santée",
                                    description: "sa bonne santé",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 36,
                                    nom: "Santé",
                                    description: "les médicaments",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 42,
                                    nom: "Malades",
                                    description:
                                      "Les gens maladent sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 87,
                                    nom: "Favelas de medellin",
                                    description: "région de medellin",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 86,
                                    nom: "Favelas de rio",
                                    description: "région de rio de janeiro",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 88,
                                    nom: "Favelas de mexico",
                                    description: "région de la ville de mexico",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 89,
                                    nom: "Favelas de lima",
                                    description: "région de la ville de lima",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 90,
                                    nom: "Favelas de santiago",
                                    description:
                                      "région de la ville de santiago",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 91,
                                    nom: "Favelas de caracas",
                                    description:
                                      "région de la ville de caracas",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 92,
                                    nom: "Favelas de buenos aires",
                                    description:
                                      "région de la ville de buenos aires",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 214,
                                    nom: "Brésilien",
                                    description:
                                      "peuple ayant le sens du rythme et la fête mais pas de la guerre",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 215,
                                    nom: "Latinos",
                                    description:
                                      "peuple latin qui aime la guerre et les conflits",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 216,
                                    nom: "Gothiks",
                                    description:
                                      "peuple ayant un atrait pour la mort et les drames",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 8,
                      nom: "Europe",
                      description: "l'europe",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 98,
                            nom: "Mousquetaire",
                            description:
                              "les mousquetaires sont la force armée du riche gouvernement",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 243,
                                    nom: "connexion par les cheveux",
                                    description:
                                      "une injection dans la boite crânienne permet de mieux capter les flux éthérique comme si les cheveux agissaient tels des fils de connexion",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 18,
                                    nom: "Pollution",
                                    description: "pollution extrème",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 29,
                                    nom: "Riches",
                                    description: "les riches gouvernent",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 34,
                                    nom: "Etage dans la tour",
                                    description:
                                      "sa position vis à vis du nuage de pollution",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 40,
                                    nom: "Pauvre",
                                    description: "Les pauvres sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 61,
                                    nom: "Tour de londres",
                                    description:
                                      "la tour où était la grande bretagne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 64,
                                    nom: "Tour de stockholm",
                                    description:
                                      "la tour où était la suède et la norvège",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 62,
                                    nom: "Tour de rome",
                                    description: "la tour où était l'italie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 60,
                                    nom: "Tour de berlin",
                                    description: "la tour où était l'allemagne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 59,
                                    nom: "Tour de paris",
                                    description: "la tour où était la france",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 63,
                                    nom: "Tour de madrid",
                                    description: "la tour où était l'espagne",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 93,
                                    nom: "Tour de portugal",
                                    description:
                                      "la tour où était le portugal, actuellement détruite",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 220,
                                    nom: "Eurasien",
                                    description:
                                      "peuple banquier du monde et qui le tient entre ses billets",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 222,
                                    nom: "Breton",
                                    description:
                                      "peuple farouche et combattant qui ont refusé la mondialisation et l'élévation",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 221,
                                    nom: "Saxon",
                                    description:
                                      "peuple banquier du monde et qui le tient entre ses billets",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    },
                    {
                      id: 9,
                      nom: "Amerique nord",
                      description: "l'amérique du nord",
                      organisation: {
                        mapIdees: {},
                        ideeEsclaves: [
                          {
                            id: 95,
                            nom: "FBI",
                            description:
                              "le FBI est la force armée des conglomérats",
                            organisation: null,
                            grappes: [],
                            liaison: null,
                            grappe: null
                          }
                        ],
                        organisationFilles: [
                          {
                            id: 576,
                            nom: "otherside",
                            description:
                              "otherside est la partie du projet qui gère tout ce qui se rapporte à la connexion entre les différentes dimensions",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 44,
                                nom: "mode de connexion",
                                description:
                                  "un mode de connexion est une façon de passer d'un monde à un autre",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 240,
                                    nom: "connexion par trou de ver",
                                    description:
                                      "des machines permets de créer des sortes de passages dymensionnelles",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 625,
                            nom: "règne humain",
                            description: "le règne des humains",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 213,
                                nom: "apocalypse des humains",
                                description:
                                  "la dernière apocalypse connu, celle qui a mis fin au règne des humains",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 21,
                                    nom: "Guerre",
                                    description: "guerre civile",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 578,
                            nom: "politique",
                            description:
                              "politique est la partie du projet qui gère la sphère politique et jeux de pouvoir",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 5,
                                nom: "mode de gouvernement",
                                description:
                                  "le mode de gouvernement représente la façon dont gouverne ceux au pouvoir",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 26,
                                    nom: "Conglomérat",
                                    description: "les entreprises gouvernent",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 55,
                                nom: "or d'un pays",
                                description:
                                  "l'or d'un pays représente ce qui compte le plus dans un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 32,
                                    nom: "Armes",
                                    description: "les armes possèdées",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 56,
                                nom: "persecution",
                                description: "il y a des persécutions partout",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 43,
                                    nom: "Sans camps",
                                    description:
                                      "Les gens sans camps sont persécutés",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 595,
                            nom: "géographie",
                            description: null,
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 4,
                                nom: "region",
                                description:
                                  "une region représente une partie d'un pays",
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 52,
                                    nom: "Old York",
                                    description:
                                      "la region où était l'ancienne New York",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 53,
                                    nom: "Los Diablos",
                                    description:
                                      "la region où était l'ancienne ville de los angeles",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 55,
                                    nom: "Montreal",
                                    description:
                                      "la region où est la ville de montreal",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 54,
                                    nom: "Las vegas",
                                    description:
                                      "la region où était l'ancienne ville de las vegas",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 57,
                                    nom: "Toronto",
                                    description:
                                      "la region où est la ville de toronto",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 56,
                                    nom: "Québec",
                                    description: "la region du québéc",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 58,
                                    nom: "Miami",
                                    description:
                                      "la region où est la ville de Miami",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          },
                          {
                            id: 586,
                            nom: "être vivant",
                            description: "être vivant est sur les être vivants",
                            mapIdees: {},
                            ideeEsclaves: [],
                            grappes: [
                              {
                                id: 365,
                                nom: "vivant sur dystropia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 211,
                                    nom: "Métisse",
                                    description:
                                      "peuple ayant la couleur café et roi de l'amerique nord",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 213,
                                    nom: "Quebecois",
                                    description:
                                      "peuple ayant tenté de migrer ailleurs et aurait échoué",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  },
                                  {
                                    id: 212,
                                    nom: "Canadien",
                                    description:
                                      "peuple de bûcheron qui vivent dans le nord du pays",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              },
                              {
                                id: 366,
                                nom: "vivant sur Utopia",
                                description: null,
                                mapIdees: {},
                                ideeEsclaves: [
                                  {
                                    id: 183,
                                    nom: "indiens d'amérique",
                                    description:
                                      "peuple immigrant qui a fui l'éradication afin de trouver un lieu plus propice à leur mode de vie",
                                    organisation: null,
                                    grappes: [],
                                    liaison: null,
                                    grappe: null
                                  }
                                ],
                                grappes: []
                              }
                            ]
                          }
                        ]
                      },
                      grappes: [],
                      liaison: null,
                      grappe: null
                    }
                  ],
                  grappes: []
                }
              ]
            }
          ]
        },
        grappes: []
      }
    };
  }

  render() {
    return (
      <div className="Accueil">
        <BarLeft />
      </div>
    );
  }
}

export default Accueil;
