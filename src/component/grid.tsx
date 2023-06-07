import React from "react";
import { AnimalList } from "../api/api";
import styled from "styled-components";
import { AnimalInfo } from "../App";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr); 
  gap: 16px; 
`;
const GridContent = styled.div`
	display: flex;
	flex-direction: column;
`
const ImageItem = styled.img`
  width: 100%;
  height: auto;
`;

const GridComponent = () => {

    const animalList = AnimalList( 10,  1,  5).then()
  
    return (
      <ImageGrid>
				<GridContent></GridContent>
        {animalList.map((animal, index) => (
          <ImageItem key={index} src={animal.filePath} alt={`Image ${index + 1}`} />
        ))}
      </ImageGrid>
    );
  };
  
  export default GridComponent;