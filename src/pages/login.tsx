"use client";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || !password) {
            setError("Please enter both email and password.");
        } else {
            setError("");
            // Save dummy login
            localStorage.setItem("user", email);
            window.location.href = "/menu";
        }
    };

    return (
        <main className="container">
            <article style={{ maxWidth: "500px", margin: "auto", marginTop: "5rem", padding: "2rem", borderRadius: "8px", boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)" }}>
                <hgroup>
                    <img
                        src="https://www.apiu.edu/wp-content/uploads/2021/03/White-Logo-Horizontal.png"
                        alt="APIU Logo"
                        style={{ width: "200px", marginBottom: "1rem", display: "block", marginInline: "auto" }}
                    />
                    <h1 style={{ fontSize: "1.5rem", textAlign: "center", paddingBottom: "1rem"}}>Venue Booking System</h1>
                    <h2>Login</h2>
                </hgroup>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="you@example.com"
                            required
                        />
                    </label>
                    <label>
                        Password
                        <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="••••••••"
                            required
                        />
                    </label>
                    {error && <small style={{ color: "red" }}>{error}</small>}
                    <button type="submit">Login</button>
                </form>
                <small><a href="#">Forgot your password?</a></small>
            </article>
        </main>
    );
}
