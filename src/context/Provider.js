import { useEffect, useState } from "react";
import Context from "./Context";
import axios from "axios";

const Provider = ({children}) => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
    setData(response.data);
  };

  const addData = (newData) => {
    setData([...data, newData]);
  };
 
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Context.Provider value={{data, addData}}>
      {children}
    </Context.Provider>
  );
}

export default Provider;