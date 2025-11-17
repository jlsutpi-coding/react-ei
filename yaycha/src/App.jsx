import { useState } from "react";

import { Box, Container } from "@mui/material";

import Item from "./components/Item";
import List from "./components/List";
import Form from "./components/Form";

import { useApp } from "./AppContext";
import Header from "./components/Header";

export default function App() {
  const { showForm, setGlobalMsg } = useApp();

  const [data, setData] = useState([
    { id: 3, content: "Hello World", name: "Jl Sut Pi" },
    { id: 2, content: "React is fun", name: "Arkar Hein" },
    { id: 1, content: "PipleApple is good", name: "Hikaru" },
  ]);

  const removeItem = (itemId) => {
    setData(data.filter((itemData) => itemData.id !== itemId));
    setGlobalMsg("An item is deleted");
  };
  const addItem = (content, name) => {
    const id = data[0].id + 1;
    setData([{ id, name, content }, ...data]);
    setGlobalMsg("An item is added");
  };
  return (
    <Box>
      <Header />
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        {showForm && <Form add={addItem} />}
        {data.map((dataItem) => (
          <Item key={dataItem.id} item={dataItem} remove={removeItem} />
        ))}
      </Container>
    </Box>
  );
}
