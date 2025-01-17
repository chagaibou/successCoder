import react from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DrawerNavigator } from "./DrawerNav";
const AppNav = () => {
  return (
    <NavigationContainer>
      <DrawerNavigator />
    </NavigationContainer>
  );
};

export default AppNav;
