# API Documentation

### Books

All books Returns a list of books.

GET `/books`

<br>

Optional query parameters:

type: fiction or non-fiction
limit: a number between 1 and 20.

```
https://book-store-shehzad.vercel.app/api/books?type=something&limit=5
```

<br>

Add books in DB

POST `/books`

Required body parameters:

```
{
  "name": "my Books",
  "type": "something",
  "available": "true",
}
```

Type `: {
    name: string;
    type: string;
    available?: boolean;
}`

---
