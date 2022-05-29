import { createContext } from "react";

//My hooks
import useLoginStatus from "./hooks/useLoginStatus";

const Context = createContext();

function GlobalData({ children }) {
  const LoginStatus = useLoginStatus();

  return (
    <Context.Provider value={{ LoginStatus }}>{children}</Context.Provider>
  );
}

export { GlobalData, Context };
