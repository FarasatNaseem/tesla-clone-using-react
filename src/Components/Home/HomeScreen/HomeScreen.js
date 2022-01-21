import React from "react";
import Styled from "styled-components";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom"

function HomeScreen({
  title,
  description,
  backgroundImg,
  leftButtonText,
  rightButtonText,
}) {
  return (
    <MainContainer bgImage={backgroundImg}>
      <Zoom>
      <Text>
          <h1>{title}</h1>
          <p>{description}</p>
        </Text>
      </Zoom>
      <Buttons>
        <Zoom>
          <ButtonGroup>
            <LeftSideButton>{leftButtonText}</LeftSideButton>
            {rightButtonText && (
              <RightSideButton>{rightButtonText}</RightSideButton>
            )}
          </ButtonGroup>
        </Zoom>
        <ArrowButton src="/images/down-arrow.svg" />
      </Buttons>
    </MainContainer>
  );
}

export default HomeScreen;

const MainContainer = Styled.div`
width: 100vw;
height: 100vh;
background-size: cover;
background-position: center;
backgroud-repeat: no-repeat;
background-image: url("/images/model-s.jpg");
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
background-image: ${(props) => `url("/images/${props.bgImage}");`};
`;

const Text = Styled.div`
padding-top: 18vh;
text-align: center;
`;

const Buttons = Styled.div`
// display: flex;
`;
const ButtonGroup = Styled.div`
display: flex;
margin: 0 0 30px 0;
justify-content: space-between;

@media (max-width: 600px){
    flex-direction: column;
}
`;

const LeftSideButton = Styled.div`
background-color: rgba(23,26,32,0.8);
height: 40px;
width: 256px;
color: white;
display: flex;
align-items: center;
justify-content: center;
border-radius: 100px;
text-transform: uppercase;
opacity: 0.9;
font-size: 12px;
cursor: pointer;
margin: 15px 10px 5px 10px;

@media (max-width: 600px){
    width: 80vw;
    margin: 15px 10vw 5px 10vw;
}
`;

const RightSideButton = Styled(LeftSideButton)`
background-color: white;
color:black;
opacity: 0.5;
`;

const ArrowButton = Styled.img`
height: 40px;
animation: downArrowButtonAnimation infinite 1.5s;
overflow-x: hidden;
`;
