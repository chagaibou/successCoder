import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Payment from "../screens/Payment";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import UserCourses from "../screens/UserCourses";
import UserEditCourse from "../screens/UserEditCourse";
const UserStackNavigator = createStackNavigator();

export const UserNavigator = () => {
  return (
    <UserStackNavigator.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: globalStyles.green },
        headerTitleStyle: { fontWeight: "bold" },
        headerTintColor: globalStyles.white,
        headerRight: () => (
          <TouchableOpacity onPress={() => navigation.navigate("Cart")}>
            <MaterialIcons name="shopping-cart" size={35} color="black" />
          </TouchableOpacity>
        ),
      }}
    >
      <UserStackNavigator.Screen
        name="Courses"
        component={UserCourses}
        options={({ navigation }) => ({
          title: "Mes Cours",
          headerTintColor: globalStyles.white,
          headerRight: () => (
            <TouchableOpacity
              onPress={() =>
                navigation.navigate("Edit", {
                  title: "Créer un cours",
                })
              }
            >
              <MaterialIcons name="library-add" size={35} color="black" />
            </TouchableOpacity>
          ),
        })}
      />
      <UserStackNavigator.Screen
        name="Edit"
        component={UserEditCourse}
        options={({ route }) => {
          title: route.params.title ? route.params.title : "Editer le cours";
        }}
      />
    </UserStackNavigator.Navigator>
  );
};
