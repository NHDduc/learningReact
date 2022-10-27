import logo from "./logo.svg";
import "./App.css";
import Card from "./componets/card/index";

function App() {
  const members = [
    {
      name: "duc",
      age: 15,
    },
    {
      name: "nam",
      age: 16,
    },
    {
      name: "lam",
      age: 17,
    },
  ];

  return (
    <>
      <h2>học react</h2>
      {members.map((item, index) => (
        <Card fullName={item.name} age={item.age} />
      ))}
    </>
  );
}

export default App;
