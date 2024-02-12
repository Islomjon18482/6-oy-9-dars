import React from "react";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import Input from "./Search";

export default function Slayder() {
  const [move, setMove] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setMove((prevMove) => prevMove + -1261.91);
    }, 8000);

    return () => clearInterval(intervalId);
  }, []);

  if (move <= -5047.64) {
    setMove(0);
  }

  const slayderStyle = {
    transitionDuration: "2s",
    transform: `translateX(${move}px)`,
  };

  return (
    <div className={styles.allWrapper}>
        <div className={styles.slayder}>
        <div className={styles.wrapper}>
            <div className={styles.slide} style={slayderStyle}>
            <img
                className={styles.backgrounSlide}
                src="./slayderBackgroundImg.png"
            />
            <img className={styles.slayderMan} src="./slayderMan.png" alt="" />
            <img className={styles.star1} src="/star1.png" />
            <img className={styles.star2} src="/star2.png" />
            <img className={styles.star3} src="/star2.png" />
            <div className={styles.slide__text}>
                <h2>Temuriylar davri adabiyoti</h2>
            </div>
            </div>
            <div className={styles.slide} style={slayderStyle}>
            <img
                className={styles.backgrounSlide}
                src="./slayderBackgroundImg.png"
            />
            <img className={styles.slayderMan} src="./slayderMan.png" alt="" />
            <img className={styles.star1} src="/star1.png" />
            <img className={styles.star2} src="/star2.png" />
            <img className={styles.star3} src="/star2.png" />
            <div className={styles.slide__text}>
                <h2>O'rta asrlar adabiyoti</h2>
            </div>
            </div>
            <div className={styles.slide} style={slayderStyle}>
            <img
                className={styles.backgrounSlide}
                src="./slayderBackgroundImg.png"
            />
            <img className={styles.slayderMan} src="./slayderMan.png" alt="" />
            <img className={styles.star1} src="/star1.png" />
            <img className={styles.star2} src="/star2.png" />
            <img className={styles.star3} src="/star2.png" />
            <div className={styles.slide__text}>
                <h2>Jadidlar adabiyoti</h2>
            </div>
            </div>
            <div className={styles.slide} style={slayderStyle}>
            <img
                className={styles.backgrounSlide}
                src="./slayderBackgroundImg.png"
            />
            <img className={styles.slayderMan} src="./slayderMan.png" alt="" />
            <img className={styles.star1} src="/star1.png" />
            <img className={styles.star2} src="/star2.png" />
            <img className={styles.star3} src="/star2.png" />
            <div className={styles.slide__text}>
                <h2>Mustaqillik davri adabiyoti</h2>
            </div>
            </div>
        </div>
        </div>
        <Input></Input>
    </div>
  );
}
