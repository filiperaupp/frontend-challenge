import { Link } from "react-router-dom";
import { LinkButton } from "../components/LinkButton";
import homeIllustrationImg from "@/assets/images/illustration.png"
import styles from "../styles/Home.module.css";

export function Home() {
  return (
    <section className={styles.section}>
      <img className={styles.image} src={homeIllustrationImg} alt="" />
      <LinkButton to="/tasks" text="Iniciar" />
    </section>
  );
}
