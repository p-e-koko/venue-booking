import { storage$, VenueEvent } from "../storage";
import dayGridPlugin from "@fullcalendar/daygrid";
import FullCalendar from "@fullcalendar/react";
import { useRouter } from "next/router";
import styles from "../../styles/add-venue.module.css";
import Sidebar from "../../components/sidebar"
import { useState } from "react";

export default function VenueDetailPage() {
  const user = storage$.user.get();
  const events = storage$.events.get();
  const router = useRouter();
  const { id } = router.query;
  const [bookingDialogStatus, setBookingDialogStatus] = useState(false);
  const [selectedBooking, setSelectedBooking] = useState<VenueEvent | null>(null);

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
          zIndex: 10,
        }}
      >
        ← Back
      </button>
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className={styles.main}>
        <div className={styles.calendarContainer}>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            height="auto"
            eventClick={(info) => {
              setSelectedBooking(info.event.extendedProps.booking as VenueEvent);
              setBookingDialogStatus(true);
              
            }}
            events={events
              .filter((e) => e.venue.toLowerCase() == id)
              .map((e) => ({
                title: `${e.venue} | ${e.email}`,
                date: e.date,
                url: "#",
                booking: e
              }))}
          />
        </div>
      </main>
      <dialog open={bookingDialogStatus}>
        <article>
          <header>
            <button onClick={()=>setBookingDialogStatus(false)} aria-label="Close" rel="prev"></button>
            <p>
              <strong>{selectedBooking?.venue}</strong>
            </p>
          </header>
            
          <ul>
            <li>Requested by: {selectedBooking?.email}</li>
            <li>Purpose: {selectedBooking?.purpose}</li>
            <li>Date: {selectedBooking?.date}</li>
            <li>Time: {selectedBooking?.start} - {selectedBooking?.end}</li>
          </ul>
        </article>
      </dialog>
    </div>
  );
}
