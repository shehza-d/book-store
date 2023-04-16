import { BookType } from "@/types";
import { notFound } from "next/navigation";

// const baseURL = `https://simple-books-api.glitch.me`;

// export function generateStaticParams() {
//   return [{ bookID: "1" }, { bookID: "2" }, { bookID: "3" }];
// }

const getData = async (bookID: string) => {
  // const res = await fetch(`${baseURL}/books/${bookID}`, {
  //   cache: "force-cache",
  // }).then((res) => res.json());
  // if (!res.ok) return undefined;
  // if (!res.ok) throw new Error("Failed to fetch data");
  // return res;
};

export default async function Page({ params }: { params: { bookID: string } }) {
  // const data: BookType = await getData(params.bookID);
  // if (!data) notFound();

  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bdr">
        {/* Book id : {data.id} <br />
        Book name : {data.name} <br />
        Book author : {data.author} <br />
        Book type : {data.type} <br />
        Book price : {data.price} <br />
        Book current-stock : {data["current-stock"]} <br />
        Book available : {data.available} <br /> */}
      </div>
    </section>
  );
}
