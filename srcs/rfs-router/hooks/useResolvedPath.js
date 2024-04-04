import { resolveTo } from "@remix-run/router";
import useLocation from "./useLocation";
import * as React from "react";
import getPathContributingMatches from "../../shared/getPathContributingMatches.js";

const useResolvedPath = (to, { relative } = {}) => {
  const { matches } = React.useContext(RouteContext);
  const { pathname: locationPathname } = useLocation();

  const routePathnamesJson = JSON.stringify(getPathContributingMatches(matches).map((match) => match.pathnameBase));

  return React.useMemo(
    () => resolveTo(to, JSON.parse(routePathnamesJson), locationPathname, relative === "path"),
    [to, routePathnamesJson, locationPathname, relative]
  );
};

export default useResolvedPath;
