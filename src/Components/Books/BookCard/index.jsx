import React from 'react'
import styles from "./index.module.css"

export default function CardBook(props) {
    console.log(props.data);
  return (
    <div className={styles.book__wrapper}>
        <img src={props.data.url} />
        <div className={styles.text}>
        <h2>{props.data.nomi}</h2>
        <p>{props.data.muallif} ({props.data.yil})</p>
        <div className={styles.status}>
            <img src="/bookStatus.svg"/>
            <p>4.1 • 3400 ta fikrlar</p>
        </div>
        </div>
    </div>
  )
}
