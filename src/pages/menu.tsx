import Link from "next/link";

import styles from "../styles/menu.module.css";
import { storage$ } from "./storage";

export default function Menu() {
  const userName = storage$.user.name.get(); // This can be made dynamic later

  return (
    <main className={styles.wrapper}>
      <article className={styles.card}>
        <header className={styles.header}>
          <h3 className={styles.subtitle}>Venue Booking System</h3>
          <div className={styles.logoWrapper}>
            <img
              src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
              alt="APIU Logo"
              style={{
                width: "200px",
                marginBottom: "1rem",
                display: "block",
                marginInline: "auto",
              }}
              className={styles.logo}
            />
          </div>
        </header>

        <section className={styles.greeting}>
          <h1 className={styles.title}>Hello {userName}!,</h1>
          <p className={styles.description}>What would you like to do?</p>
        </section>

        <div className={styles.buttonGroup}>
          <Link href="/venue/add" legacyBehavior>
            <a role="button" className={`contrast ${styles.button}`}>
              📅 Book Venue
            </a>
          </Link>
          {/* <Link href="/venue/list" legacyBehavior>
            <a role="button" className={`secondary ${styles.button}`}>
              🗂️ Manage Booking
            </a>
          </Link> */}
        </div>
      </article>
    </main>
  );
}