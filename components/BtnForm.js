import { StyleSheet, Text, View, Pressable } from "react-native";
import React, { act } from "react";
import globalStyles from "../styles/globalStyles";

const BtnForm = ({ btnText, activated, onHandlePress }) => {
  return (
    <Pressable onPress={onHandlePress} disabled={activated}>
      <View
        style={{
          ...styles.btnContainer,
          backgroundColor: activated ? globalStyles.orange : globalStyles.green,
        }}
      >
        <Text
          style={{
            ...styles.btnText,
            color: activated ? globalStyles.darkGrey : globalStyles.white,
          }}
        >
          {btnText}
        </Text>
      </View>
    </Pressable>
  );
};

export default BtnForm;

const styles = StyleSheet.create({
  btnContainer: {
    borderRadius: 6,
    paddingVertical: 9,
    paddingHorizontal: 25,
    backgroundColor: globalStyles.orange,
    marginTop: 20,
  },
  btnText: {
    fontSize: 19,
    textAlign: "center",
  },
});
