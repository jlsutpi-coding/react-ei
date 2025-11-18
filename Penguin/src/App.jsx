import { useState } from "react";
import { useApp } from "./AppContext";
import { Box, Container } from "@mui/material";
import Header from "./components/Header";
import Item from "./components/Item";
import Form from "./components/Form";
import AppDrawer from "./AppDrawer";
function App() {
  const [data, setData] = useState([
    { id: 3, name: "Jl Sut Pi", content: "Hello World" },
    { id: 2, name: "Arkar Hein", content: "Hey! How are you?" },
    { id: 1, name: "Obito Uchiha", content: "I see" },
  ]);
  const { showForm, globalMsg, setGlobalMsg } = useApp();
  console.log(globalMsg, "hi sdlfsdfj;a j;kf;aldjfaof jdiojfad;kj");

  // remove item form data array
  function removeData(itemId) {
    setData(data.filter((dataItem) => dataItem.id !== itemId));
    setGlobalMsg("An item is deleted.");
  }

  // add item to data array
  const addItem = (content, name) => {
    const id = data[0].id + 1;
    setData([{ id, content, name }, ...data]);
    setGlobalMsg("An item is added.");
  };

  console.log(showForm);
  return (
    <>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={addItem} />}

        {data.map((dataItem) => (
          <Item key={dataItem.id} item={dataItem} remove={removeData} />
        ))}
      </Container>
    </>
  );
}

export default App;
