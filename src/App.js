import styled from "styled-components";
import { RouterProvider, Outlet } from "react-router";
import Menu from "./components/Menu";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const OutletContainer = styled.div`
  flex: 4.5;
`;

const Layout = () => (
  <Container>
    <Menu />
    <OutletContainer>
      <Outlet />
    </OutletContainer>
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
