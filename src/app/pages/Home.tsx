import React from "react";
import styled from "styled-components";
import Header from "../../common/components/Header";
import FeedComponent from "../../features/feed/FeedComponent";
import { FeedType } from "../../features/feed/feedTypes";

const Container = styled.div`
  grid-area: content;
`;

const Home: React.FC = () => {
  return (
    <Container>
      <Header>Najnowsze</Header>
      <FeedComponent type={FeedType.Global} />
    </Container>
  );
};

export default Home;
