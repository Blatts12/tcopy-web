import React from "react";
import Navbar from "../../common/components/navigation/Navbar";
import FeedComponent from "../../features/feed/FeedComponent";
import { FeedType } from "../../features/feed/feedTypes";

const Home: React.FC = () => {
  return (
    <>
      <Navbar title="Home page" />
      <div className="home">
        <FeedComponent type={FeedType.Global} />
      </div>
    </>
  );
};

export default Home;
