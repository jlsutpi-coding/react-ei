import { createContext, useContext } from "react";

export const AppContent = createContext();
export function useApp() {
  return useContext(AppContent);
}
