import Post from "../components/Post";
import Header from "../components/Header";
import SideBar from "../components/SideBar";
import Footer from "../components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { useState } from "react";
import PostList from "../components/PostList";
import PostListProvider from "../store/Post-List-Store";
import { useContext } from "react";

import { PostList as PostListValue } from "../store/Post-List-Store";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <PostListProvider>
      <div className="AppContainer">
        <SideBar
          className="SideBar"
          // selected={Selected}
          // handleClick={handleClick}
        ></SideBar>
        <div className="Container">
          <Header></Header>
          <Outlet />
          <Footer></Footer>
        </div>
      </div>
    </PostListProvider>
  );
}

export default App;
