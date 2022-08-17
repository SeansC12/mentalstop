function getBestFit(x, y) {
  // This function only generates gradient and y-intercept, see getLineOfBestFit for actual points
  const dataArrLength = x.length

  // Get mean of x and y values of all points
  let sumX = 0
  let meanX = 0
  let sumY = 0
  let meanY = 0
  for (let i = 0; i < dataArrLength; i++) {
      sumX += x[i]
      sumY += y[i]
  }
  meanX = sumX / dataArrLength
  meanY = sumY / dataArrLength

  // Get total deviation for x and y values from mean and prepare for finding gradient
  let totalDevXSquare = 0
  let totalDevXY = 0
  for (let i = 0; i < dataArrLength; i++) {
      const eachX = x[i]
      const eachY = y[i]
      totalDevXSquare += Math.pow((eachX - meanX), 2)
      totalDevXY += (eachX - meanX) * (eachY - meanY)
  }

  // Get gradient
  const gradient = totalDevXY / totalDevXSquare

  // Get y-intercept
  const interceptY = meanY - gradient * meanX

  return [gradient, interceptY]
}

function getLineOfBestFit(x, y) {
  // This function only returns y values -- x values will stay the same
  const dataArrLength = x.length
  const _a = getBestFit(x, y), gradient = _a[0], interceptY = _a[1]

  // Generate linear regression points
  let bestFitY = []
  for (let i = 0; i < dataArrLength; i++) {
      const eachX = x[i]
      const newY = gradient * eachX + interceptY
      bestFitY.push(newY)
  }
  
  return bestFitY
}

function isPositiveChange(x, y) {
  const gradient = getBestFit(x, y)[0]
  return gradient > 0
}