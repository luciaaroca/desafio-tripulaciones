import { useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const navigate = useNavigate();
  const [menuOpen, setMenuOpen] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");
    navigate("/login");
  };

  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-left">
        <img
          src="/logo_globomarket_white.png"
          alt="Globomarket Logo"
          className="navbar-logo"
        />
      </div>

      {/* Logout escritorio */}
      <button className="logoutBtn desktop" onClick={handleLogout}>
        Cerrar sesión
      </button>

      {/* Botón hamburguesa */}
      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Menú móvil */}
      {menuOpen && (
        <div className="mobile-menu">
          <div className="mobile-item logout-item" onClick={handleLogout}>
            Cerrar sesión
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
