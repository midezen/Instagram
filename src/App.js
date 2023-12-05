import styled, { ThemeProvider } from "styled-components";
import { RouterProvider, Outlet } from "react-router";
import Menu from "./components/Menu";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { createBrowserRouter } from "react-router-dom";
import { useState } from "react";
import { darkTheme, lightTheme } from "./Theme";

const Container = styled.div`
  display: flex;
`;

const OutletContainer = styled.div`
  flex: 4.5;
`;

const App = () => {
  const [darkMode, setDarkMode] = useState(true);

  const Layout = () => {
    return (
      <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
        <Container>
          <Menu darkMode={darkMode} />
          <OutletContainer>
            <Outlet />
          </OutletContainer>
        </Container>
      </ThemeProvider>
    );
  };

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

  return <RouterProvider router={router} />;
};

export default App;
