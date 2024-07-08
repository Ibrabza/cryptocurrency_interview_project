import React from "react";
import style from "./Title.module.css";

function Title() {
  return (
    <div className={style.title}>
      <span>
        Do you want to Learn more About cryptocurrencies
        <span className={style.gradient}> quickly and easily ?</span>
      </span>
    </div>
  );
}

export default Title;
