import React from "react";
import styled from "styled-components";

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
  description: string;
}) => {

  return (
    <CardWrapper>
      <CardImg src={`http://www.daejeon.go.kr/`+src} alt={alt}/>
      <CardDescription>
        <p className="strong">이름:</p> 
				<p> 정우</p>
      </CardDescription>
      <CardDescription>
				<p className="strong">이름:</p> 
				<p> 2살</p>
      </CardDescription>
      <CardDescription>
				<p className="strong">이름:</p>
				<p> 남자</p>
      </CardDescription>
    </CardWrapper>
  );
};

export default Card;
