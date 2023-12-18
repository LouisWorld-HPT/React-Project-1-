import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navi from "./Components/Navi/Navi";
import PostRenderPage from "./Components/posts/PostRenderPage";
import Profile from "./Components/Profile/Profile";
import AboutUs from "./Components/AboutUs/AboutUs";
import NotFound404 from "./Components/NotFound404";
import PostDetails from "./Components/posts/PostDetails";
import Log from "./Components/Log/Log";
import SignUp from "./Components/Log/SignUp";
import Login from "./Components/Log/Login";
import ProvidingGoods from "./ProvidingGoods";
function App() {
  return (
    <BrowserRouter>
      <div className="Pagelogo_div">
        <h1>React Assignment</h1>
        <Log></Log>
      </div>
      <Navi></Navi>
      <Routes>
        {/* Home Route Default*/}
        <Route index path="/" element={<Home />} />

        {/* Post Rendering */}
        <Route path="/posts" element={<PostRenderPage />} />

        {/* Profiles */}
        <Route path="/profile" element={<Profile />} />

        {/* About Us */}
        <Route path="/aboutUs" element={<AboutUs />} />

        {/* For the extra details */}
        <Route path="/postDetails/:id" element={<PostDetails />} />

        {/* Log */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />

        {/* Not found */}
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
