import styled from "styled-components";
import { ThumbnailDescription } from "./grid";

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 10px;

`;

const CardImg = styled.img`
  width: 100%;
  height: auto;
  border-radius: 5px;
  margin-bottom: 10px;
	transition: transform 0.3s ease;

	:hover{
		transform: scale(1.1);
	}
`;

const DescriptionWrapper = styled.div`
	display: flex;
	flex-direction: row;
`
const CardDescription = styled.p`
	display: flex;
  margin: 0;

	.strong {
		font-weight: bold;
	}
`;



const Card = ({
  src,
  alt,
  description,
}: {
  src: string;
  alt: string;
  description: ThumbnailDescription;
}) => {

  return (
    <CardWrapper>
      <CardImg src={`http://www.daejeon.go.kr/`+src} alt={alt}/>
      <CardDescription>
        <p className="strong">입양상태 : </p> 
				<p> {description.adoptionStatusCd}</p>
      </CardDescription>
      <CardDescription>
				<p className="strong">나이 : </p> 
				<p> {description.age}</p>
      </CardDescription>
      <CardDescription>
				<p className="strong">성별 : </p>
				<p> {description.gender}</p>
      </CardDescription>
    </CardWrapper>
  );
};

export default Card;
