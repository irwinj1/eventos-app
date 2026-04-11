# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## Ejemplo de uso de la tabla
const App = () => {
  const headers = [
    { key: "id", label: "ID" },
    { key: "nombre", label: "Nombre" },
    { key: "estado", label: "Estado" },
  ];

  const items = [
    { id: 1, nombre: "Juan", estado: true },
    { id: 2, nombre: "Ana", estado: false },
  ];

  const actions = [
    {
      label: "Ver",
      className: "bg-gray-500 hover:bg-gray-600",
      onClick: (item) => console.log("Ver", item),
    },
    {
      label: "Editar",
      className: "bg-blue-500 hover:bg-blue-600",
      onClick: (item) => console.log("Editar", item),
    },
    {
      label: "Toggle",
      className: "bg-yellow-500 hover:bg-yellow-600",
      onClick: (item) =>
        console.log(item.estado ? "Desactivar" : "Activar", item),
    },
  ];