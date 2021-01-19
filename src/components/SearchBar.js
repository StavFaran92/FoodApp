import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const SearchScreen = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={styles.backgroundStyle}>
      <AntDesign name="search1" style={styles.iconStyle} />
      <TextInput
        autoCapitalize="none"
        autoCorrect={false}
        value={term}
        placeholder="Search"
        style={styles.inputStyle}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      ></TextInput>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 10,
    marginTop: 5,
    marginBottom: 10,
    flexDirection: "row",
  },
  inputStyle: {
    marginLeft: 15,
    flex: 1,
  },
  iconStyle: {
    fontSize: 24,
    color: "black",
    alignSelf: "center",
    marginLeft: 5,
  },
});

export default SearchScreen;
