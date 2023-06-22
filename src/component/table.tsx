import React from "react";
import styled from "styled-components";
import {
  AnimalInfo,
  ItemKeyTransfer,
  ItemKey,
  adoptionStatusCd,
  gender,
  classification
} from "../types";
import { useSelector } from "react-redux";
import { RootState } from "../hooks/store";

const TableContainer = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableRow = styled.tr`
  border-bottom: 1px solid #ccc;

  &:nth-child(even) {
    background-color: #f2f2f2;
  }
`;

const TableCell = styled.td`
  padding: 8px;
  text-align: left;
  border-bottom: 1px solid #ddd;

  &:first-child {
    font-weight: bold;
  }

  &:nth-child(2n + 3) {
    font-style: italic;
  }
`;

const ExampleTable = () => {
  const ItemData = useSelector((state: RootState) => state);
  console.log(ItemData.itemList["age"]);
  return (
    <TableContainer>
      <tbody>
        {ItemKey.map((key: string, index) => (
          <TableRow key={index}>
            <TableCell>{ItemKeyTransfer[key]}</TableCell>
            <TableCell>
              {(() => {
                switch (key) {
                  case "adoptionStatusCd":
                    return adoptionStatusCd[Number(ItemData.itemList[key])];
                  case "classification":
                    return classification[Number(ItemData.itemList[key])];
                  case "gender":
                    return gender[Number(ItemData.itemList[key])];
                  default:
                    return ItemData.itemList[key as keyof AnimalInfo];
                }
              })()}
            </TableCell>
          </TableRow>
        ))}
      </tbody>
    </TableContainer>
  );
};

export default ExampleTable;
// ItemData.itemList[key as keyof AnimalInfo]
