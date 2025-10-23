import React, { createContext, useState } from "react";
import { food_items } from "../food";

export const userData = createContext();
const UserContext = ({ children }) => {
  const [input, setInput] = useState("");
  let [cat, setCat] = useState(food_items);
  // Sidebar hide and show
  const [showCard, setShowCard] = useState(false);

  const data = {
    input,
    setInput,
    cat,
    setCat,
    showCard,
    setShowCard,
  };
  return (
    <div>
      <userData.Provider value={data}>{children}</userData.Provider>
    </div>
  );
};

export default UserContext;
