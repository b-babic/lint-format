import { Route, Switch } from "wouter";

import { DefaultLayout } from "../ui/layouts/default";
import { routes } from "./routes";

export function App() {
  return (
    <DefaultLayout>
      <Switch>
        {routes.map((route) => {
          return <Route key={route.key} component={route.component} path={route.path} />;
        })}
      </Switch>
    </DefaultLayout>
  );
}
