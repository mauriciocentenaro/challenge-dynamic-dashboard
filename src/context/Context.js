import { createContext } from "react";

const Context = createContext({
  data: [],
  addData: () => {}
});

export default Context;