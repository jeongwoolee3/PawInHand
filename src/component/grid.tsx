import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Card from './card'
import { AnimalList } from "../api/api";
import { AnimalInfo } from "../App";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
const GridContent = styled.div`
  display: flex;
  flex-direction: column;
`;
const ImageItem = styled.img`
  width: 100%;
  height: auto;
`;

const GridComponent = () => {

  const [animalList, setAnimalList] = useState<AnimalInfo[]| undefined>(undefined); 
  useEffect(() => {
    const fetchData = async () => {
      const list = await AnimalList(10, 1, 5);
      setAnimalList(list)
      // animalList을 사용하여 필요한 작업을 수행합니다.
      // 예: 상태로 설정하거나, 컴포넌트 내부에서 사용합니다.
    };

    fetchData();
  }, []);



  return (
    <ImageGrid>
      
      {animalList && animalList.map((animal, index) => (
        <GridContent>
          <Card
            src={animal.filePath}
            alt={`Image ${index + 1}`}
            description={'gkdl..'}
          />
        </GridContent>
      ))}
      
    </ImageGrid>
  );
};

export default GridComponent;
