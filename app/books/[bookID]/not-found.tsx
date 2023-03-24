export default function NotFound({ params }: { params: { bookID: string } }) {
  return (
    <>
      <h2>Book Not Found</h2>
      <p>Could not find requested resource</p>
    </>
  );
}
