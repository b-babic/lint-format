import Router from "preact-router";
import AsyncRoute from "preact-async-route";

import { DefaultLayout } from "../ui/layouts/default";

import { routes } from "./routes";

export function App() {
  return (
    <DefaultLayout>
      <Router>
        {routes.map((route) => (
          <AsyncRoute
            key={route.key}
            default={!route.path}
            getComponent={route.getComponent}
            path={route.path as string}
          />
        ))}
      </Router>
    </DefaultLayout>
  );
}
