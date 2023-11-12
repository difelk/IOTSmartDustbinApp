import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import IconButton from "../share/Button/IconButton";
import { colors } from "../../styles/constants";

export default function Footer({ txt }) {
  const homeIcon = require("../../assets/home.png");
  const settingIcon = require("../../assets/Footer/FootSettings.png");
  const aboutIcon = require("../../assets/Footer/FootAbout.png");
  const notificationIcon = require("../../assets/Footer/FootNotify.png");
  const existIcon = require("../../assets/Footer/logout.png");
  const batteryIcon = require("../../assets/BatteryIcon.png");
  const binIcon = require("../../assets/BinIcon.png");

  const navigation = useNavigation();

  const handleLidControlBtn = (screenName) => {
    navigation.navigate(screenName);
  };

  const btnSet = [
    { Type: "Home", Icon: homeIcon },
    { Type: "Battery", Icon: batteryIcon },
    { Type: "Bin", Icon: binIcon },
    { Type: "Settings", Icon: settingIcon },
    { Type: "About", Icon: aboutIcon },
    { Type: "Notification", Icon: notificationIcon },
    { Type: "Logout", Icon: existIcon }
  ];

  return (  
    <View style={styles.footer}>
      {btnSet.map((item) => {
        if (item.Type !== txt) {
          return (
            <IconButton
              key={item.Type}
              onPress={() => handleLidControlBtn(item.Type)}
              buttonText={""}
              buttonIcon={item.Icon}
              bgColor={"#3cb89b"}
              txtColor={colors.white}
              width={25}
              height={25}
              btnSize={"SM"}
              btnType={"FOOTER"}
            />
          );
        }
        return null; 
      })}
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
        elevation: 20,
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
