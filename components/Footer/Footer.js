import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../share/Button/IconButton";
import { colors } from "../../styles/constants";

export default function Footer() {
  const homeIcon = require("../../assets/home.png");

  const navigation = useNavigation();

const handleLidControlBtn = (screenName) => {
  navigation.navigate(screenName);
}

  return (
    <View style={styles.footer}>
      <IconButton
        onPress={() => handleLidControlBtn("Home")}
        buttonText={""}
        buttonIcon={homeIcon}
        bgColor={"#3cb89b"}
        txtColor={colors.white}
        width={25}
        height={25}
        btnSize={"SM"}
        btnType={"FOOTER"}
      />
      {/* <Text>Help</Text>
      <Text>bug</Text> */}
    </View>
  );
}

const styles = StyleSheet.create({
  footer: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#4869EA",
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 20,
    marginRight: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    ...Platform.select({
      android: {
        elevation: 8,
      },
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
      },
    }),
  },
});
