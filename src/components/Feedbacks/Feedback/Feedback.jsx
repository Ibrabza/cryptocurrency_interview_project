import React from "react";
import style from "./Feedback.module.css";
function Feedback({ id, img, username, text, name }) {
  return (
    <div
      className={style.feedback}
      style={
        id % 2 === 0
          ? { position: "absolute", right: "150px", top: `${id * 200}px` }
          : { position: "absolute", right: "0", top: `${id * 200}px` }
      }
    >
      <div className={style.feedback_blurBlock}>
        <div className={style.feedback_content}>
          <div className={style.feedback_info}>
            <div className={style.feedback_infoAvatar}>
              <img src={img} alt={username} />
            </div>
            <div className={style.feedback_info__name}>
              <div>{name} </div>
              <span> @{username}</span>
            </div>
          </div>
          <div className={style.feedback_text}>
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Feedback;
