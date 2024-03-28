import express from "express";

const app = express();

app.get("/api/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Product 1",
      price: 45.99,
      date: "2024-03-26",
      email: "user1@example.com",
    },
    {
      id: 2,
      name: "Product 2",
      price: 19.99,
      date: "2024-07-15",
      email: "user2@example.com",
    },
    {
      id: 3,
      name: "Product 3",
      price: 74.5,
      date: "2024-05-03",
      email: "user3@example.com",
    },
    {
      id: 4,
      name: "Product 4",
      price: 32.75,
      date: "2024-11-10",
      email: "user4@example.com",
    },
    {
      id: 5,
      name: "Product 5",
      price: 60.0,
      date: "2024-09-21",
      email: "user5@example.com",
    },
    {
      id: 6,
      name: "Product 6",
      price: 85.25,
      date: "2024-02-05",
      email: "user6@example.com",
    },
    {
      id: 7,
      name: "Product 7",
      price: 12.99,
      date: "2024-08-30",
      email: "user7@example.com",
    },
    {
      id: 8,
      name: "Product 8",
      price: 49.95,
      date: "2024-06-17",
      email: "user8@example.com",
    },
    {
      id: 9,
      name: "Product 9",
      price: 28.5,
      date: "2024-04-02",
      email: "user9@example.com",
    },
    {
      id: 10,
      name: "Product 10",
      price: 37.75,
      date: "2024-10-29",
      email: "user10@example.com",
    },
  ];
  // https://localhost:3000/api/products?search="name of the product"
  // this "search" keyword is called query so our first step
  // should be to determine whether someone is typing this query or not and for that we use an if
  //statement.
  if (req.query.search) {
    let filterProducts = products.filter((product) =>
      product.name.includes(req.query.search)
    );
    res.send(filterProducts);
    return; // after sending the response you must exit this method otherwise the application will crash that is why return is used.
  }

  setTimeout(() => {
    res.send(products);
  }, 3000);
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
