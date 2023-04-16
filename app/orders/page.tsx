import { OrderType } from "@/types";
import moment from "moment";

// import OrderForm from "@/components/OrderForm";

const baseURL = "https://simple-books-api.glitch.me";
const key = "1956a5a8b8e0d0c8f0bd7ea4b07a87d299b4cc718e4c67ac212e66e40dfc40fb";

async function getData() {
  const res = await fetch(`/api/orders`, {
    cache: "no-cache",
    method: "GET",
    // withCredentials: true,
    credentials: "include",
    // headers: {
    //   Authorization: `Bearer ${key}`,
    //   "Content-Type": "application/json",
    // },
  }).then((res) => res.json());
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // This will activate the closest `error.js` Error Boundary
  // console.log(res);

  //   if (!res.ok) throw new Error("Failed to fetch data");

  return res; // Extracting data as a JSON Object from the response
}

export default async function Page() {
  const data: OrderType[] = await getData();

  return (
    <section>
      <h1 className="my-20 text-3xl">Page of orders</h1>

      {/* <OrderForm /> */}
      <div className="grid gap-10 md:grid-cols-3">
        {data?.map((item) => {
          return (
            <div className="card bdr" key={item.id}>
              <h2>Customer Name : {item.customerName}</h2>
              <p>Book ID : {`${item.bookId}`}</p>
              <p>Order ID : {item.id}</p>
              <p>quantity of Books : {item.quantity}</p>
              <p>Order Time: {moment(item.timestamp).fromNow()}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
