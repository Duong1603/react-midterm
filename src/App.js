import "./App.css";
import LayOut from "./pages/LayOut";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import FoodList from "./pages/FoodList";
import Sum from "./pages/Sum";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LayOut />}>
          <Route path="/" element={<FoodList />} />
          <Route path="/Sum" element={<Sum />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
// react-router-dom chỉ cho định tuyến giữa các component nội bộ bên trong component đang định nghĩa chứ ko liên kết ra bên ngoài,
// nếu muốn liên kết ra ngoài thì dùng  thẻ a=href chứ ko dùng thẻ Link
// xem thêm về định tuyến react-router-dom tại
// https://www.youtube.com/watch?v=5jYlY4y5Dfs

export default App;
