import { useEffect } from "react";
import { useState } from "react";

const useData = () => {
  const [dataInfo, setDataInfo] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => setDataInfo(data));
  }, []);
  return [dataInfo, setDataInfo];
};

export default useData;
