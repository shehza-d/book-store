import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="flex bdr justify-around h-16 items-center">
      <h1 className="text-2xl font-extrabold">E-Book Store</h1>
      <ul className="flex gap-4">
        <li>
          <Link className="p-2 bdr rounded-xl" href="/books">
            Books
          </Link>
        </li>
        <li>
          <Link className="p-2 bdr rounded-xl" href="/orders">
            Orders
          </Link>
        </li>
        {/* <li><Link href="/books">Books</Link></li> */}
      </ul>
    </nav>
  );
}
fdfff;
