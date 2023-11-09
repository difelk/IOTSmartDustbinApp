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

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonClass}>
        <Image source={buttonIcon} style={{ width: width, height: height }} />
        <Text style={{ color: txtColor }}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
