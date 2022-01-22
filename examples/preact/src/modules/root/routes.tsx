import type { FunctionComponent } from "preact";

import { Homepage } from "../home/homepage";
import { NotFoundPage } from "../ui/404";

interface Route {
  name: string;
  key: string;
  path?: string;
  component: FunctionComponent;
}

export const routes: Route[] = [
  {
    component: Homepage,
    key: "home-page",
    name: "Home",
    path: "/",
  },
  {
    component: NotFoundPage,
    key: "default-page",
    name: "error",
  },
];
