import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ButtonStyle from "./ButtonStyle";

const IconButton = ({
  onPress,
  buttonText,
  buttonIcon,
  bgColor,
  txtColor,
  width,
  height,
  btnSize,
  btnType,
}) => {
  let buttonClass = ButtonStyle.primaryBtn;
  //   let buttonbkgClass = ButtonStyle.bkgWhite;
  switch (btnSize) {
    case "LG":
      buttonClass = ButtonStyle.iconBtnLg;
      break;
    case "MD":
      buttonClass = ButtonStyle.iconBtnMD;
      break;
    case "SM":
      buttonClass = ButtonStyle.iconBtnSM;
      break;
  }

  switch (btnType) {
    case "LID":
      buttonClass = ButtonStyle.lidBtn;
      break;
    case "BATTERY":
      buttonClass = ButtonStyle.batteryBtn;
      break;
    case "BIN":
      buttonClass = ButtonStyle.binBtn;
      break;
    case "SETTINGS":
      buttonClass = ButtonStyle.settingsBtn;
      break;
    case "ABOUT":
      buttonClass = ButtonStyle.aboutBtn;
      break;
    case "NOTIFICATION":
      buttonClass = ButtonStyle.notifyBtn;
      break;
    case "LOGOUT":
      buttonClass = ButtonStyle.logoutBtn;
      break;

    case "FOOTER":
      buttonClass = ButtonStyle.footerIconBtn;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonClass}>
        <Image source={buttonIcon} style={{ width: width, height: height }} />
       {buttonText !== "" ? <Text
          style={btnType === "LID" ? { color: txtColor } : { color: txtColor }}
        >
          {buttonText}
        </Text> : ''}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
