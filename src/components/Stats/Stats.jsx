import React from "react";
import style from "./Stats.module.css";

function Stats({ rating, cases, subscribers }) {
  return (
    <div className={style.container}>
      <div className={style.data_block}>
        <div className={style.data}>{subscribers}</div>
        <span>Suscribers</span>
      </div>
      <div className={style.data_block}>
        <div className={style.data}>{cases}</div>
        <span>Successful cases</span>
      </div>
      <div className={style.data_block}>
        <div className={style.data}>{rating}</div>
        <span>Rating</span>
      </div>
    </div>
  );
}

export default Stats;
