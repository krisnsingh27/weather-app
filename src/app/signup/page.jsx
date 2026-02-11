"use client";
import { useState } from "react";


export default function Signup() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("/api/auth/signup", {
      method: "POST",
      body: JSON.stringify(form),
    });
      
    setForm({ name: "", email: "", password: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 flex flex-col gap-3 max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Signup</h1>
      <input
        placeholder="Name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="border p-2"
      />
      <input
        placeholder="Email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="border p-2"
      />
      <input
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={(e) => setForm({ ...form, password: e.target.value })}
        className="border p-2"
      />
      <button className="bg-blue-500 text-white p-2 rounded cursor-pointer">Signup</button>
    </form>
  );
}
