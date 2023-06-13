import React, { useEffect, useState } from "react";
import styled, { ThemeConsumer } from "styled-components";
import Card from "./card";
import { AnimalList } from "../api/api";
import { AnimalInfo } from "../App";
import { getDefaultHighWaterMark } from "stream";

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

type ResponseForm = {
  [key: number]: string;
};


export const adoptionStatusCd : ResponseForm = {
  1: "공고중",
  2: "입양가능",
  3: "입양예정",
  4: "입양완료",
  5: "자연사",
  6: "안락사",
  7: "주인반환",
  8: "임시보호",
  9: "입양불가",
  10: "방사",
  11: "주민참여",
  12: "입원중",
} as const;

export const gender : ResponseForm = {
  1: "암",
  2: "수",
  3: "중성화 암컷",
  4: "중성화 수컷",
  5: "미상",
} as const;
export interface ThumbnailDescription {
  animalSeq: string;
  adoptionStatusCd: string;
  age: string;
  gender: string;
}

const GridComponent = () => {
  const [animalList, setAnimalList] = useState<AnimalInfo[] | undefined>(
    undefined
  );
  const [thumbDescription, setThumbnailDescription] =
    useState<ThumbnailDescription[]>();

  useEffect(() => {
    const fetchData = async () => {
      const list = await AnimalList(10, 1, 1);
      setAnimalList(list);
      console.log(list);
     
    };

    fetchData();
  }, []);
  const description = new Array<ThumbnailDescription>();
  animalList &&
    animalList.map((animal, index) => {
      description.push({
        animalSeq: animal.animalSeq,
        adoptionStatusCd: adoptionStatusCd[Number(animal.adoptionStatusCd)],
        age: animal.age,
        gender: gender[Number(animal.gender)],
      });
    });

  return (
    <ImageGrid>
      {animalList &&
        animalList.map((animal, index) => (
          <GridContent>
            <Card
              src={animal.filePath}
              alt={`Image ${index + 1}`}
              description={description? description[index] : {animalSeq: 'wjddn', adoptionStatusCd: '입양중', age: '5세', gender :'남'}}
            />
          </GridContent>
        ))}
    </ImageGrid>
  );
};

export default GridComponent;
