import React from 'react'
import styles from "./index.module.css"
import { Link } from 'react-router-dom'

export default function Card(props) {
  return (
    <Link style={{ textDecoration: 'none'}} to={`/more?${props.data.id  }`}>
    <div className={styles.card__wrapper}>
      <div className={styles.card__img}  style={{backgroundImage: ` url(${props.data.url})`}}>
      </div>
      <div className={styles.card__name}>
        <h2>{props.data.ism}</h2>
        <p>{props.data.tugilgan_sanasi}-{props.data.vafot_etgan_sanasi}</p>
      </div>
      <div className={styles.actoins}>
        <div className={styles.read}>
        <img src="/read.svg"/>
        <p>34</p>
        </div>
        <div className={styles.listen}>
          <img src="/listen.svg"/>
          <p>23</p>
        </div>
      </div>
    </div>
    </Link>
  )
}
