import { BooksType } from "@/types";
import Link from "next/link";

const baseURL = `https://simple-books-api.glitch.me`;

async function getData() {
  const res = await fetch(`${baseURL}/books`, {
    cache: "force-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // This will activate the closest `error.js` Error Boundary
  if (!res.ok) throw new Error("Failed to fetch data");

  return res.json(); // Extracting data as a JSON Object from the response
}

export default async function Page() {
  const data: BooksType[] = await getData();
  // console.log(data);

  return (
    <section>
      <h1 className="my-20 text-3xl">Page of books</h1>
      <div className="grid gap-10 grid-cols-3">
        {data.map((item) => {
          return (
            <Link href={`/books/${item.id}`} key={item.id}>
              <div className="card bdr">
                <h2>Book Name : {item.name}</h2>
                <p>Book Type : {item.type}</p>
                <p>Book Available : {`${item.available}`}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
