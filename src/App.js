import styled from "styled-components";
import { RouterProvider, Outlet } from "react-router";
import Menu from "./components/Menu";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";

const Container = styled.div``;

const Layout = () => (
  <Container>
    <Menu />
    <Outlet />
  </Container>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/profile", element: <Profile /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
