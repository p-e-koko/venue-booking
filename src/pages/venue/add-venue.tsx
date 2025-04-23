import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";
import styles from "../styles/add-venue.module.css";

export default function AddVenuePage() {
  return (
    <div className={styles.container}>
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
            events={[
              { title: "Event 1", date: "2025-04-22" },
              { title: "Event 2", date: "2025-04-23" },
            ]}
          />
        </div>
        <div>
          <button className={styles.bookNowBtn}>
            Book Now
          </button>
        </div>
      </main>
    </div>
  );
}