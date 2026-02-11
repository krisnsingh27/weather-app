"use client";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await fetch("/api/auth/login", {
      method: "POST",
      body: JSON.stringify(form),
    });
    const data = await res.json();
    
    if (data.message) location.href = "/dashboard";
    else alert("Invalid credentials");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-10 flex flex-col gap-3 max-w-md mx-auto"
    >
      <h1 className="text-2xl font-bold">Login</h1>
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
      <button className="bg-green-500 text-white p-2 rounded  cursor-pointer">Login</button>
    </form>
  );
}
