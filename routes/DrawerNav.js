import { createDrawerNavigator } from "@react-navigation/drawer";
import react from "react";
import { CoursesNavigator } from "./CoursesStackNav";
import { CartNavigator } from "./CartStackNav";
import { PaymentNavigator } from "./PaymentStackNav";
import { MaterialIcons } from "@expo/vector-icons";
import { UserNavigator } from "./UserStackNav";

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="Home"
        component={CoursesNavigator}
        options={{
          title: "Catalogue",
          drawerIcon: () => (
            <MaterialIcons name="menu-book" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          title: "Panier",
          drawerIcon: () => (
            <MaterialIcons name="shopping-cart" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="Payment"
        component={PaymentNavigator}
        options={{
          title: "Achats",
          drawerIcon: () => (
            <MaterialIcons name="credit-card" size={24} color="black" />
          ),
        }}
      />
      <Drawer.Screen
        name="My Courses"
        component={UserNavigator}
        options={{
          title: "Mes Cours",
          drawerIcon: () => (
            <MaterialIcons name="mic" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
};
