import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import "./App.css";
import styled from "styled-components";
import { AnimalInfo } from "./types";
import Header from "./component/header";
import GridComponent from "./component/grid";
import Pagination from "./component/pagination.tsx";
import Detail from "./container/detail.tsx";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 320px;
  min-height: 100vh;
`;

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <BrowserRouter>
      <AppWrapper>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <GridComponent currentPage={currentPage} />
                <Pagination
                  currentPage={currentPage}
                  totalPages={5}
                  onPageChange={handlePageChange}
                />
              </>
            }
          ></Route>
          <Route path="/:animalSeq" element={<Detail/>}></Route>
        </Routes>
      </AppWrapper>
    </BrowserRouter>
  );
}

export default App;
