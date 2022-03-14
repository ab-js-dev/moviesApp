import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CSSReset, extendTheme, ThemeProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { MoviesPage } from "./routes/movies";
import { MyListPage } from "./routes/my-list";

const theme = extendTheme({
  config: {
    initialColorMode: "dark",
  },
});
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CSSReset />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/movies" element={<MoviesPage />} />
            <Route path="/my-list" element={<MyListPage />} />
            <Route
              path="*"
              element={
                <main style={{ padding: "1rem" }}>
                  <p>There's nothing here!</p>
                </main>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
