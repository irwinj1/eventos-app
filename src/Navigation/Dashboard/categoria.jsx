import { Routes, Route } from "react-router";
import { CategoriasView } from "../../views/catalogos/categorias/CategoriasView"
import { CrearCategoriaView } from "../../views/catalogos/categorias/CrearCategoriaView";

export const CategoriaRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<CategoriasView />} />
            <Route path="crear" element={<CrearCategoriaView />} />
        </Routes>
    );
}; 