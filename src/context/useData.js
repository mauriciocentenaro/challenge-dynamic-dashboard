import { useContext } from "react";
import Context from "./Context";

const useData = () => useContext(Context);

export default useData;