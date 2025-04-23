import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";
import styles from "../styles/add-venue.module.css";
import { useState } from "react";
import { useRouter } from "next/router";

export default function AddVenuePage() {
  const [showModal, setShowModal] = useState(false);
  const [showMediaInput, setShowMediaInput] = useState(false);
  const router = useRouter();

  const handleBookNow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // This place is to store the data
    setShowModal(false);
  }

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
            events={[
              { title: "Event 1", date: "2025-04-22" },
              { title: "Event 2", date: "2025-04-23" },
            ]}
          />
        </div>
        <div>
          <button className={styles.bookNowBtn} onClick={handleBookNow}>
            Book Now
          </button>
        </div>

        {showModal && (
          <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
              <button className={styles.closeBtn} onClick={handleClose}>&times;</button>
              <h2>Book Venue</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                  Venue:
                  <select required style={{ width: "100%", margin: "0.5rem 0" }}>
                    <optgroup label="Main Venues">
                    <option value="Auditorium">Auditorium</option>
                    <option value="Church">Church</option>
                    <option value="Fellowship Hall">Fellowship Hall</option>
                    <option value="Dining Hall">Dining Hall</option>
                    </optgroup>
                    <optgroup label="Classrooms">
                    <option value="IT110/1111">IT110/1111</option>
                    <option value="IT122">IT122</option>
                    <option value="IT128">IT128</option>
                    <option value="AD103">AD103</option>
                    <option value="IT110/1111">IT110/1111</option>
                    <option value="IT122">IT122</option>
                    <option value="IT128">IT128</option>
                    <option value="IT210">IT210</option>
                    <option value="IT211">IT211</option>
                    <option value="IT222">IT222</option>
                    <option value="IT223">IT223</option>
                    <option value="IT224">IT224</option>
                    <option value="IT228">IT228</option>
                    <option value="IT235">IT235</option>
                    <option value="IT302">IT302</option>
                    <option value="IT303">IT303</option>
                    <option value="IT306">IT306</option>
                    <option value="IT307">IT307</option>
                    <option value="IT319">IT319</option>
                    <option value="IT320A">IT320A</option>
                    <option value="IT320B">IT320B</option>
                    <option value="IT321">IT321</option>
                    <option value="IT328">IT328</option>
                    <option value="AD103">AD103</option>
                    <option value="AD104">AD104</option>
                    <option value="AD301">AD301</option>
                    <option value="AD302">AD302</option>
                    <option value="AD303">AD303</option>
                    <option value="AD306">AD306</option>
                    <option value="AD307">AD307</option>
                    <option value="AD308">AD308</option>
                    <option value="SB101">SB101</option>
                    <option value="SB102">SB102</option>
                    <option value="SB201">SB201</option>
                    <option value="SB202">SB202</option>
                    <option value="SB204">SB204</option>
                    <option value="SB205">SB205</option>
                    <option value="SB301">SB301</option>
                    <option value="SB302">SB302</option>
                    <option value="SB303">SB303</option>
                    <option value="SB315">SB315</option>
                    </optgroup>
                  </select>
                  </label>
                </div>
                <div>
                  <label>
                  Email:
                  <input type="email" required style={{ width: "100%", margin: "0.5rem 0" }} />
                  </label>
                </div>
                <div>
                  <label>
                  Date:
                  <input type="date" required style={{ width: "100%", margin: "0.5rem 0" }} />
                  </label>
                </div>
                <div>
                  <label>
                  Start Time:
                  <input type="time" required style={{ width: "100%", margin: "0.5rem 0" }} />
                  </label>
                </div>
                <div>
                  <label>
                  End Time:
                  <input type="time" required style={{ width: "100%", margin: "0.5rem 0" }} />
                  </label>
                </div>
                <div>
                  <label>
                  Purpose:
                  <div style={{ margin: "0.5rem 0" }}>
                    <label>
                    <input type="radio" name="purpose" value="Class" required /> Class
                    </label>
                    <label style={{ marginLeft: "0.5rem 0" }}>
                    <input type="radio" name="purpose" value="Event" required /> Event
                    </label>
                  </div>
                  </label>
                </div>
                <div>
                  <label>
                  Media Needed:
                  <div style={{ margin: "0.5rem 0" }}>
                    <label>
                    <input
                      type="radio"
                      name="mediaNeeded"
                      value="Yes"
                      required
                      onChange={(e) => setShowMediaInput(e.target.value === "Yes")}
                    />{" "}
                    Yes
                    </label>
                    <label style={{ marginLeft: "0.5rem 0" }}>
                    <input
                      type="radio"
                      name="mediaNeeded"
                      value="No"
                      required
                      onChange={(e) => setShowMediaInput(e.target.value === "Yes")}
                    />{" "}
                    No
                    </label>
                  </div>
                  </label>
                </div>
                {showMediaInput && (
                  <div>
                  <label>
                    Equipment Needed:
                    <textarea
                      rows={2}
                      style={{ width: "100%", margin: "0.5rem 0" }}
                  ></textarea>
                  </label>
                  </div>
                )}
                <div>
                  <label>
                  Description and Remark:
                  <textarea
                    rows={4}
                    style={{ width: "100%", margin: "0.5rem 0" }}
                  ></textarea>
                  </label>
                </div>
                <button type="submit" style={{ marginTop: "1rem" }}>Submit</button>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}