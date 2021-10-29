import React from "react";
import { useToggle } from "react-use";
import Drawer from "../../common/components/Drawer";
import Navbar from "../../common/components/Navbar";
import FeedComponent from "../../features/feed/FeedComponent";
import { FeedType } from "../../features/feed/feedTypes";

const Home: React.FC = () => {
  const [openDrawer, toggleOpenDrawer] = useToggle(false);

  return (
    <>
      <Navbar title="Home page" openDrawer={toggleOpenDrawer} />
      <div className="home">
        <FeedComponent type={FeedType.Global} />
      </div>
      <Drawer
        title="Add Post"
        open={openDrawer}
        closeFunction={toggleOpenDrawer}
      >
        <div>eldo</div>
      </Drawer>
    </>
  );
};

export default Home;
