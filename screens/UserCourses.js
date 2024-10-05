import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import React from "react";
import EmptyMsg from "../components/EmptyMsg";
import globalStyles from "../styles/globalStyles";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign } from "@expo/vector-icons";
import { deleteCourse } from "../redux/actions/actionDeleteCourse";
const UserCourses = ({ navigation }) => {
  const loggedInmemberCourses = useSelector(
    (state) => state.courses.loggedInmemberCourses
  );
  const dispatch = useDispatch();
  const handleDeleteCourse = (courseId) => {
    Alert.alert("Attention", "Voulez-vous supprimer ce cours", [
      { text: "NON" },
      { text: "OUI", onPress: () => dispatch(deleteCourse(courseId)) },
    ]);
  };
  if (loggedInmemberCourses.length > 0) {
    return (
      <FlatList
        data={loggedInmemberCourses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.coursesContainer}>
            <View style={styles.coursesinfos}>
              <Text numberOfLines={1} style={styles.coursesTitle}>
                {item.title}
              </Text>
              <Text style={styles.coursesPrice}>{item.price} $</Text>
            </View>
            <View style={styles.btnIcon}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("Edit", {
                    courseId: item.id,
                  });
                }}
                style={styles.touchableIcon}
              >
                <AntDesign name="edit" size={24} color={globalStyles.green} />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => handleDeleteCourse(item.id)}
                style={styles.touchableIcon}
              >
                <AntDesign name="delete" size={24} color={globalStyles.green} />
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
    );
  }
  return <EmptyMsg text="Pas de cours à afficher" />;
};

export default UserCourses;

const styles = StyleSheet.create({
  coursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    marginVertical: 9,
    marginHorizontal: 17,
    paddingTop: 15,
    paddingBottom: 15,
    paddingRight: 9,
    paddingLeft: 9,
  },
  coursesinfos: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 9,
    paddingHorizontal: 9,
  },
  coursesTitle: {
    width: "80%",
  },
  coursesPrice: {
    color: globalStyles.green,
  },

  btnIcon: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  touchableIcon: {
    padding: 9,
  },
});
