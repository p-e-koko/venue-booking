import Link from "next/link";
import styles from "../styles/add-venue.module.css";

export default function Sidebar() {
    return <>
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
                    <li><Link href="it110-111">IT110-111</Link></li>
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
    </>

}