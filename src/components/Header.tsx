import styles from "../styles/Header.module.css";
import logoImg from "../assets/images/logo.png"

export function Header() {
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logoImg} alt="" />
        </header>
    )
}