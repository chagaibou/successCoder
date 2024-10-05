import { ScrollView, StyleSheet, View } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import React, { useReducer, useState } from "react";
import globalStyles from "../styles/globalStyles";
import { formReducer } from "../formData/formReducer";
import { editCourse } from "../redux/actions/actionEditCourse";
import { createCourse } from "../redux/actions/actionCreateCourse";
import Input from "../components/Input";
import BtnForm from "../components/BtnForm";
const UserEditCourse = ({ route, navigation }) => {
  const dispatch = useDispatch();
  const courseId = route.params.courseId;

  const myCourse = useSelector((state) =>
    state.courses.loggedInmemberCourses.find((course) => course.id === courseId)
  );

  // const [title, setTitle] = useState(myCourse ? myCourse.title : "");
  // const [img, setImg] = useState(myCourse ? myCourse.img : "");
  // const [price, setPrice] = useState(myCourse ? myCourse.price : "");
  // const [desc, setDesc] = useState(myCourse ? myCourse.description : "");

  formInitialState = {
    inputValues: {
      title: myCourse ? myCourse.title : "",
      img: myCourse ? myCourse.img : "",
      price: "",
      desc: myCourse ? myCourse.description : "",
    },
    isValidInput: {
      title: myCourse ? true : false,
      img: myCourse ? true : false,
      price: myCourse ? true : false,
      desc: myCourse ? true : false,
    },
    isValidPress: myCourse ? true : false,
  };
  const [formState, formActionsDispatch] = useReducer(
    formReducer,
    formInitialState
  );
  const handlePress = () => {
    const { title, img, price, desc } = formState.inputValues;
    if (courseId) {
      //mise a jour
      dispatch(editCourse(courseId, title, img, desc));
    } else {
      //creation
      dispatch(createCourse(title, desc, img, parseFloat(price)));
    }
    navigation.goBack();
  };

  const inputHandler = (inputName, text) => {
    let isValidInput = false;
    if (text.length > 0) {
      isValidInput = true;
    }
    //dispatcher l'action

    formActionsDispatch({
      type: "INPUT_VALIDATION",
      value: text,
      isValid: isValidInput,
      input: inputName,
    });
  };

  return (
    <ScrollView>
      <View style={styles.formContainer}>
        <Input
          label="Titre"
          value={formState.inputValues.title}
          onKeyStroke={(text) => inputHandler("title", text)}
        />

        <Input
          label="Image (URL)"
          value={formState.inputValues.img}
          onKeyStroke={(text) => inputHandler("img", text)}
        />

        {/*
       <View style={styles.formControl}>
            <Text style={styles.label}>Prix</Text>
            <TextInput
              value={price}
              onChangeText={(text) => setPrice(text)}
              style={styles.input}
              keyboardAppearance="decimal-pad"
            />
          </View>
      */}

        {myCourse ? null : (
          <Input
            label="Price"
            value={formState.inputValues.price}
            onKeyStroke={(text) => inputHandler("price", text)}
            keyboardType="decimal-pad"
          />
        )}
        <Input
          label="Informations"
          value={formState.inputValues.desc}
          onKeyStroke={(text) => inputHandler("desc", text)}
          multiline
          numberOfLines={5}
        />

        <BtnForm
          btnText={
            formState.isValidForm ? "Valider" : "Veuillez repmlir les champs"
          }
          activated={formState.isValidForm ? false : true}
          onHandlePress={handlePress}
        />
      </View>
    </ScrollView>
  );
};

export default UserEditCourse;

const styles = StyleSheet.create({
  formContainer: {
    backgroundColor: globalStyles.white,
    borderRadius: 9,
    padding: 20,
    margin: 20,
  },
  formControl: {
    width: "100%",
  },
  label: {
    marginVertical: 15,
    color: globalStyles.green,
    fontWeight: "bold",
  },
  input: {
    paddingHorizontal: 9,
    paddingVertical: 9,
    borderColor: globalStyles.green,
    borderWidth: 0.5,
    borderRadius: 6,
  },
});
