import { Link } from "react-router-dom";
import styles from "../styles/LinkButton.module.css";

interface LinkButtonProps {
  to: string;
  text: string;
}

export function LinkButton(props: LinkButtonProps) {
  return (
    <Link className={styles.button} to={props.to}>
      <span className={styles.text}>{props.text}</span>
    </Link>
  );
}
