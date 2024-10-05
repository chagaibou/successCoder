import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from "../screens/Payment";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Cart from "../screens/Cart";
const CartStackNavigator = createStackNavigator();

export const CartNavigator = () => {
  return (
    <CartStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialIcons name="shopping-cart" size={35} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <CartStackNavigator.Screen
        name="Cart"
        component={Cart}
        options={{ title: "Panier" }}
      />
    </CartStackNavigator.Navigator>
  );
};
