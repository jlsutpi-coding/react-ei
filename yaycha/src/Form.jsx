import { useContext } from "react";
import { useRef } from "react";
import { AppContent } from "./ThemedApp";

export default function Form({ add }) {
  const contentRef = useRef();
  const nameRef = useRef();

  const { mode } = useContext(AppContent);

  function onSubmitHandler(e) {
    e.preventDefault();
    const content = contentRef.current.value;
    const name = nameRef.current.value;
    add(content, name);
    e.currentTarget.reset();
  }
  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 3,
        padding: 10,
        borderRadius: 8,
        marginBottom: 20,
        background: mode === "dark" ? "gray" : "#def",
      }}
      onSubmit={(e) => {
        onSubmitHandler(e);
      }}
    >
      <input
        type="text"
        placeholder="Content"
        tyle={{ padding: 5 }}
        ref={contentRef}
      />
      <input
        type="text"
        placeholder="Name"
        style={{ padding: 5 }}
        ref={nameRef}
      />
      <button
        type="submit"
        style={{
          padding: 8,
          background: "#0d6efd",
          color: "white",
          border: "none",
        }}
      >
        Post
      </button>
    </form>
  );
}
