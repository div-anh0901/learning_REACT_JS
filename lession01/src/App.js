import logo from "./logo.svg";
import "./App.css";

function App() {
  var a = 1;
  var b = 2;
  var products = {
    id: 1,
    name: "Inphone 7 plus",
    price: 15000000,
    status: true,
  };
  var users = [
    {
      id: 1,
      name: "Nguyen Van A",
      age: 18,
    },
    {
      id: 2,
      name: "Tran van b",
      age: 12,
    },
    {
      id: 3,
      name: "Tran Van C",
      age: 24,
    },
  ];
  var elements = users.map((user, index) => {
    return (
      <div key={user.id}>
        <h2>{user.name}</h2>
        <p>{user.age}</p>
      </div>
    );
  });
  return (
    <div className="App">
      a: {a}
      <br />b : {b} <br />a + b : {a + b} <br />
      {elements}
      <div className="product">
        Id : {products.id} <br />
        Name : {products.name} <br />
        Price : {products.price} <br />
        Status : {products.status ? "Active" : "Pending"}
      </div>
    </div>
  );
}

export default App;
