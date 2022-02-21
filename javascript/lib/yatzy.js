var Yatzy = function (d1, d2, d3, d4, _5) {
  this.dice = [];
  this.dice[0] = d1;
  this.dice[1] = d2;
  this.dice[2] = d3;
  this.dice[3] = d4;
  this.dice[4] = _5;
};

// keeping track of count, for each occurance of every value of dice
const calculateCount = function (d1, d2, d3, d4, d5) {
  var counts = [0, 0, 0, 0, 0, 0];

  for (var i = 0; i != arguments.length; ++i) {
    var die = arguments[i];
    counts[die - 1]++;
  }
  return counts;
};

// we dont need ones and twos functions because we can use just one func for all
yatzy.checkOccurance = function (d1, d2, d3, d4, d5, numberToCheck) {
  let sum = 0;
  const values = [d1, d2, d3, d4, d5];
  if (numberToCheck > 0 && numberToCheck < 7) {
    values.forEach((val) => val === numberToCheck && (sum += numberToCheck));
    return sum;
  } else console.log("Please select a number with-in range from one to six");
};

Yatzy.chance = function (d1, d2, d3, d4, d5) {
  var total = 0;
  const values = [d1, d2, d3, d4, d5];

  total = values.reduce((partialSum, a) => partialSum + a, 0);
  return total;
};

Yatzy.yatzy = function () {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (i = 0; i != 6; i++) if (counts[i] == 5) return 50;
  return 0;
};

Yatzy.score_pair = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (at = 0; at != 6; at++) if (counts[6 - at - 1] >= 2) return (6 - at) * 2;
  return 0;
};

Yatzy.two_pair = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (i = 0; i < 6; i += 1)
    if (counts[6 - i - 1] >= 2) {
      n++;
      score += 6 - i;
    }
  if (n == 2) return score * 2;
  else return 0;
};

Yatzy.four_of_a_kind = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (i = 0; i < 6; i++) if (counts[i] >= 4) return (i + 1) * 4;
  return 0;
};

Yatzy.three_of_a_kind = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (i = 0; i < 6; i++) if (counts[i] >= 3) return (i + 1) * 3;
  return 0;
};

Yatzy.smallStraight = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (var i = 0; i < 5; i++) {
    if (counts[i] == 1) return 15;
  }
  return 0;
};

Yatzy.largeStraight = function (d1, d2, d3, d4, d5) {
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (var i = 0; i < 5; i++) {
    if (counts[i] == 1) return 20;
  }
  return 0;
};

Yatzy.fullHouse = function (d1, d2, d3, d4, d5) {
  var _2 = false;
  var i;
  var _2_at = 0;
  var _3 = false;
  var _3_at = 0;
  var counts = calculateCount(d1, d2, d3, d4, d5);

  for (i = 0; i != 6; i += 1)
    if (tallies[i] == 2) {
      _2 = true;
      _2_at = i + 1;
    }

  for (i = 0; i != 6; i += 1)
    if (counts[i] == 3) {
      _3 = true;
      _3_at = i + 1;
    }

  if (_2 && _3) return _2_at * 2 + _3_at * 3;
  else return 0;
};

module.exports = Yatzy;
