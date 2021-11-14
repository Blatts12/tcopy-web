import React from "react";
import { Outlet } from "react-router";
import Navbar from "../../common/components/Navbar";
import FeedComponent from "../../features/feed/FeedComponent";

const Home: React.FC = () => {
  return (
    <>
      <Navbar title="Latest" />
      <div className="home">
        <FeedComponent type="global" />
      </div>
      <Outlet />
    </>
  );
};

export default Home;
