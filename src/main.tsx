import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import styled from "styled-components";
import Header from "./component/header.tsx";
import GridComponent from "./component/grid.tsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppWrapper className="hi">
      <Header/>
      <GridComponent />
    </AppWrapper>
  </React.StrictMode>
);
