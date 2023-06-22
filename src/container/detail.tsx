import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import ExampleTable from "../component/table";
import { useSelector } from "react-redux";
import { RootState } from "../hooks/store";

const Wapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50vw;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-top: 2rem;
`;

const Detail = () => {
  const ItemData = useSelector((state: RootState) => state);
  const { animalSeq } = useParams();
  return (
    <Wapper>
      <h3>{animalSeq}번 페이지 입니다.</h3>
      <img src={`http://www.daejeon.go.kr/` + ItemData.itemList.filePath} />
      <ExampleTable />
    </Wapper>
  );
};

export default Detail;
