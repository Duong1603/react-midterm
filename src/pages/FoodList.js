import { useState, useEffect } from "react";
import axios from "axios";

const FoodList = () => {
  //   const [type, setType] = useState("");
  const [foods, setFoods] = useState([
    {
      id: "",
      name: "",
      detail: "",
      type: "",
      price: "",
      image: "",
    },
  ]);
  const [noDataFound, setNoDataFound] = useState("");

  useEffect(() => {
    getFoots(); // eslint-disable-next-line
  }, []);
  const getFoots = () => {
    axios
      .get(`http://127.0.0.1:8000/api/food`)
      .then((res) => {
        console.log(res.data);
        if (res.status === 200) {
          setFoods(res.data.data ? res.data.data : []);
          console.log(res.data.data ? res.data.data : []);
          console.log(foods);
        }
        if (res.data.status === "failed" && res.data.success === false) {
          setNoDataFound(res.data.message);
          console.log(noDataFound);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handlerInput = (event) => {
    const { name, value } = event.target;
    setSearch((pre) => ({ ...pre, [name]: value }));
  };
  const handlerSubmit = (event) => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:8000/api/food/find`, search).then((res) => {
      console.log(res.data);
      setFoods(res.data.data);
    });
  };

  const [search, setSearch] = useState({
    name: "",
    min: 0,
    max: 100000,
  });
  return (
    <div className="container">
      <h4 className="font-weight-bold">List of Foods</h4>
      <form onSubmit={handlerSubmit}>
        <input onChange={handlerInput} value={search.min} name="min"></input>
        <input onChange={handlerInput} value={search.max} name="max"></input>
        <input name="name" onChange={handlerInput} value={search.name}></input>
        <button type="submit">search</button>
      </form>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>name</th>
            <th>detail</th>
            <th>price</th>
            <th>Image</th>
          </tr>
        </thead>
        <tbody>
          {!!foods.length ? (
            foods.map((food, index) => (
              <tr key={index}>
                <td>{food.id}</td>
                <td>{food.name}</td>
                <td>{food.detail}</td>
                <td>{food.price}</td>
                <td>
                  <img
                    className="img-thumnail"
                    style={{ width: "100px", height: "100px" }}
                    src={`http://localhost:8000/image/${food.image}`}
                    alt=""
                  />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No Data in API</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};
export default FoodList;
