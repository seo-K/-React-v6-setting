import React, { useEffect, useState } from "react";

import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";

// scrolltop
import ScrollTop from "./component/scrollTop/ScrollTop";

// Main
import Main from "./views/main/MainPage";

// Product
import AboutDefaultPage from "./views/product/AboutDefaultPage";
import AboutPage from "./views/product/AboutPage";
import ProductPage from "./views/product/ProductPage";

// User
import UserDefaultPage from "./views/user/UserDefaultPage";
import UsersPage from "./views/user/UserPage";
import TogglePage from "./views/user/TogglePage";

// Notfound
import NotFound from "./views/NotFound";

export default function App() {
  return (
    <React.Fragment>
      <ScrollTop />
      <Routes>
        {/* 1. 이전버전 */}
        {/* <Route exact path="/" component={Main}/> */}

        {/* 2. 현버전 */}
        <Route path="/" element={<Main />} />

        {/* about 관련 페이지 */}
        {/* 만약 정확히 일치하는 path 가 없을때 그나마 얘랑 비슷하다 생각해서 해당 페이지 노출. */}
        <Route path="/about" element={<AboutDefaultPage />}>
          <Route path="main" element={<AboutPage />} />
          <Route path="product" element={<ProductPage />} />
        </Route>
        <Route path="/users" element={<UserDefaultPage />}>
          <Route path="toggle" element={<TogglePage />} />
          <Route path="ididid" element={<UsersPage />} />
          {/* <Route path=":id" element={<UsersPage />} /> */}
        </Route>

        <Route path="/*" element={<NotFound />} />
        {/* <Route path="/*" element={<div>Page Not Found</div>} /> */}
      </Routes>
    </React.Fragment>
  );
}
