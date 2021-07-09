import { useState } from "react";
import Button from "./button";
import Hand from "./hand";

import "../style/table.css";

const result = (arr) => {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i].suits === arr[i + 1].suits) count++;
    if (arr[i].num === arr[i + 1].num) count++;
  }
  console.log(count);
  return count;
};

const Table = () => {
  const [leftCards, leftSetCards] = useState([]);
  const [rightCards, rightSetCards] = useState([]);

  const addCard = (arr, setArr, boo) => (obj) => {
    if (arr.length < 5) {
      const newCard = [...arr, { suits: obj.suits, num: obj.num, isShow: boo }];

      setArr(newCard);
    } else {
      console.log("Full pack");
    }
  };

  const play = () => {
    const count1 = result(leftCards);
    const count2 = result(rightCards);
    console.log(count1, count2);
    count1 > count2 ? console.log("Left win") : console.log("Right win");
  };

  return (
    <div className="table">
      <Button
        addLeftCard={addCard(leftCards, leftSetCards, true)}
        addRightCard={addCard(rightCards, rightSetCards, false)}
        play={play}
      />
      <div className="hands">
        <div>
          <Hand cards={leftCards} />
        </div>
        <div>
          <Hand cards={rightCards} />
        </div>
      </div>
    </div>
  );
};

export default Table;
