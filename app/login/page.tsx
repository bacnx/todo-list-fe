"use client";

import { login } from "@/services";
import { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const onLogin = async () => {
    try {
      await login(email);
      router.push("/");
    } catch (err) {
      if (err instanceof AxiosError) {
        setMessage(err.message);
      }
    }
  };

  return (
    <main className="h-dvh flex justify-center items-center">
      <div className="flex flex-col items-center border-2 border-gray-300 rounded-xl p-8">
        <h3 className="text-cyan-600 font-semibold mb-8 text-3xl">Todo List</h3>
        {message && <p className="text-red-600">{message}</p>}
        <input
          className="p-2 rounded-md outline outline-1 outline-gray-300 focus:outline-cyan-600"
          type="text"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="w-full p-2 rounded-md border-2 border-cyan-600 font-semibold text-cyan-600 mt-4 hover:bg-cyan-600 hover:text-white"
          onClick={onLogin}
        >
          Submit
        </button>
      </div>
    </main>
  );
}
