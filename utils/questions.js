// code taken from https://stackoverflow.com/questions/11796810/calculate-trendline-and-predict-future-results

function LineFitter() {
  this.count = 0;
  this.sumX = 0;
  this.sumX2 = 0;
  this.sumXY = 0;
  this.sumY = 0;
}

LineFitter.prototype = {
  'add': function (x, y) {
    this.count++;
    this.sumX += x;
    this.sumX2 += x * x;
    this.sumXY += x * y;
    this.sumY += y;
  },
  'project': function (x) {
    var det = this.count * this.sumX2 - this.sumX * this.sumX;
    var offset = (this.sumX2 * this.sumY - this.sumX * this.sumXY) / det;
    var scale = (this.count * this.sumXY - this.sumX * this.sumY) / det;
    return offset + x * scale;
  }
};

function linearProject(data, x) {
  var fitter = new LineFitter();
  for (var i = 0; i < data.length; i++) {
    fitter.add(i, data[i]);
  }
  return fitter.project(x);
}

function isAboveProjected(data, useLastN, score) {
  // remove everything in data except the useLastN most recent items
  var dataToProject = data.slice(data.length - useLastN);
  return score > linearProject(dataToProject, dataToProject.count + 1);
}

function isPositiveChange(data, useLastN) {
  // remove everything in data except the useLastN most recent items
  var dataToProject = data.slice(data.length - useLastN);
  point1 = linearProject(dataToProject, dataToProject.count);
  point2 = linearProject(dataToProject, 0);
  // get the gradient
  var gradient = (point2 - point1) / (dataToProject.count);
  return gradient > 0;
}