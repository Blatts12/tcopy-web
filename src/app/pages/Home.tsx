import React from "react";
import { FeedContainer } from "../../common/components/Container";
import Header from "../../common/components/Header";
import FeedComponent from "../../features/feed/FeedComponent";
import { FeedType } from "../../features/feed/feedTypes";

const Home: React.FC = () => {
  return (
    <FeedContainer>
      <Header>Najnowsze</Header>
      <FeedComponent type={FeedType.Global} />
    </FeedContainer>
  );
};

export default Home;
