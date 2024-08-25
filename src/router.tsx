import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RootLayout from "./pages";

export default function AppRouter() {
  const root = createBrowserRouter([
    {
      path: "/",
      Component: RootLayout,
      children: [
        { path: "/", Component: () => <div>Home</div> },
        { path: "/about", Component: () => <div>Sobre</div> },
      ],
    },
  ]);

  return <RouterProvider router={root} />;
}
