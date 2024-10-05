import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Landing from "../screens/Landing";
import CourseInfos from "../screens/CourseInfos";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

const CoursesStackNavigator = createStackNavigator();

export const CoursesNavigator = () => {
  return (
    <CoursesStackNavigator.Navigator
      screenOptions={({ navigation }) => ({
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialIcons name="shopping-cart" size={35} color="black" />
          </TouchableOpacity>
        ),
        headerLeft: () => (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <MaterialIcons name="menu" size={35} color="black" />
          </TouchableOpacity>
        ),
      })}
    >
      <CoursesStackNavigator.Screen name="Landing" component={Landing} />
      <CoursesStackNavigator.Screen
        name="Details"
        component={CourseInfos}
        options={({ route }) => ({
          title: route.params.title,
        })}
      />
    </CoursesStackNavigator.Navigator>
  );
};
