import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import CourseItem from "../components/CourseItem";
import EmptyMsg from "../components/EmptyMsg";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/actions/actionAddToCart";
const Landing = ({ navigation }) => {
  const existingCourses = useSelector((state) => state.courses.existingCourses);
  const coursesToDisplay = existingCourses.filter(
    (course) => course.selected === false
  );
  const dispatch = useDispatch();

  const handleAddToCart = (course) => {
    dispatch(addToCart(course));
    alert("Article ajouté au panier");
  };

  if (existingCourses.length) {
    return (
      <FlatList
        data={coursesToDisplay}
        renderItem={({ item }) => (
          <CourseItem
            image={item.image}
            title={item.title}
            price={item.price}
            viewDetails={() =>
              navigation.navigate("Details", {
                courseId: item.id,
                title: item.title,
              })
            }
            onAddToCart={() => handleAddToCart(item)}
          />
        )}
      />
    );
  }
  return <EmptyMsg text="Pas de cours à afficher" />;
};

export default Landing;

const styles = StyleSheet.create({});
