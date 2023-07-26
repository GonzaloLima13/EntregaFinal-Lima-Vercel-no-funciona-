import "./NavBar.css";
import { CartWidget } from "../CartWidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      <header className="navbar">
        <div className="container">
          <div className="navbar__content">
            <NavLink to="/">
              <img
                className="navbar__logo"
                src="https://i.redd.it/pw9s6kvxgea41.png"
              />
            </NavLink>
            <nav className="navbar__items">
              <NavLink
                to={"/category/accion"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Acción
              </NavLink>
              <NavLink
                to={"/category/aventura"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Aventura
              </NavLink>
              <NavLink
                to={"/category/simulador"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Simulador
              </NavLink>
              <NavLink
                to={"/category/carrera"}
                style={({ isActive }) => ({
                  color: isActive ? "#51c363" : "#8686d2",
                })}
              >
                Carrera
              </NavLink>

            </nav>
            <CartWidget />
          </div>
        </div>
      </header>
      <Outlet />
    </>
  );
};
