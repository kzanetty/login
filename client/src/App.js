import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import { GlobalUsuarioProvider } from "./context/usuario/usuario.context";
import { router } from "./router/index";
import { ButtonComponent, Footer } from "./ui/components";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "./GlobalStyles";
import { Container } from "./style";
import { darkTheme, lightTheme } from "./theme";
import ToastAnimated from "./ui/components/toastr/toastr.component";
import "./app.css";

function App() {
  const [theme, setTheme] = useState("light");

  function themeToggler() {
    theme === "light" ? setTheme("dark") : setTheme("light");
  }

  return (
    <div className="App">
      <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme}>
        <GlobalStyles />
        <Container>
          <GlobalUsuarioProvider>
            <ToastAnimated />
            <RouterProvider router={router} />
            <ButtonComponent texto="Change theme" onClick={themeToggler} />
            <Footer />
          </GlobalUsuarioProvider>
        </Container>
      </ThemeProvider>
    </div>
  );
}

export default App;
