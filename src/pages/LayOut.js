import { Link, Outlet } from "react-router-dom";
function LayOut() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-light">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/Sum">
              Thống kê
            </Link>
          </li>
        </ul>
      </nav>
      <div className="content">
        <Outlet />
      </div>
    </div>
  );
}
export default LayOut;
