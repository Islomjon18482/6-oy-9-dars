import styles from "./index.module.css";
import React, { useContext, useState, useEffect } from "react";
import { Authors } from "../../App";
import { useLocation } from "react-router-dom";
import MoreBook from "./MoreBooks";

export default function More() {
    const [move, setMove] = useState(0);
  const info = useContext(Authors);
  const location = useLocation();
  const authorId = location.search.slice(1);
  let data = JSON.parse(JSON.stringify(info.info));
  data = data.filter((el) => {
    return el.id == authorId;
  });
  console.log(data);
    const born = data.length > 0 ? data[0].tugilgan_sanasi : '';
    const url = data.length > 0 ? data[0].url : '';
    const deth = data.length > 0 ? data[0].vafot_etgan_sanasi : '';
    const name = data.length > 0 ? data[0].ism : '';
    const life = data.length > 0 ? data[0].hayoti : '';




  useEffect(() => {
    const intervalId = setInterval(() => {
      setMove((prevMove) => prevMove + -204);
    }, 3000);

    return () => clearInterval(intervalId);
  }, []);

  if (move <= -2000) {
    setMove(0);
  }

  const slayderStyle = {
    transitionDuration: "2s",
    transform: `translateX(${move}px)`,
  };
  return (
    <div className={styles.more__wrapper}>
      <div className={styles.img__born}>
        <div className={styles.img}><img src={url}/></div>
        <div className={styles.info__born}>
                <div className={styles.born}>
                    <p>Tavallud yili</p>
                    <h2>{born}-yil ⎯</h2>
                </div>
                <div className={styles.deth}>
                    <p>Vafot etgan yili</p>
                    <h2>{deth}-yil</h2>
                </div>
        </div>
      </div>
      <div className={styles.more__text}>
        <h2 className={styles.name}>{name}</h2>
        <p className={styles.life}>{life}</p>
        <div className={styles.cardBooks}>
        <MoreBook styles={slayderStyle}></MoreBook>
        </div>
      </div>
    </div>
  );
}
