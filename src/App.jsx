import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./pages/main/Main";
import Login from "./pages/Login";
import Navbar from "./components/navbar";
import CreatePosts from "./pages/create-post/CreatePosts";
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Login />} />
          <Route path="/createpost" element={<CreatePosts />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
