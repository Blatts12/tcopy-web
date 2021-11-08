import React from "react";
import { useToggle } from "react-use";
import Drawer from "../../common/components/Drawer";
import Navbar from "../../common/components/Navbar";
import FeedComponent from "../../features/feed/FeedComponent";
import CreatePostForm from "../../features/post/CreatePostForm";

const Home: React.FC = () => {
  const [openAddPost, toggleAddPost] = useToggle(false);

  return (
    <>
      <Navbar title="Home page" openDrawer={toggleAddPost} />
      <div className="home">
        <FeedComponent type="global" />
      </div>
      <Drawer
        title="Dodaj post"
        open={openAddPost}
        closeFunction={toggleAddPost}
      >
        <CreatePostForm closeFunction={toggleAddPost} />
      </Drawer>
    </>
  );
};

export default Home;
