import React, { useState } from "react";

export const MyContext = React.createContext();

export const MyProvider = ({ children }) => {
  const [myState, SetMyState] = useState("Test");
  return (
    <MyContext.Provider
      value={{
        myState,
        SetMyState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
