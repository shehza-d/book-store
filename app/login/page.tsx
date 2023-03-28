"use client";

import { useState } from "react";

const baseURL = `https://simple-books-api.glitch.me`;

export default function Page() {
  const [userName, setUserName] = useState<String>();
  const [email, setEmail] = useState<String>();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    console.log("name", userName);
    console.log("name", email);

    // const res = await fetch(`${baseURL}/api-clients`, {
    //   method: "POST",
    //   credentials: "include",

    //   //   // cache: "force-cache",
    //   headers: {
    //     //     // "x-rapidapi-host": "carbonfootprint1.p.rapidapi.com",
    //     //     // "x-rapidapi-key": "your_api_key",
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    //   body: JSON.stringify({
    //     clientName: "Postman",
    //     clientEmail: "valentin@example.com",
    //   }),
    // });
    // console.log("res", res);

    // if (!res.ok) {
    //   throw new Error(`HTTP error! status: ${res.status}`);
    // }
    // return res;
  };

  return (
    <section>
      <h2>login</h2>

      <form onSubmit={handleSubmit}>
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
    </section>
  );
}
