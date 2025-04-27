import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";
import styles from "../styles/add-venue.module.css";
import { useState } from "react";
import { useRouter } from "next/router";
import { storage$, VenueEvent } from "../storage";
import Link from 'next/link';

export default function AddVenuePage() {
  const user = storage$.user.get();
  const events = storage$.events.get();
  const [showModal, setShowModal] = useState(false);
  const [showMediaInput, setShowMediaInput] = useState(false);
  const router = useRouter();

  const handleBookNow = () => setShowModal(true);
  const handleClose = () => setShowModal(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-expect-error testing
    const formData = Object.fromEntries(new FormData(e.target).entries());
    storage$.addEvent(formData as unknown as VenueEvent);
    setShowModal(false);
  };

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
              <li><Link href="auditorium">Auditorium</Link></li>
              <li><Link href="church">Church</Link></li>
              <li><Link href="fellowship-hall">Fellowship Hall</Link></li>
              <li><Link href="dining-hall">Dining Hall</Link></li>
            </ul>
          </details>

          <details>
            <summary>Classroom</summary>
            <ul className={styles.toggleListClassroom}>
              <li>
                <details>
                  <summary>IT Building</summary>
                  <ul className={styles.toggleList}>
                    <li><Link href="it110-111">IT110/111</Link></li>
                    <li><Link href="it122">IT122</Link></li>
                    <li><Link href="it128">IT128</Link></li>
                    <li><Link href="it210">IT210</Link></li>
                    <li><Link href="it211">IT211</Link></li>
                    <li><Link href="it222">IT222</Link></li>
                    <li><Link href="it223">IT223</Link></li>
                    <li><Link href="it224">IT224</Link></li>
                    <li><Link href="it228">IT228</Link></li>
                    <li><Link href="it235">IT235</Link></li>
                    <li><Link href="it302">IT302</Link></li>
                    <li><Link href="it303">IT303</Link></li>
                    <li><Link href="it306">IT306</Link></li>
                    <li><Link href="it307">IT307</Link></li>
                    <li><Link href="it319">IT319</Link></li>
                    <li><Link href="it320a">IT320A</Link></li>
                    <li><Link href="it320b">IT320B</Link></li>
                    <li><Link href="it321">IT321</Link></li>
                    <li><Link href="it328">IT328</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>AD Building</summary>
                  <ul className={styles.toggleList}>
                    <li><Link href="ad103">AD103</Link></li>
                    <li><Link href="ad104">AD104</Link></li>
                    <li><Link href="ad301">AD301</Link></li>
                    <li><Link href="ad302">AD302</Link></li>
                    <li><Link href="ad303">AD303</Link></li>
                    <li><Link href="ad306">AD306</Link></li>
                    <li><Link href="ad307">AD307</Link></li>
                    <li><Link href="ad308">AD308</Link></li>
                  </ul>
                </details>
              </li>
              <li>
                <details>
                  <summary>Science Building</summary>
                  <ul className={styles.toggleList}>
                    <li><Link href="sb101">SB101</Link></li>
                    <li><Link href="sb102">SB102</Link></li>
                    <li><Link href="sb201">SB201</Link></li>
                    <li><Link href="sb202">SB202</Link></li>
                    <li><Link href="sb204">SB204</Link></li>
                    <li><Link href="sb205">SB205</Link></li>
                    <li><Link href="sb301">SB301</Link></li>
                    <li><Link href="sb302">SB302</Link></li>
                    <li><Link href="sb303">SB303</Link></li>
                    <li><Link href="sb315">SB315</Link></li>
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
            events={events.map((e) => ({
              title: `${e.venue} | ${e.email}`,
              date: e.date,
            }))}
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
              <button className={styles.closeBtn} onClick={handleClose}>
                &times;
              </button>
              <h2>Book Venue</h2>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>
                    Venue:
                    <select
                      name="venue"
                      required
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    >
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
                    <input
                      type="email"
                      name="email"
                      readOnly
                      defaultValue={user?.email}
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Date:
                    <input
                      type="date"
                      name="date"
                      required
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Start Time:
                    <input
                      type="time"
                      name="start"
                      required
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    End Time:
                    <input
                      type="time"
                      name="end"
                      required
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    />
                  </label>
                </div>
                <div>
                  <label>
                    Purpose:
                    <div style={{ margin: "0.5rem 0" }}>
                      <label>
                        <input
                          type="radio"
                          name="purpose"
                          value="Class"
                          required
                        />{" "}
                        Class
                      </label>
                      <label style={{ marginLeft: "0.5rem 0" }}>
                        <input
                          type="radio"
                          name="purpose"
                          value="Event"
                          required
                        />{" "}
                        Event
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
                          onChange={(e) =>
                            setShowMediaInput(e.target.value === "Yes")
                          }
                        />{" "}
                        Yes
                      </label>
                      <label style={{ marginLeft: "0.5rem 0" }}>
                        <input
                          type="radio"
                          name="mediaNeeded"
                          value="No"
                          required
                          onChange={(e) =>
                            setShowMediaInput(e.target.value === "Yes")
                          }
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
                        name="equipmentNeeded"
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
                      name="remark"
                      rows={4}
                      style={{ width: "100%", margin: "0.5rem 0" }}
                    ></textarea>
                  </label>
                </div>
                <button type="submit" style={{ marginTop: "1rem" }}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        )}

      </main>
    </div>
  );
}