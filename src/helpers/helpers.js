// Map images
import skiSlopes from '../img/maps/ski-slopes.jpeg';
import yeOldeDodgeball from '../img/maps/ye-olde-dodgeball.jpeg';
import outerSpace from '../img/maps/outer-space.jpeg';
import fruitFight from '../img/maps/fruit-fight.jpeg';
import greatEscape from '../img/maps/great-escape.jpeg';
import siegeOfTroy from '../img/maps/siege-of-troy.jpeg';

// Map character locations
const skiSlopesCoords = [[0.855, 0.740], [0.490, 0.422], [0.070, 0.758], [0.318, 0.635]];
const yeOldeDodgeballCoords = [[0.961, 0.064], [0.282, 0.666], [0.295, 0.416], [0.921, 0.587]];
const outerSpaceCoords = [[0.405, 0.628], [0.295, 0.519], [0.779, 0.577], [0.071, 0.690]];
const fruitFightCoords = [[0.893, 0.665], [0.133, 0.849], [0.251, 0.500], [0.661, 0.560]];
const greatEscapeCoords = [[0.561, 0.428], [0.763, 0.532], [0.675, 0.294], [0.435, 0.306]];
const siegeOfTroyCoords = [[0.169, 0.844], [0.757, 0.763], [0.288, 0.135], [0.864, 0.821]];

class Character {
  constructor(id, coords) {
    this.id = id;
    this.coords = coords;
  }
};

class Map {
  constructor (id, name, img, difficulty, highScore, characterCoords) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.difficulty = difficulty;
    this.highScore = highScore;
    this.characters = [
      new Character('waldo', characterCoords[0]),
      new Character('wilma', characterCoords[1]),
      new Character('wizard', characterCoords[2]),
      new Character('odlaw', characterCoords[3]),
    ];
  };
};

const maps = [
  new Map('ski-slopes', 'SKI SLOPES', skiSlopes, 1, 49, skiSlopesCoords),
  new Map('ye-olde-dodgeball', 'YE OLDE DODGEBALL', yeOldeDodgeball, 2, 142, yeOldeDodgeballCoords),
  new Map('outer-space', 'OUTER SPACE', outerSpace, 3, 187, outerSpaceCoords),
  new Map('fruit-fight', 'FRUIT FIGHT', fruitFight, 4, 379, fruitFightCoords),
  new Map('great-escape', 'THE GREAT ESCAPE', greatEscape, 5, 561, greatEscapeCoords),
  new Map('siege-of-troy', 'SIEGE OF TROY', siegeOfTroy, 6, 505, siegeOfTroyCoords),
];

export default maps;

const clickCoords = (e) => {
  const mapX = e.target.offsetWidth;
  const mapY = e.target.offsetHeight;
  const clickX = e.nativeEvent.offsetX;
  const clickY = e.nativeEvent.offsetY;
  return [(clickX / mapX), (clickY / mapY)];
};

const withinRange = (guess, target) => {
  console.log(guess);
  console.log(target);
  const range = 0.02;
  if (guess[0] > (target[0] - range) && guess[0] < (target[0] + range)) {
    if (guess[1] > (target[1] - range) && guess[1] < (target[1] + range)) {
      return true;
    }
  }
  return false;
};

const checkGuess = (e, map) => {
  const guess = clickCoords(e);
  for (const char of map.characters) {
    if (withinRange(guess, char.coords)) { return char.id; }
  };
  return false;
};

export { checkGuess };
