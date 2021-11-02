import React from "react";
import { useToggle } from "react-use";
import Drawer from "../../common/components/Drawer";
import Navbar from "../../common/components/Navbar";
import LoginForm from "../../features/auth/LoginForm";
import RegisterForm from "../../features/auth/RegisterForm";
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
        title="Register"
        open={openDrawer}
        closeFunction={toggleOpenDrawer}
      >
        {/* <RegisterForm /> */}
        <LoginForm />
      </Drawer>
    </>
  );
};

export default Home;
