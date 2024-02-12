import React from 'react'
import { useContext } from 'react'
import CardBook from '../../Books/BookCard'
import { Authors } from '../../../App'
import styles from "./index.module.css"

export default function MoreBook(props) {
    const infoBook = useContext(Authors);
  return (
    <div className={styles.books__card__wrapper}>
        <div className={styles.card__slayder} style={props.styles}>
        {
            infoBook.books.map((el, index) => {
                return <CardBook key={index} data={el}></CardBook>;
              })
        }
        </div>
    </div>
  )
}
