import React from 'react'
import styles from './index.module.css'

export default function Input() {
  return (
    <div className={styles.input__wrapper}>
      <label>
      <p>Qidirish</p>
      <div className={styles.search}>
      <input type="text" placeholder='Adiblar, kitoblar, audiolar, maqolalar...'/>
      <button>
        <img src="/search.svg"/>
        Qidirish
      </button>
      </div>
      </label>
    </div>
  )
}
