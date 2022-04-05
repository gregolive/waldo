import skiSlopes from '../img/maps/ski-slopes.jpeg';
import yeOldeDodgeball from '../img/maps/ye-olde-dodgeball.jpeg';
import outerSpace from '../img/maps/outer-space.jpeg';
import fruitFight from '../img/maps/fruit-fight.jpeg';
import greatEscape from '../img/maps/great-escape.jpeg';
import siegeOfTroy from '../img/maps/siege-of-troy.jpeg';

class Map {
  constructor (id, name, img, difficulty, highScore) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.difficulty = difficulty;
    this.highScore = highScore;
  }
};

const maps = [
  new Map('ski-slopes', 'SKI SLOPES', skiSlopes, 1, 49),
  new Map('ye-olde-dodgeball', 'YE OLDE DODGEBALL', yeOldeDodgeball, 2, 142),
  new Map('outer-space', 'OUTER SPACE', outerSpace, 3, 187),
  new Map('fruit-fight', 'FRUIT FIGHT', fruitFight, 4, 379),
  new Map('great-escape', 'THE GREAT ESCAPE', greatEscape, 5, 561),
  new Map('siege-of-troy', 'SIEGE OF TROY', siegeOfTroy, 5, 505),
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
  const range = 0.1;
  if (guess[0] > (target[0] - range) && guess[0] < (target[0] + range)) {
    if (guess[1] > (target[1] - range) && guess[1] < (target[1] + range)) {
      return true;
    }
  }
  return false;
};

const checkGuess = (e) => {
  const guess = clickCoords(e);
  const characters = [{id: 'odlaw', pos: [0.318, 0.635]}];
  for (const char of characters) {
    if (withinRange(guess, char.pos)) { return char.id; }
  };
  return false;
};

export { checkGuess };
