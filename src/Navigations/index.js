import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";

import HomeNavigation from "./HomeNavigation";
import DrawerMenu from "./DrawerMenu";

export default function () {
  return (
    <NavigationContainer>
      <DrawerMenu />
    </NavigationContainer>
  );
}
