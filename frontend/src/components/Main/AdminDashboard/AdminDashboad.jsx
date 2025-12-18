import React from "react";
import { Link } from "react-router-dom";
import "./AdminDashboard.css";

const AdminDashboard = () => {
  return (
    <section className="adminDashboard">
      <header className="adminHeader">
        <h1>Panel de Administración</h1>
      </header>

      <p className="adminSubtitle">
        Gestión interna de Globomarket
      </p>

      <div className="adminGrid">
        <Link to="/users" className="adminCard">
          <h2>👥 Usuarios</h2>
          <p>Ver y gestionar empleados del sistema</p>
        </Link>

        <Link to="/createuser" className="adminCard">
          <h2>➕ Alta de usuario</h2>
          <p>Crear nuevos empleados y asignar roles</p>
        </Link>

        <Link to="/mkt" className="adminCard">
          <h2>📣 Marketing</h2>
          <p>Campañas y comunicación interna</p>
          </Link>

        <Link to="/hr" className="adminCard">
          <h2>🧑‍💼 Recursos Humanos</h2>
          <p>Gestión de personal y formación</p>
        </Link>
      </div>
    </section>
  );
};

export default AdminDashboard;
