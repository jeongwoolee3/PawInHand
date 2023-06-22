import styled from "styled-components";


const Container = styled.div`
  margin: 0 0;
  display: flex;
  flex-direction: column;
  position: relative;
`;
const Background = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ffff;
`;
const Header = styled.header`
  display: flex;
  padding: 20px 0;
  justify-content: center;
  align-items: center;
  width: 100vw;
  background-color: #333;
  color: #fff;
  
`;
// const Title = styled.h1`
//   font-size: 24px;
//   font-weight: bold;
//   align-self: center;
// `;

// const Button = styled.button`
//   display: inline-block;
//   padding: 10px 20px;
//   font-size: 16px;
//   color: #fff;
//   background-color: #007bff;
//   border: none;
//   border-radius: 4px;
//   cursor: pointer;
// `;

const header = () => {
  return (
    <Container>
      <Background>
        <Header>
          {/* <Title>강아지 입양 서비스</Title> */}
          <img src ='/assets/PawInHandLogo.png' height={'100px'}/>
          <img src='/assets/puppy.png' width={'90px'} />
        </Header>
      </Background>
    </Container>
  );
};

export default header;
