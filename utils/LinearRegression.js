export function getBestFit(coordinates) {
  // This function only generates gradient and y-intercept, see getLineOfBestFit for actual points
  const dataArrLength = coordinates.length;

  // Get mean of x and y values of all points
  let sumX = 0;
  let meanX = 0;
  let sumY = 0;
  let meanY = 0;
  for (let i = 0; i < dataArrLength; i++) {
    const eachCoordinate = coordinates[i];
    sumX += i;
    sumY += eachCoordinate[1];
  }
  meanX = sumX / dataArrLength;
  meanY = sumY / dataArrLength;

  // Get total deviation for x and y values from mean and prepare for finding gradient
  let totalDevXSquare = 0;
  let totalDevXY = 0;
  for (let i = 0; i < dataArrLength; i++) {
    const eachCoordinate = coordinates[i];
    const eachX = i;
    const eachY = eachCoordinate[1];
    totalDevXSquare += Math.pow(eachX - meanX, 2);
    totalDevXY += (eachX - meanX) * (eachY - meanY);
  }

  // Get gradient
  const gradient = totalDevXY / totalDevXSquare;

  // Get y-intercept
  const interceptY = meanY - gradient * meanX;

  return [gradient, interceptY];
}

export function getLineOfBestFit(coordinates) {
  // This function only returns y values -- x values will stay the same
  const dataArrLength = coordinates.length;

  if (coordinates.length === 0) return []
  if (coordinates.length === 1) return [0, coordinates[0][1]]

  const _a = getBestFit(coordinates),
    gradient = _a[0],
    interceptY = _a[1];

  // Generate linear regression points
  const bestFitCoordinates = [];
  for (let i = 0; i < dataArrLength; i++) {
    const eachCoordinate = coordinates[i];
    const displayX = eachCoordinate[0];
    const eachX = i;
    const newY = gradient * eachX + interceptY;
    bestFitCoordinates.push([displayX, newY]);
  }

  return bestFitCoordinates;
}

export function isPositiveChange(coordinates) {
  const gradient = getBestFit(coordinates)[0];
  return gradient > 0;
}
