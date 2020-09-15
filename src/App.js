import React from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";
import ListarRecetas from "./components/ListarRecetas";

//Contexts
import CategoriasProvider from "./context/CategoriasContext";
import RecetasProvider from "./context/RecetasContext";

function App() {
  return (
    <CategoriasProvider>
      <RecetasProvider>
        <Header />
        <div className="container mt-5">
          <div className="row">
            <Formulario />
          </div>
          <ListarRecetas />
        </div>
      </RecetasProvider>
    </CategoriasProvider>
  );
}

export default App;
