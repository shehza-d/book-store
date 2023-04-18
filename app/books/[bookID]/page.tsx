import { IBook } from "@/types";
import { getPath } from "@/utils/getPath";
import moment from "moment";
import { notFound } from "next/navigation";

// const baseURL = `https://simple-books-api.glitch.me`;

// export function generateStaticParams() {
//   return [{ bookID: "1" }, { bookID: "2" }, { bookID: "3" }];
// }

const getData = async (bookID: string) => {
  const res = await fetch(`${getPath()}/api/books/${bookID}`, {
    cache: "force-cache",
  }).then((res) => res.json());
  console.log(`${getPath()}/api/books/${bookID}`);

  console.log("🚀 ~ file: page.tsx:14 ~ res ~ res:", res);
  // if (!res.ok) return undefined;
  // if (!res.ok) throw new Error("Failed to fetch data");
  return res;
};

export default async function Page({ params }: { params: { bookID: string } }) {
  const data: IBook[] = await getData(params.bookID);
  // console.log("🚀 ~ file: page.tsx:23 ~ Page ~ data:", data);
  // if (!data) notFound();

  return (
    <section className="flex justify-center items-center min-h-screen">
      <div className="bdr">
        {data.message
          ? "Book not found"
          : data?.map((item) => {
              return (
                <div key={item.id}>
                  Book id : {item.id} <br />
                  Book name : {item.name} <br />
                  {/* Book author : {item.author} <br /> */}
                  Book type : {item.type} <br />
                  Book available : {item.available} <br />
                  {/* Book current-stock : {item.available} <br /> */}
                  {/* Book price : {item.price} <br /> */}
                  <p>Added: {moment(item.created_at).fromNow()}</p>
                </div>
              );
            })}
      </div>
    </section>
  );
}
