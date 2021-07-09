import { React, useState } from "react";
import initialPack from "./deck";

import "../style/button.css";

var pack = initialPack();

function Button(props) {
  const getOneCard = () => {
    props.addLeftCard(pack.shift());
    props.addRightCard(pack.shift());
  };

  const refresh = () => {
    pack.sort(() => Math.random() - 0.5);
    //console.log(pack);
  };

  const cardBelow = () => {
    //pack.pop();
    console.log(pack.pop());
    //console.log(pack);
  };

  const cardOnTop = () => {
    //pack.shift();
    console.log(pack.shift());
    //console.log(pack);
  };

  /*--------------------*/
  return (
    <div className="button">
      <button onClick={refresh}>Refresh deck</button>
      <button onClick={getOneCard}>Add card</button>
      <button onClick={cardBelow}>Card below</button>
      <button onClick={cardOnTop}>Card on top</button>
      <button onClick={props.play}>Play</button>
    </div>
  );
}

export default Button;
