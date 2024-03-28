import "./App.css";
import { useEffect, useState } from "react";
import axios from "axios";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

// the products will give you the change/filtered data.
// the all products will store all the data fetched from the api.
// the reason why we do this is that if we render the program again and again then it will pile up the old data and our app  may stop working.
function App() {
  const [products, setProducts] = useState([]);
  const [allProducts, setAllProducts] = useState([]);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  useEffect(() => {
    axios.get("/api/products?search=").then((response) => {
      //console.log(response.data);  we are writing this to check whether our data is being fetched or not.uncomment it and see in the console and you will find that the data is being fetched.
      setProducts(response.data); //the above fetched data can be stored and shown on the frontend using useState.
      setAllProducts(response.data);
    });
  }, []);
  const handleSelect = (date) => {
    //console.log(date);  this is to see that the data is being fetched in the console.
    let filtered = allProducts.filter((product) => {
      let productDate = new Date(product.date);
      return (
        productDate >= date.selection.startDate &&
        productDate <= date.selection.endDate
      );
    });

    setStartDate(date.selection.startDate);
    setEndDate(date.selection.endDate);
    setProducts(filtered);
  };
  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  return (
    <>
      <header className="App-header">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <table>
          <thead>
            <tr key={products["id"]}>
              <th>id</th>
              <th>name</th>
              <th>price</th>
              <th>date</th>
              <th>email</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              return (
                <tr>
                  <td>{product.id}</td>
                  <td>{product.name}</td>
                  <td>{product.price}</td>
                  <td>{product.date}</td>
                  <td>{product.email}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </header>
    </>
  );
}

export default App;
