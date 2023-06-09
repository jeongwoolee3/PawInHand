import React from "react";
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
	display: flex;
	flex-direction: column;
`;
const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffff;
`
const Header = styled.header`
  padding: 20px 0;
  background-color: #333;
  color: #fff;
`;
const Title = styled.h1`
  font-size: 24px;
  font-weight: bold;
`;

const Button = styled.button`
  display: inline-block;
  padding: 10px 20px;
  font-size: 16px;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const HomePage = () => {
  return (
    <Container>
    	<Background>
				<Header>
					<Title>강아지 입양 서비스</Title>
				</Header>
    	</Background>
    </Container>
  );
};

export default HomePage;