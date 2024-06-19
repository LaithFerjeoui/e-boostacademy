import Layout from "./Components/Layout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout flag={"home"} />,
  },
  {
    path: "/offers",
    element: <Layout flag={"offers"} />,
  },
  {
    path: "/points",
    element: <Layout flag={"points"} />,
  },
  {
    path: "/about",
    element: <Layout flag={"about"} />,
  },
]);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
