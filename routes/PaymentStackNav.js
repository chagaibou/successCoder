import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from "../screens/Payment";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const PaymentStackNavigator = createStackNavigator();

export const PaymentNavigator = () => {
  return (
    <PaymentStackNavigator.Navigator
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
      <PaymentStackNavigator.Screen
        name="Payment"
        component={Payment}
        options={{ title: "Mes achats" }}
      />
    </PaymentStackNavigator.Navigator>
  );
};
