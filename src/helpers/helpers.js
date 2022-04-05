const clickCoords = (e) => {
  const mapX = e.target.offsetWidth;
  const mapY = e.target.offsetHeight;
  const clickX = e.nativeEvent.offsetX;
  const clickY = e.nativeEvent.offsetY;
  return [(clickX / mapX * 1000), (clickY / mapY * 1000)];
};

const withinRange = (guessX, guessY, targetX, targetY) => {
  const range = 20;
  if (guessX > (targetX - range) && guessX < (targetX + range)) {
    if (guessY > (targetY - range) && guessY < (targetY + range)) {
      return true;
    }
  }
  return false;
};

const checkGuess = (e, characters) => {
  const [guessX, guessY] = clickCoords(e);
  for (const c of characters) {
    if (withinRange(guessX, guessY, c.x_coord, c.y_coord)) { return c; }
  };
  return false;
};

export { checkGuess };
