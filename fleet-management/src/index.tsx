import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./components/App/App";
import NotFound from "./components/Error/notFound";
import Navbar from "./components/Navbar/Navbar";
import UserList from "./components/UserList/UserList";
import UserDetail from "./components/UserDetail/UserDetail";
import CommentList from "./components/CommentList/CommentList";
import ArticleList from "./components/ArticleList/ArticleList";
import ArticleDetail from "./components/ArticleDetail/ArticleDetail";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/users" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
        <Route path="/comments" element={<CommentList />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
