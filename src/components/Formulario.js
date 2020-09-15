import React, { useContext, useState } from "react";
import { CategoriasContext } from "../context/CategoriasContext";
import { RecetasContext } from "../context/RecetasContext";

const Formulario = () => {
  const [busqueda, guardarBusqueda] = useState({
    nombre: "",
    categoria: "",
  });

  const { categorias } = useContext(CategoriasContext);
  const { buscarRecetas, guardarConsulta } = useContext(RecetasContext);
  //funcion leer contendidos

  const obtenerDatosReceteta = (e) => {
    guardarBusqueda({
      ...busqueda,
      [e.target.name]: e.target.value,
    });
  };

  const busquedaRecetas = (e) => {
    e.preventDefault();
    buscarRecetas(busqueda);
    guardarConsulta(true);
  };
  return (
    <form className="col-12" onSubmit={busquedaRecetas}>
      <fieldset className="text-center">
        <legend>Buscar bebidas por categoria o ingrediente</legend>
      </fieldset>
      <div className="row">
        <div className="col-md-4">
          <input
            name="nombre"
            className="form-control"
            type="text"
            placeholder="Buscar por ingrediente"
            onChange={obtenerDatosReceteta}
          />
        </div>
        <div className="col-md-4">
          <select
            name="categoria"
            className="form-control"
            onChange={obtenerDatosReceteta}
          >
            <option value="">--Selecciona una categoria--</option>
            {categorias.map((categoria) => (
              <option key={categoria.strCategory} value={categoria.strCategory}>
                {categoria.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            value="Busacar Bebidas"
            className="btn btn-block btn-primary"
          />
        </div>
      </div>
    </form>
  );
};

export default Formulario;
