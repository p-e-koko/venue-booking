import { storage$ } from "../storage";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useRouter } from "next/router";
import styles from "../styles/add-venue.module.css";

export default function VenueDetailPage() {
  const user = storage$.user.get();
  const events = storage$.events.get();
  const router = useRouter();
  const { id } = router.query;

  console.log({ events });

  return (
    <div className={styles.container}>
      <button
        onClick={() => router.push("/menu")}
        style={{
          position: "absolute",
          top: "0.5rem",
          left: "13.5rem",
          // padding: "0.5rem 0.8rem",
          fontSize: "0.8rem",
          borderRadius: "4px",
          border: "none",
          background: "none",
          color: "#fff",
          cursor: "pointer",
          zIndex: 1000,
        }}
      >
        ← Back
      </button>
      {/* Sidebar */}
      <aside className={styles.sidebar}>
        <div className={styles.logoWrapper}>
          <img
            src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
            alt="APIU Logo"
            className={styles.logoImg}
          />
        </div>
        <nav>
          <h3>Venue</h3>
          <details>
            <summary>Main Venues</summary>
            <ul className={styles.toggleList}>
              <li>Auditorium</li>
              <li>Church</li>
              <li>Fellowship Hall</li>
              <li>Dining Hall</li>
            </ul>
          </details>

          <details>
            <summary>Classroom</summary>
            <ul className={styles.toggleListClassroom}>
              <li>
                <details>
                  <summary>IT Building</summary>
                  <ul className={styles.toggleListNested}>
                    <li>IT110/1111</li>
                    <li>IT122</li>
                    <li>IT128</li>
                    <li>IT210</li>
                    <li>IT211</li>
                    <li>IT222</li>
                    <li>IT223</li>
                    <li>IT224</li>
                    <li>IT228</li>
                    <li>IT235</li>
                    <li>IT302</li>
                    <li>IT303</li>
                    <li>IT306</li>
                    <li>IT307</li>
                    <li>IT319</li>
                    <li>IT320A</li>
                    <li>IT320B</li>
                    <li>IT321</li>
                    <li>IT328</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>AD Building</summary>
                  <ul className={styles.toggleListNested}>
                    <li>AD103</li>
                    <li>AD104</li>
                    <li>AD301</li>
                    <li>AD302</li>
                    <li>AD303</li>
                    <li>AD306</li>
                    <li>AD307</li>
                    <li>AD308</li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Science Building</summary>
                  <ul className={styles.toggleListNested}>
                    <li>SB101</li>
                    <li>SB102</li>
                    <li>SB201</li>
                    <li>SB202</li>
                    <li>SB204</li>
                    <li>SB205</li>
                    <li>SB301</li>
                    <li>SB302</li>
                    <li>SB303</li>
                    <li>SB315</li>
                  </ul>
                </details>
              </li>
            </ul>
          </details>
        </nav>
      </aside>

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.calendarContainer}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="auto"
            events={events
              .filter((e) => e.venue == id)
              .map((e) => ({
                title: `${e.venue} | ${e.email}`,
                date: e.date,
              }))}
          />
        </div>
      </main>
    </div>
  );
}