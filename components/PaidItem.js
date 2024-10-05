import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import globalStyles from "../styles/globalStyles";
import { AntDesign } from "@expo/vector-icons";
import CoursesOverView from "./CoursesOverView";

const PaidItem = ({ totalPrice, date, courseDetails }) => {
  const [isShowing, setIsShowing] = useState(false);
  const handleShow = () => {
    setIsShowing((prevState) => !prevState);
  };

  return (
    <ScrollView style={styles.paidCoursesContainer}>
      <View style={styles.paidCourses}>
        <Text style={styles.totalPaid}>{totalPrice.toFixed(2)} $</Text>
        <Text style={styles.date}>{date}</Text>
      </View>
      <TouchableOpacity style={styles.iconBtn} onPress={handleShow}>
        <AntDesign
          name={isShowing ? "minuscircleo" : "pluscircleo"}
          size={24}
          color={globalStyles.green}
        />
      </TouchableOpacity>
      {isShowing && (
        <View style={styles.detailPaidCourses}>
          {courseDetails.map((course) => (
            <CoursesOverView
              key={course.id}
              title={course.title}
              price={course.price}
            />
          ))}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  paidCoursesContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 10,
    margin: 20,
    padding: 15,
  },
  paidCourses: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "100%",
    marginBottom: 15,
  },
  totalPaid: {
    fontSize: 18,
  },
  date: {
    fontSize: 16,
  },
  iconBtn: {
    alignSelf: "flex-end",
  },
  detailPaidCourses: {
    marginTop: 20,
    borderTopColor: globalStyles.lightGrey,
    borderTopWidth: 1,
  },
});

export default PaidItem;
