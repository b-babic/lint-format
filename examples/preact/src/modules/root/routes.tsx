interface Route {
  name: string;
  key: string;
  path?: string;
  getComponent: () => void;
}

export const routes: Route[] = [
  {
    getComponent: () => import("@/modules/home").then((module) => module.HomePage),
    key: "home-page",
    name: "Home",
    path: "/",
  },
  {
    getComponent: () => import("@/modules/ui").then((module) => module.NotFoundPage),
    key: "default-page",
    name: "error",
  },
];
