import {
  createHashRouter,
  RouterProvider,
  Outlet,
  // useLoaderData
} from "react-router-dom";

import "./app.css";
import MainLayout from "./layouts/MainLayout";
import Dashboard from "./pages/Dashboard";
import About from "./pages/About";

const router = createHashRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <Outlet />
      </MainLayout>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },
]);

export default function App() {
  return (
    <RouterProvider
      router={router}
      fallbackElement={<p>Loading...</p>}
      future={{
        v7_startTransition: true,
      }}
    />
  );
}

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}
