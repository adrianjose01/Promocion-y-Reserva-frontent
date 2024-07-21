import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../Images/logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../Context/user-context";
import { Dropdown } from "rsuite";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { isLoggedIn } = useContext(UserContext);

  const navigate = useNavigate();

  function onToggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  return (
    <header>
      <nav className="flex items-center justify-between mx-10 my-3">
        <Link to="/">
          <img className="w-16 h-16" src={logo} alt="Logo" />
        </Link>
        <div>
          <div className="text-center md:hidden">
            <button onClick={onToggleMenu}>
              {isMenuOpen ? (
                <FontAwesomeIcon icon={faX} size="32" />
              ) : (
                <FontAwesomeIcon icon={faBars} size="32" />
              )}
            </button>
          </div>
          <ul
            className={`gap-5 flex-col items-center m-10 ${
              isMenuOpen ? "flex" : "hidden"
            } md:flex md:flex-row md:m-0`}
          >
            <Link to="/sobre-nosotros" className="font-bold text-base">
              Sobre Nosotros
            </Link>
            <Link to="/noticias" className="font-bold text-base">
              Noticias
            </Link>
            <Link to="/lugares-turisticos" className="font-bold text-base">
              Lugares Turisticos
            </Link>
            {isLoggedIn ? (
              <>
                <Dropdown
                  menuStyle={{
                    padding: "10px",
                    border: "1px black solid",
                    borderRadius: "8px",
                    position: "absolute",
                    background: "white",
                  }}
                  style={{ fontWeight: "bold" }}
                  title={`Juan M. Perez`}
                >
                  <Dropdown.Item
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    onSelect={() => navigate("/perfil")}
                  >
                    Perfil
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                    onSelect={() => navigate("/solicitudes")}
                  >
                    Solicitudes
                  </Dropdown.Item>
                  <Dropdown.Item
                    style={{
                      fontWeight: "bold",
                      fontSize: "16px",
                      margin: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Cerrar Sesión
                  </Dropdown.Item>
                </Dropdown>
              </>
            ) : (
              <>
                <Link to="/iniciar-sesion" className="font-bold text-base">
                  Iniciar Sesion
                </Link>
                <Link
                  to="/registrarse"
                  className="py-2 px-4 bg-sky-900 text-white rounded-lg"
                >
                  Registrarme
                </Link>
              </>
            )}
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
