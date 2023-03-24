import { bookType } from "@/types";

const baseURL = `https://simple-books-api.glitch.me`;

const getData = async (bookID: string) => {
  const res = await fetch(`${baseURL}/books/${bookID}`, {
    cache: "force-cache",
  });
  console.log(res);

  if (!res.ok) throw new Error("Failed to fetch data");
  // console.log(`${baseURL}/books/${bookID}`);

  return res.json();
};

export default async function Page({ params }: { params: { bookID: string } }) {
  const data: bookType = await getData(params.bookID);
  console.log(data);
  return (
    <section className="flex justify-center items-center h-screen">
      <div className="bdr">
        Book id : {data.id} <br />
        Book name : {data.name} <br />
        Book author : {data.author} <br />
        Book type : {data.type} <br />
        Book price : {data.price} <br />
        Book current-stock : {data["current-stock"]} <br />
        Book available : {data.available} <br />
      </div>
    </section>
  );
}
