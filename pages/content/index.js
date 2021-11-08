import styles from "../../styles/Home.module.css";
import Welcome from "./welcome-message.js";

export default function Content() {
  return (
    <main className={styles.content}>
      <div className={styles.modalCase}>
        <Welcome />
      </div>
    </main>
  );
}
