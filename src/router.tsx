import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RootLayout } from "./pages/Layout";
import { Home } from "./pages/home";
import { Project } from "./pages/project";
import { Projects } from "./pages/projects";

export default function AppRouter() {
  const root = createBrowserRouter([
    {
      element: <RootLayout />,
      children: [
        { path: "/:locale?", element: <Home /> },
        { path: "/projects/:project", element: <Project /> },
        { path: "/projects", element: <Projects /> },
      ],
    },
  ]);

  return <RouterProvider router={root} />;
}
