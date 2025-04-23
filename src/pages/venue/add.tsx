import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import React from "react";

export default function AddVenuePage() {
  return (
    <div style={{ display: "flex", height: "100vh", marginTop: "10px"}}>
      {/* Sidebar */}
      <aside
        style={{
          width: "250px",
          backgroundColor: "#1A1F28",
          padding: "1rem",
          borderRight: "1px solid #ddd",
          height: "100vh",
          overflowY: "auto",
        }}
      >
        <div style={{ marginBottom: "2rem", textAlign: "center" }}>
          <img
            src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
            alt="APIU Logo"
            style={{ width: "200px", marginBottom: "1rem", display: "block", marginInline: "auto" }}
          />
        </div>
        <nav>
          <h3>Venue</h3>
          <details>
            <summary>Main Venues</summary>
                <ul style={{ listStyle: "none", paddingLeft: "1rem", backgroundColor: "#13171F", fontSize: "0.95rem"}}>
                    <li>Auditorium</li>
                    <li>Church</li>
                    <li>Fellowship Hall</li>
                    <li>Dining Hall</li>
                </ul>
        </details>

        <details>
            <summary>Classroom</summary>
            <ul style={{ listStyle: "none", padding: "1rem", backgroundColor: "#13171F", fontSize: "0.95rem"}}>
                <li>
                <details>
                    <summary>IT Building</summary>
                    <ul style={{ listStyle: "none", paddingLeft: "1.5rem", fontSize: "0.85rem" }}>
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
                    <ul style={{ listStyle: "none", paddingLeft: "1.5rem", fontSize: "0.85rem" }}>
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
                    <ul style={{ listStyle: "none", paddingLeft: "1.5rem", fontSize: "0.85rem" }}>
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
      <main style={{ flex: 1, padding: "0rem"}}>
        <div style={{ width: "80%", height: "85vh", margin: "0 auto"}}>
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
      </main>
    </div>
  );
}