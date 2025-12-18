import { FaUserCircle } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

const Perfil = ({ role, onLogout, variant = "navbar" }) => {
  const navigate = useNavigate();

  const goToPerfil = () => {
    navigate("/perfil");
  };

  // ===== VISTA PERFIL COMPLETO =====
  if (variant === "page") {
    return (
      <div className="perfil-page">
        <FaUserCircle size={100} />
        <h2>Mi perfil</h2>

        <div className="perfil-info">
          <p><strong>Rol:</strong> {role}</p>
          {/* aquí luego nombre, email, etc */}
        </div>

        <div
          className="mobile-item logout-item"
          onClick={onLogout}
        >
          <FiLogOut size={18} />
          <span>Cerrar sesión</span>
        </div>
      </div>
    );
  }

  // ===== NAVBAR / MOBILE =====
  return (
    <div className={`perfil ${variant}`}>
      <div className="perfil-user" onClick={goToPerfil}>
        <FaUserCircle size={36} />
        <span className="role">{role}</span>
      </div>

      {variant === "navbar" && (
        <button className="logoutBtn" onClick={onLogout}>
          Cerrar sesión
        </button>
      )}

      {variant === "mobile" && (
        <div className="mobile-item logout-item" onClick={onLogout}>
          <FiLogOut size={18} />
          <span>Cerrar sesión</span>
        </div>
      )}
    </div>
  );
};

export default Perfil;
