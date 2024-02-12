import styles from "./index.module.css";
import CardBook from "./BookCard";
import { Authors } from "../../App";
import React, { useContext } from "react";
import Slayder from "../Slayder";

export default function Books() {
  const infoBook = useContext(Authors);
  return (
    <>
    <Slayder></Slayder>
    <div className={styles.wrapper}>
      <div className={styles.cards__heading}>
        <h2>Asosiy kategoriyalar</h2>
      </div>
      <div className={styles.links}>
        <ul>
          <li>Temuriylar davri </li>
          <li>Jadid adabiyoti </li>
          <li>Sovet davri </li>
          <li>Mustaqillik davri</li>
        </ul>
      </div>
      <div className={styles.allCards}>
        {infoBook.books.map((el, index) => {
          return <CardBook key={index} data={el}></CardBook>;
        })}
      </div>
    </div>
    
    </>
  );
}
