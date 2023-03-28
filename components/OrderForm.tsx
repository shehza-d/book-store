"use client";

import { useState } from "react";

const baseURL = "https://simple-books-api.glitch.me";
const key = "1956a5a8b8e0d0c8f0bd7ea4b07a87d299b4cc718e4c67ac212e66e40dfc40fb";

async function handleSubmit(e: any) {
  e.preventDefault();
  const res = await fetch(`${baseURL}/orders`, {
    cache: "force-cache",
    method: "POST",
    // withCredentials: true,
    credentials: "include",
    mode: "no-cors",
    headers: {
      Authorization: `Bearer ${key}`,
      //   "X-FP-API-KEY": key, //it can be iPhone or your any other attribute
      "Content-Type": "application/json",
    },
    body: {
      "bookId": "123",
      "customerName": "Book from front end",
    },
  });

  console.log("res", res);

  //   if (!res.ok) throw new Error("Failed to fetch data");

  //   return res.json(); // Extracting data as a JSON Object from the response
}

export default function OrderForm() {
  const [userName, setUserName] = useState<String>();
  const [email, setEmail] = useState<String>();

  return (
    <form onSubmit={handleSubmit}>
      <h2>Order Place</h2>
      <input
        type="text"
        placeholder="Name"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit"> Submit</button>
    </form>
  );
}
