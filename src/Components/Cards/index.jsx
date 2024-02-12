import React, { useContext } from 'react'
import styles from "./index.module.css"
import { Authors } from '../../App'
import Card from './Card'
import Slayder from '../Slayder'

export default function Cards() {
    const info = useContext(Authors)
  return (
    <>
      <Slayder></Slayder>
    <div className={styles.cards__all}>
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
      <div className={styles.main__cards}>
            {
                info.info.length && info.info.map((el, index)=>{
                    return <Card key={index} data={el}></Card>
                })
            }
      </div>
    </div>
    </>
  )
}
