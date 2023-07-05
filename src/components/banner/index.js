import styled from "styled-components";

const Banner = () => {
  return (
    <Container>
        <div className="tree"><Img alt="img" src="tree.png" /></div>
        <div>
          <Title>나무와 함께하는 신비로운 온습도 탐험</Title>
          <text>나무와 함께하는 온습도를 측정하여, <br>
          </br>자연과의 조화를 실감해보세요!</text>
        </div>
        
     </Container>
  );
}

export default Banner;

const Container = styled.p`
margin-left: 80px;
width :fit-content;
height:fit-content;
display: flex;
align-items: center;
>div{
    display: flex;
    flex-direction: column;
}
`;

const Img = styled.img`
margin:20px 10px 0 30px;
width:200px;
height: 200px;
padding-left:0;
`;

const Title = styled.p`
color: #548361;
font-size: 32px;
font-weight: 600;
`;