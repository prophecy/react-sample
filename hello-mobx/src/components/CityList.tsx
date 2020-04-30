import React from "react";
import { useObserver } from "mobx-react-lite";
import { storeContext } from "../stores/context";

import { City } from "./City";

export const CityList = () => {
  const store = React.useContext(storeContext);
  if (!store) throw Error("Store shouldn't be null");

  return useObserver(() => {
    return <City cities={store.filteredCities} />;
  });
};

export default CityList;