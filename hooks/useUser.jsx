import { useContext } from "react";
import { UserContext } from "../contexts/UserContext";

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error("This context must be used in a UserContext");
  }

  return context;
};
