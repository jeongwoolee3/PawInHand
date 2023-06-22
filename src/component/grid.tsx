import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch} from "react-redux";
import { AppDispatch, setAnimalItemList } from "../hooks/store";
import styled from "styled-components";
import Card from "./card";
import { AnimalList, AnimalItem } from "../api/api";
import { adoptionStatusCd, gender, AnimalInfo } from "../types";

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
`;
const GridContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export interface ThumbnailDescription {
  animalSeq: string;
  adoptionStatusCd: string;
  age: string;
  gender: string;
}
const GridComponent = ({
  currentPage,
}: {
  currentPage: number;
}) => {
  const [animalList, setAnimalList] = useState<AnimalInfo[] | undefined>(
    undefined
  );
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();


  useEffect(() => {
    const fetchData = async () => {
      const list = await AnimalList(9, currentPage, 1);
      setAnimalList(list);
    };

    fetchData();
  }, [currentPage]);

  const handleContentClick = (animalSeq: string) => {
    navigate(`/${animalSeq}`);

    const fetchData = async () => {
      const item = await AnimalItem(animalSeq);
      dispatch(setAnimalItemList(item))
      console.log(item["age"])
    };
    fetchData();
  };

  const description = new Array<ThumbnailDescription>();
  animalList &&
    animalList.map((animal) => {
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
          <GridContent
            onClick={() => {
              handleContentClick(animal.animalSeq)
            }}
          >
            <Card
              src={animal.filePath}
              alt={`Image ${index + 1}`}
              description={
                description
                  ? description[index]
                  : {
                      animalSeq: "wjddn",
                      adoptionStatusCd: "입양중",
                      age: "5세",
                      gender: "남",
                    }
              }
            />
          </GridContent>
        ))}
    </ImageGrid>
  );
};

export default GridComponent;
