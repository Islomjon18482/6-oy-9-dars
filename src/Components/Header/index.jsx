import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <h2>Badiyat</h2>
      </div>
      <div className={styles.nav__bar}>
        <ul>
          <Link style={{ textDecoration: 'none', color: '#c4c3c3' }} to="/">
            <li>Bosh sahifa</li>
          </Link>

          <Link style={{ textDecoration: 'none', color: '#c4c3c3' }} to="/nasr">
            <li>Nasr</li>
          </Link>
          <li>Nazm</li>
          <li>Maqolalar</li>
          <li>Forum</li>
        </ul>
      </div>
      <div className={styles.avatar}>
        <img className={styles.avatar__img} src="/avatar.png" />
        <img className={styles.avatar__icon} src="/iconDrop.svg" />
      </div>
    </div>
  );
}
