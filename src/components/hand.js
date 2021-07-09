import { React, useState, useEffect } from "react";
import cx from "clsx";
import "../style/card.css";

//style={{ textDecoration: card.isShow ? "none" : "line-through" }}

function Card({ card }) {
  return (
    <div
      className={cx("card", { isShow: card.isShow })}
    >{`${card.suits} - ${card.num}`}</div>
  );
}

function Hand(props) {
  return (
    <div className="hands">
      <div className="">
        <div className="tasks">
          {props.cards.map((card, number) => (
            <Card card={card} key={number} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hand;

//useref
