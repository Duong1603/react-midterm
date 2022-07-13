import React, { useState, useEffect } from "react";
import axios from "axios";

const Sum = () => {
  const [sum, setSum] = useState({
    sumlList: [],
  });
  const { sumlList } = sum;
  const getSum = async () => {
    var res = await axios.get("http://127.0.0.1:8000/api/sum");
    setSum({ sumlList: res.data.data });
  };
  useEffect(() => {
    getSum();
  }, []);
  return (
    <>
      <div className="container">
        <h3>Danh sách Fruit</h3>
        {sumlList.map((sum) => {
          return (
            <div>
              {sum.type} có {sum.quantity} sản phẩm
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Sum;
