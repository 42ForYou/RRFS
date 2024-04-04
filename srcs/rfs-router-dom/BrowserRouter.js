import { createBrowserHistory } from "@remix-run/router";
import Router from "../rfs-router/components/Router";
import * as React from "react";

const BrowserRouter = ({ basename, children, window }) => {
  const historyRef = React.useRef();

  if (historyRef.current === null || historyRef.current === undefined) {
    historyRef.current = createBrowserHistory({ window, v5Compat: true });
  }

  const history = historyRef.current;

  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });

  React.useLayoutEffect(() => history.listen(setState), [history]);

  return (
    <Router
      basename={basename}
      children={children}
      action={state.action}
      location={state.location}
      navigator={history}
    />
  );
};

export default BrowserRouter;
