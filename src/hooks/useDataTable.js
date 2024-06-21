import { useState } from "react";
import useData from "../context/useData";

const useDataTable = () => {
  const { data } = useData();
  const [order, setOrder] = useState('asc');
  const [orderBy, setOrderBy] = useState('id');

  const handleSortRequest = (property) => {
    const isAsc = orderBy === property && order === 'asc';
    setOrder(isAsc ? 'desc' : 'asc');
    setOrderBy(property);
  };

  const sortedData = [...data].sort((a, b) => {
      if (orderBy === 'id') {
      return order === 'asc' ? a.id - b.id : b.id - a.id;
    }

    if (orderBy === 'userid') {
      return order === 'asc' ? a.userId - b.userId : b.userId - a.userId;
    }

    return 0;
  });

  return { order, orderBy, handleSortRequest, sortedData };
};

export default useDataTable;