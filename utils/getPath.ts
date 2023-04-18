export const getPath = () => {
  let base_url =
    process.env.NODE_ENV === "development"
      ? "http://localhost:3000"
      : "https://book-store-shehzad.vercel.app";

  return base_url;
};
