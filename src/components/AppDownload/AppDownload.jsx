import React from "react";
import style from "./AppDownload.module.css";
function AppDownload({ icon, name, text, link }) {
  return (
    <a href={link} className={style.container}>
      <div className={style.button_content}>
        <div className={style.icon}>
          <img src={icon} alt={name} />
        </div>
        <div className={style.textBlock}>
          <span>{text}</span>
          <div className={style.name}>{name}</div>
        </div>
      </div>
    </a>
  );
}

export default AppDownload;
