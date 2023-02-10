import React, { useState, useRef, useEffect } from "react";
import Home from "./Pages/home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Pages/login/Login";
import List from "./Pages/list/List";
import Single from "./Pages/singe/Single";
import New from "./Pages/new/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path="login" element={<Login />} />
            <Route path="User">
              <Route index element={<List />} />
              <Route path=":UserId" element={<Single />} />
              <Route path="new" element={<New />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;
