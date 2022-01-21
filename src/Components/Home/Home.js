import React from "react";
import Styled from "styled-components";
import HomeScreen from "./HomeScreen/HomeScreen";

function Home() {
  return (
    <HomeContainer>
     <HomeScreen
        title="Model 3"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-3.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <HomeScreen
        title="Model S"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-s.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <HomeScreen
        title="Model X"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-x.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
      <HomeScreen
        title="Model Y"
        description="Order Online for Touchless Delivery"
        backgroundImg="model-y.jpg"
        leftButtonText="Custom order"
        rightButtonText="Existing inventory"
      />
       <HomeScreen
       title="Solar and Powerwall"
        description=""
        backgroundImg="solar-panel.jpg"
        leftButtonText="Learn More"
        rightButtonText=""
      />
       <HomeScreen
        title="Accessories"
        description=""
        backgroundImg="accessories.jpg"
        leftButtonText="Shop now"
        rightButtonText=""
      />
    </HomeContainer>
  );
}

export default Home;

const HomeContainer = Styled.div``;