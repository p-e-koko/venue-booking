import { storage$ } from "./storage";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const router = useRouter();
  const [error, setError] = useState("");


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // @ts-expect-error testing
    const formData = Object.fromEntries(new FormData(e.target).entries());
    const { email, password } = formData;
    const result = storage$.login(email as string, password as string);
    if (result == false) {
      setError("Incorrect email or password!");
      return;
    }
    router.push("/menu");
  };

  return (
    <main className="container">
      <article
        style={{
          maxWidth: "500px",
          margin: "auto",
          marginTop: "5rem",
          padding: "2rem",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        }}
      >
        <hgroup>
          <img
            src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
            alt="APIU Logo"
            style={{
              width: "200px",
              marginBottom: "1rem",
              display: "block",
              marginInline: "auto",
            }}
          />
          <h1
            style={{
              fontSize: "1.3rem",
              textAlign: "center",
              paddingBottom: "1rem",
            }}
          >
            Venue Booking System
          </h1>
          <h2></h2>
        </hgroup>
        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              name="email"
              placeholder="you@example.com"
              required
            />
          </label>
          <label>
            Password
            <input
              type="password"
              name="password"
              placeholder="••••••••"
              required
            />
          </label>
          {error && <small style={{ color: "red" }}>{error}</small>}
          <button type="submit">Login</button>
        </form>
        <small>
          <a href="#">Forgot your password?</a>
        </small>
      </article>
    </main>
  );
}