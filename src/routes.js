import { lazy } from "react";

const Routes = [
  {
    path: "/",
    component: lazy(() => import("pages/categories")),
  },
  {
    path: "/book",
    component: lazy(() => import("pages/books")),
  },
];

export default Routes;
