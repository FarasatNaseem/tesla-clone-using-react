import React from "react";
import Styled from "styled-components";
function Header() {
  return (
        <HeaderContainer>
      <Logo src="/images/logo.svg" />
      <CenteredMenuItems>
        <a href="#">Model S</a>
        <a href="#">Model 3</a>
        <a href="#">Model X</a>
        <a href="#">Model Y</a>
        <a href="#">Charging</a>
      </CenteredMenuItems>
      <RightSideMenuItems>
        <a class="spt" href="#">Support</a>
        <a class="act" href="#">Account</a>
        <a href="#">Menu</a>
      </RightSideMenuItems>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = Styled.div`
min-height: 70px;
position: fixed;
display: flex;
align-items: center;
justify-content: space-between;
padding: 0 20px;
top: 0;
left: 0;
right: 0;
`;

const Logo = Styled.img`
`;

const CenteredMenuItems = Styled.div`
display: flex;
align-items: center;
justify-content: center;
flex: 1;
padding-left: 5rem;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media (max-width: 1000px){
    display: none;
}

`;

const RightSideMenuItems = Styled.div`
display: flex;
align-items: center;
a{
    font-weight: 600;
    text-transform: uppercase;
    padding: 0 10px;
    flex-wrap: no-wrap;
}

@media (max-width: 500px){
    .spt, .act{
        display: none;
    }
}

`;
