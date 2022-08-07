import styles from "./App.module.css";
import { Header } from "./components/Header";
import { Router } from "./Router";

export function App() {
  return (
    <div className={styles.app}>
      <Header />
      <Router />
    </div>
  );
}
