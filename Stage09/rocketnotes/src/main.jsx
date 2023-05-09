import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./styles/global";

import { MyContext } from "./myContext";

import { Routes } from "./routes";

import theme from "./styles/theme";



ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MyContext.Provider value={{email: 'marcio@email.com'}}>
      <Routes />
      </MyContext.Provider>
    </ThemeProvider>
  </React.StrictMode>
);
