import { useState } from "react";
import Item from "./Item";
import List from "./List";
import Form from "./Form";
import { useContext } from "react";
import { AppContent } from "./ThemedApp";

export default function App() {
  const [data, setData] = useState([
    { id: 1, content: "Hello World", name: "Jl Sut Pi" },
    { id: 2, content: "React is fun", name: "Arkar Hein" },
    { id: 3, content: "PipleApple is good", name: "Hikaru" },
  ]);
  const [showForm, setShowForm] = useState(false);
  const { mode, setMode } = useContext(AppContent);
  const hi = useContext(AppContent);
  console.log(hi);

  function removeItem(itemId) {
    setData(data.filter((itemData) => itemData.id !== itemId));
  }
  function addItem(content, name) {
    const id = data[data.length - 1].id + 1;
    setData([...data, { id, name, content }]);
  }
  return (
    <div
      style={{
        minHeight: 1500,
        paddingTop: 20,
        background: mode === "dark" ? "black" : "white",
        color: mode === "dark" ? "white" : "black",
      }}
    >
      <div
        style={{
          maxWidth: 600,
          margin: "20px auto",
        }}
      >
        <h1
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          Foodie
          <div>
            <button
              onClick={() => setShowForm(!showForm)}
              style={{
                width: 32,
                height: 32,
                borderRadius: 50,
                border: "0 none",
                background: showForm ? "#dc3545" : "#0d6efd",
                color: "white",
              }}
            >
              {showForm ? "×" : "+"}
            </button>

            <button
              style={{
                marginLeft: 8,
                padding: "0 20px",
                height: 32,
                borderRadius: 32,
                border: "0 none",
                background: mode === "dark" ? "#333" : "#ddd",
                color: mode === "dark" ? "white" : "black",
              }}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "light" ? "Dark" : "Light"}
            </button>
          </div>
        </h1>

        {showForm && <Form add={addItem} />}

        <List>
          {data.map((item) => (
            <Item key={item.id} item={item} remove={removeItem} />
          ))}
        </List>
      </div>
    </div>
  );
}
