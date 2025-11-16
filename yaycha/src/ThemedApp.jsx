import { createContext } from "react";
import App from "./App";
import { useState } from "react";

export const AppContent = createContext();

export default function ThemedApp() {
  const [mode, setMode] = useState("dark");
  return (
    <AppContent.Provider value={{ mode, setMode }}>
      <App />
    </AppContent.Provider>
  );
}
