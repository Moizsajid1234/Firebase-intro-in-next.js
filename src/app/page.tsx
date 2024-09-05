"use client";

import {
  loginWithEmailPassword,
  signupWithEmailPassword,
} from "@/firebase/firebaseauth";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <>
      <h1>Hello Auth</h1>
      <label htmlFor="email">Email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
      />
      <br />
      <label htmlFor="password">Password:</label>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button
        onClick={() => {
          signupWithEmailPassword(email, password);
        }}
      >
        Signup
      </button>
      <button
        onClick={() => {
          loginWithEmailPassword(email, password);
        }}
      >
        Login
      </button>
    </>
  );
}
