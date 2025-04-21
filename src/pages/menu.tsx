"use client";

import Link from "next/link";
import styles from "./styles/menu.module.css";

export default function Menu() {
  return (
    <main className={styles.wrapper}>
      <article className={styles.card}>
        <img
            src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
            alt="APIU Logo"
            style={{ width: "200px", marginBottom: "1rem", display: "block", marginInline: "auto" }}
        />
        <h1 className={styles.title}>Welcome to Venue Booking System!</h1>
        <p className={styles.description}>
          Choose your option
        </p>
        <div className={styles.buttonGroup}>
          <Link href="/venue/add">
            <button role="button" className={`contrast ${styles.button}`}>
              📅 Book a Venue
            </button>
          </Link>
          <Link href="/venue/list">
            <button role="button" className={`secondary ${styles.button}`}>
              🗂️ Manage Bookings
            </button>
          </Link>
        </div>
      </article>
    </main>
  );
}
