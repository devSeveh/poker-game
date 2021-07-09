var suits = ["Diamonds", "Hearts", "Spades", "Clubs"];
var value = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

const initialPack = () => {
  var pack = [];

  for (let i = 0; i < suits.length; i++) {
    for (let j = 0; j < value.length; j++) {
      pack.push({ suits: suits[i], num: value[j] });
    }
  }

  return pack;
};

var combinations = [
  "highCard",
  "Pair",
  "twoPairs",
  "Set",
  "Flesh",
  "fullHouse",
  "royalFlesh",
];

export default initialPack;
