import { RouteContext } from "../context";
import * as React from "react";

const OutletContext = React.createContext(null);

const useOutlet = (context) => {
  const outlet = React.useContext(RouteContext).outlet;
  if (outlet) {
    return <OutletContext.Provider value={outlet}>{context}</OutletContext.Provider>;
  }
  return outlet;
};

export default useOutlet;
