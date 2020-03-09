export const levels = [
  ...parseExercices(
    `154;68;1334;304;Sémaphore
    128;144;1518;300;Cheminée
    108;108;1660;316;Moulin
    98;98;1796;326;Église
    82;132;1940;294;Tour
    94;126;2120;300;Château d'eau
    94;174;1314;430;Phare
    90;110;1462;496;Carburant
    112;114;1598;492;Port de plaisance
    106;112;1738;492;Port de pêche
    128;116;1864;490;Pêche interdite
    100;114;2056;486;Mouillage autorisé
    108;114;2172;482;Mouillage interdit
    168;150;1316;994;Rocher découvert
    138;88;1494;1052;Roche isolée
    92;86;1666;1058;Roche à fleur d'eau
    60;64;1826;1076;Roche submergé
    304;84;1986;1130;Épave`,
    "Amer",
    "memento-cotier-1.jpg"
  ),
  ...parseExercices(
    `68;168;1336;716;Bâbord
    66;160;1440;722;Tribord
    110;190;1544;694;Danger isolé
    72;180;1688;706;Marque spéciale
    104;180;1780;704;Eaux saines
    80;192;1890;694;Nord
    74;194;1994;690;Sud
    96;194;2080;692;Ouest
    100;192;2190;692;Est`,
    "Balises sur carte",
    "memento-cotier-1.jpg"
  ),
  ...parseExercices(
    `74;116;214;2052;Bouée de chenal
    84;190;326;1978;Bouée fuseau
    70;226;440;1948;Bouée charpente
    68;208;562;1962;Espar
    134;194;658;1974;Tourelle
    88;112;1078;1928;Marque bâbord
    114;118;1262;1930;Marque tribord
    88;194;1088;2384;Chenal préféré à tribord
    76;194;1278;2386;Chenal préféré à bâbord
    174;206;1868;1874;Cardinale Nord
    148;246;2092;1990;Cardinal Est
    144;242;1672;1990;Cardinale Ouest
    144;220;1882;2184;Cardinale Sud
    110;252;1658;2586;Danger isolé
    126;298;1828;2588;Eaux saines
    144;252;2074;2588;Marque spéciale
    160;216;2106;2976;Épave en cas d'urgence
    348;144;1646;3018;Dangers nouveaux graves
    78;98;212;2662;Marque bâbord de chenal traversier
    96;84;462;2682;Marque tribord de chenal traversier
    356;56;200;2930;Zone de beignade
    414;80;180;3096;Limite des 300m`,
    "Balises",
    "memento-cotier-1.jpg"
  ),
  ...parseExercices(
    `208;86;596;2618;Embarcation de sport ou de plaisance
    218;88;596;2760;Navire à moteur
    218;86;596;2882;Beignade
    218;82;596;2996;Véhicule Nautique à Moteur
    210;84;598;3132;Bassin de vitesse`,
    "Balises (Signalisation sur plage)",
    "memento-cotier-1.jpg"
  ),
  ...parseExercices(
    `128;171;729;2260;Au mouillage
    128;170;1083;2264;Échoué
    114;152;718;2586;Bateau pilote
    115;152;1096;2584;Remorqueur
    107;167;432;2909;Non maître de sa manœuvre
    109;168;755;2909;Capacité de manœuvre restreinte
    108;168;1116;2909;Handicapé par son tirant d'eau
    109;173;1587;2904;En action de pêche
    105;173;1899;2904;Voilier
    494;103;195;856;Plongée sous-marine`,
    "Marques de navires",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `105;166;323;2908;Non maître de sa manœuvre
    107;166;646;2908;Capacité de manœuvre restreinte
    104;166;1009;2908;Handicapé par son tirant d'eau
    110;172;1366;2904;Chalutier en action de pêche
    111;169;1476;2903;En action de pêche
    109;168;1790;2906;Voilier
    125;168;604;2263;Au mouillage
    123;165;960;2264;Échoué
    112;150;603;2586;Bâteau pilote
    114;152;865;2586;Remorqueur (remorque de - de 200m)
    112;149;984;2584;Remorqueur (remorque de + de 200m)
    69;103;721;856;Plongée sous-marine`,
    "Feux des navires",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `119;131;236;2276;- de 7m
    114;124;236;2420;- de 20m
    110;121;240;2559;- de 50m
    112;125;240;2696;+ 50m`,
    "Feux de route d'un navire à moteur",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `104;47;1331;1469;Grand frais
    108;48;1328;1520;Coup de vent
    100;56;1332;1570;Fort coup de vent
    117;53;1332;1623;Tempête`,
    "Échelle de Beaufort",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `137;43;1443;1471;Force 7
    165;46;1444;1522;Force 8
    224;45;1440;1573;Force 9
    120;43;1454;1628;Force 10`,
    "Échelle de Beaufort (2)",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `143;43;1713;1471;de 0.5 à 1.25m
    96;50;1713;1520;de 1.25 à 2.5m
    86;48;1712;1572;de 2.5 à 4m
    129;46;1712;1628;de 4 à 6m`,
    "Hauteur des vagues",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `194;47;1958;1469;Peu agitée
    208;44;1955;1524;Agitée
    172;45;1956;1575;Forte
    136;48;1958;1626;Très forte`,
    "État de la mer",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `64;186;211;440;Passage interdit - Danger grave
    73;188;328;440;Passage à sens unique - Attendre
    75;184;422;440;Passage à sens unique - Passer
    69;146;558;298;Passage à double sens
    67;142;712;303;Attendre les instructions
    177;127;590;521;Possibilité de passer hors chenal`,
    "Signaux portuaires",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `46;97;319;1125;Coup de vent Nord-Ouest
    50;102;452;1124;Coup de vent Nord-Est
    48;100;319;1290;Coup de vent Sud-Ouest
    44;102;453;1290;Coup de vent Sud-Est
    48;99;506;1500.6666870117188;Grand Frais`,
    "Signaux portuaires - Information météo nuit",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `47;74;264;1134;Coup de vent Nord-Ouest
    47;106;506;1122;Coup de vent Nord-Est
    49;72;263;1310;Coup de vent Sud-Ouest
    45;103;507;1291;Coup de vent Sud-Est
    50;99;451;1501.6666870117188;Grand frais`,
    "Signaux portuaires - Information météo jour",
    "memento-cotier-2.jpg"
  ),
  ...parseExercices(
    `135;29;965;2208.800048828125;Marque bâbord
    136;26;964;2242.800048828125;Marque bâbord
    137;26;963;2271.800048828125;Marque bâbord
    135;27;963;2302.800048828125;Marque bâbord
    136;33;1369;2208.800048828125;Marque tribord
    134;27;1370;2241.800048828125;Marque tribord
    136;28;1369;2272.800048828125;Marque tribord
    137;30;1370;2303.800048828125;Marque tribord
    132;29;1052;2660.800048828125;Chenal préféré à tribord
    131;28;1265;2662.800048828125;Chenal préféré à bâbord
    132;29;1886.8666381835938;2046.800048828125;Cardinale Nord
    131;29;2097.8666381835938;2199.800048828125;Cardinale Est
    130;28;1887.8666381835938;2369.800048828125;Cardinale Sud
    134;26;1675.8666381835938;2200.800048828125;Cardinale Ouest
    113;29;1651.8666381835938;2797.800048828125;Danger isolé
    110;25;1835.8666381835938;2786.800048828125;Eaux saines
    109;24;1837.8666381835938;2809.800048828125;Eaux saines
    109;22;1837.8666381835938;2833.800048828125;Eaux saines
    107;21;1838.8666381835938;2855.800048828125;Eaux saines
    109;25;2091.8666381835938;2780.800048828125;Marque spéciale
    108;24;2090.8666381835938;2804.800048828125;Marque spéciale`,
    "Signaux des balises",
    "memento-cotier-1.jpg"
  ),
  ...parseExercices(
    `113;34;201;373.3333282470703;Manoeuvre bâbord
    112;34;368;373.3333282470703;Manoeuvre tribord
    112;34;192;645.3333282470703;Manoeuvre arrière
    200;33;753;375.3333282470703;Dépassement sur bâbord
    195;34;754;571.3333282470703;Dépassement sur tribord
    199;35;921;463.3333282470703;Dépassement - Accord
    163;32;553;672.3333282470703;Avertissement - Doute sur les intentions
    110;35;582;712.3333282470703;Avertissement - J'approche d'un coude`,
    "Signaux sonores",
    "memento-cotier-3.jpg"
  ),
  ...parseExercices(
    `86;38;209;888.3333282470703;Avec erre
    158;37;212;932.3333282470703;Stoppé sans erre
    149;37;212;977.3333282470703;Privilégié / Remorqueur
    177;36;211;1026.3333282470703;Remorqué
    147;39;208;1066.3333282470703;Navire pilote
    286;63;864;839.3333282470703;Navire mouillé
    232;106;874;959.3333282470703;Navire échoué`,
    "Signaux sonores - Brume",
    "memento-cotier-3.jpg"
  ),
  {
    type: "text",
    question: "Signal de détresse",
    solution: "MAYDAY",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal d'urgence",
    solution: "PAN PAN",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal de sécurité",
    solution: "SECURITE",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si homme à la mer",
    solution: "MAYDAY",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si chavirage",
    solution: "MAYDAY",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si danger grave et imminent",
    solution: "MAYDAY",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si la sécurité du navire et/ou personne est en jeu",
    solution: "PAN PAN",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal s'il y a un blessé",
    solution: "PAN PAN",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si remorquage",
    solution: "PAN PAN",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si la météo s'aggrave",
    solution: "SECURITE",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: "Signal si on rencontre une épave",
    solution: "SECURITE",
    choices: ["MAYDAY", "PAN PAN", "SECURITE"],
  },
  {
    type: "text",
    question: 'Si on croise un signal "Plongée sous-marine", il faut passer à',
    solution: "100m",
    choices: ["50m", "100m", "150m", "200m"],
  },
  {
    type: "text",
    question: "Anticyclone",
    solution: "Hautes pressions",
    choices: ["Hautes pressions", "Basses pressions"],
  },
  {
    type: "text",
    question: "Dépression",
    solution: "Basses pressions",
    choices: ["Hautes pressions", "Basses pressions"],
  },
  {
    type: "text",
    question: "Brise thermique",
    solution: "De jour vers la terre, de nuit vers la mer",
    choices: [
      "De jour vers la terre, de nuit vers la mer",
      "De jour vers la mer, de nuit vers la terre",
    ],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal",
    solution: "De jour vers la terre, de nuit vers la mer",
    choices: [
      "De jour vers la terre, de nuit vers la mer",
      "De jour vers la mer, de nuit vers la terre",
    ],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - A",
    solution: "Alfa",
    choices: ["Alfa", "Abricot", "Alhambra", "Albert"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - B",
    solution: "Bravo",
    choices: ["Bravo", "Banana", "Bruno", "Beta"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - C",
    solution: "Charlie",
    choices: ["Charlie", "Cross", "Christ", "Casino"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - D",
    solution: "Delta",
    choices: ["Delta", "Dallas", "Druid", "Domino"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - E",
    solution: "Echo",
    choices: ["Echo", "Elephant", "Epsilon", "Eclipse"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - F",
    solution: "Foxtrot",
    choices: ["Foxtrot", "Fire", "Foret", "Fjord"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - G",
    solution: "Golf",
    choices: ["Golf", "Gamma", "Girafe", "Guitar"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - H",
    solution: "Hotel",
    choices: ["Hotel", "Horizon", "Hopital", "Hubert"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - I",
    solution: "India",
    choices: ["India", "Iota", "Indigo", "Italy"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - J",
    solution: "Juliett",
    choices: ["Juliett", "Jus", "Jews", "Jupiter"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - K",
    solution: "Kilo",
    choices: ["Kilo", "Koala", "Karma", "Kronos"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - L",
    solution: "Lima",
    choices: ["Lima", "Lion", "Light", "Lambda"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - M",
    solution: "Mike",
    choices: ["Mike", "Maman", "Micron", "Meter"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - N",
    solution: "November",
    choices: ["November", "Noel", "Nuage", "Noeud"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - O",
    solution: "Oscar",
    choices: ["Oscar", "Origin", "Omega", "October"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - P",
    solution: "Papa",
    choices: ["Papa", "Patrick", "Pi", "Pinguin"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - Q",
    solution: "Quebec",
    choices: ["Quebec", "Quinoa", "Quentin", "Quantity"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - R",
    solution: "Roméo",
    choices: ["Roméo", "River", "Red", "Root"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - S",
    solution: "Sierra",
    choices: ["Sierra", "Sigma", "Sample", "Samba"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - T",
    solution: "Tango",
    choices: ["Tango", "Trout", "Theta", "Tatcher"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - U",
    solution: "Uniform",
    choices: ["Uniform", "Unicorn", "Univer", "Uranium"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - V",
    solution: "Victor",
    choices: ["Victor", "Victory", "Velocity", "Viper"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - W",
    solution: "Whiskey",
    choices: ["Whiskey", "Washington", "Wagon", "Wapiti"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - X",
    solution: "X-ray",
    choices: ["X-ray", "Xavier", "Xylophone", "Xantia"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - Y",
    solution: "Yankee",
    choices: ["Yankee", "Yaourt", "Yacht", "Yack"],
  },
  {
    type: "text",
    question: "Alphabet phonétique internationnal - Z",
    solution: "Zula",
    choices: ["Zula", "Zorro", "Zumba", "Zeus"],
  },
  {
    type: "text",
    question: "Bulletin Météo Spécial",
    solution: "Sur le canal 16 à partir de force 7",
    choices: [
      "Sur le canal 8 à partir de force 7",
      "Sur le canal 8 à partir de force 8",
      "Sur le canal 16 à partir de force 7",
      "Sur le canal 16 à partir de force 8",
    ],
  },
]

/**
 *
 * @param {string} raw
 * @param {string} category
 */
function parseExercices(raw, category, image) {
  return raw
    .replace(/ {4}/g, "")
    .split("\n")
    .map(line => line.split(";"))
    .map(([width, height, left, top, solution]) => ({
      type: "image",
      width,
      height,
      left,
      top,
      solution,
      category,
      image,
    }))
}

export function getProposedChoices(level) {
  return level.type === "image"
    ? levels
        .filter(lvl => lvl !== level && lvl.category === level.category && lvl.solution !== level.solution)
        .sort(() => Math.random() - Math.random())
        .slice(0, 3)
        .concat(level)
        .map(lvl => lvl.solution)
        .sort(() => Math.random() - Math.random())
    : level.type === "text"
    ? level.choices
    : []
}