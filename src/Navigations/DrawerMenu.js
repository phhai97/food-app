import React from "react";
import {
  createDrawerNavigator,
} from "@react-navigation/drawer";

import MainNavication from './HomeNavigation';
import VoucherScreen from '../Screens/Voucher';
import CategoryScreen from '../Screens/Category';
import Products from '../Screens/Products';


const Drawer = createDrawerNavigator();

function DrawerMenu() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Home" component={MainNavication} />
      <Drawer.Screen name="Voucher" component={VoucherScreen} />
      <Drawer.Screen name="Category" component={CategoryScreen} />
      <Drawer.Screen name="Products" component={Products} />
    </Drawer.Navigator>
  );
}

export default DrawerMenu;
