import React, { Suspense } from "react";
import { BrowserRouter, Routes as RoutesDom, Route } from "react-router-dom";
import Routes from "routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Suspense fallback="Loading">
        <RoutesDom>
          {Routes.map((item, idx) => (
            <Route key={idx} path={item.path} element={<item.component />} />
          ))}
        </RoutesDom>
      </Suspense>
    </BrowserRouter>
  );
};

export default Router;
