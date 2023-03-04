import React from "react";
import Styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import {useState} from "react";
// import { Translate } from "@mui/icons-material";

function Header() {

const [getSideNavStatus, setSideNavStatus] = useState(false);
  return (
    <HeaderContainer>
      <Logo src="/images/logo.svg" />
      <CenteredMenuItems>
        <a href="google.com">Model S</a>
        <a href="google.com">Model 3</a>
        <a href="google.com">Model X</a>
        <a href="google.com">Model Y</a>
        <a href="google.com">Charging</a>
      </CenteredMenuItems>
      <RightSideMenuItems>
        <a class="spt" href="google.com">
          Support
        </a>
        <a class="act" href="google.com">
          Account
        </a>
        <a href="google.com" onClick={()=>setSideNavStatus(true)}>Menu</a>
      </RightSideMenuItems>

      <SideNav show={getSideNavStatus}>
        <BtnContainer>
          <CloseButton onClick={()=>setSideNavStatus(false)}/>
        </BtnContainer>
        <ul>
          <li>
            <a href="google.com">Item1</a>
          </li>
          <li>
            <a href="google.com">Item2</a>
          </li>
          <li>
            <a href="google.com">Item3</a>
          </li>
          <li>
            <a href="google.com">Item4</a>
          </li>
        </ul>
      </SideNav>
    </HeaderContainer>
  );
}

export default Header;

const HeaderContainer = Styled.div`
z-index: 1;
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

const SideNav = Styled.div`
/* display: none; */
position: fixed;
width: 40%;
background-color: white;
top: 0;
right: 0;
bottom: 0;
z-index: 2;
transform: ${props => props.show ? 'translateX(0%)' :'translateX(100%)'};
ul{
  list-style: none; 
  padding: 25px;
  display: flex;
  flex-direction: column;
  text-align: start;

  li{
padding: 18px 0;
border-bottom: 1px solid gray;

a{
  font-weight: 700;
}
  }
}

`;

const BtnContainer = Styled.div`
display: flex;
justify-content: flex-end;
`;

const CloseButton = Styled(CloseIcon)`
padding: 10px 10% 5px 5px;
cursor: pointer;
`;
