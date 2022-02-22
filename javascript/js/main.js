import yatzy from "../lib/yatzy.js";
// testing Yatzy method

console.log(
  "Score for the repeated occurance of 1's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 1)
);
console.log(
  "Score for the repeated occurance of 2's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 2)
);
console.log(
  "Score for the repeated occurance of 3's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 3)
);
console.log(
  "Score for the repeated occurance of 4's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 4)
);
console.log(
  "Score for the repeated occurance of 5's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 5)
);
console.log(
  "Score for the repeated occurance of 6's : " +
    yatzy.checkOccurance(6, 2, 3, 4, 5, 6)
);
console.log("Score for one pair : " + yatzy.score_pair(3, 3, 3, 3, 3));

console.log("Score for two pairs : " + yatzy.two_pair(3, 3, 3, 3, 3));

console.log(
  "Score for three of one kind : " + yatzy.three_of_a_kind(3, 3, 3, 3, 3)
);
console.log(
  "Score for four of one kind : " + yatzy.four_of_a_kind(3, 3, 3, 3, 3)
);
console.log(
  "Score for low-end straight : " + yatzy.small_straight(1, 2, 3, 4, 5)
);
console.log(
  "Score for high-end straight : " + yatzy.large_straight(6, 2, 3, 4, 5)
);
console.log(
  "Score for one pair and three of a kind : " + yatzy.full_house(6, 2, 3, 4, 5)
);
console.log(
  "Score from addition of all values : " + yatzy.chance(6, 2, 3, 4, 5)
);
console.log("Score for five of a kind : " + yatzy.yatzy(3, 3, 3, 3, 3));
