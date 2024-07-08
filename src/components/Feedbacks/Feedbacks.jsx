import React from "react";
import style from "./Feedbacks.module.css";
import Feedback from "./Feedback/Feedback";
import ava1 from "./../../images/ava1.png";
import ava2 from "./../../images/ava2.png";
import ava3 from "./../../images/ava3.png";
import ava4 from "./../../images/ava4.png";

function Feedbacks() {
  const feedbacks = [
    {
      id: 1,
      name: "Lorenzo",
      img: ava1,
      username: "lorenzo",
      text: "Amazing Telegram bot! Provides real-time crypto prices and news",
    },
    {
      id: 2,
      img: ava2,
      name: "Adalina",
      username: "ado",
      text: "Must-have bot for crypto traders. Accurate signals and analysis",
    },
    {
      id: 3,
      img: ava3,
      name: "Alexander",
      username: "alex_x",
      text: "Superb cryptocurrency bot! Quick updates and reliable data",
    },
    {
      id: 4,
      img: ava4,
      name: "Rushana",
      username: "hana",
      text: "Efficient and user-friendly bot. Simplifies crypto trading tasks",
    },
  ];
  return (
    <div className={style.container}>
      {feedbacks.map((feedback) => (
        <Feedback
          username={feedback.username}
          img={feedback.img}
          text={feedback.text}
          name={feedback.name}
          id={feedback.id}
        />
      ))}
    </div>
  );
}

export default Feedbacks;
