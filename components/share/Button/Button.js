import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ButtonStyle from "./ButtonStyle";

const MyButton = ({ onPress, buttonText, buttonType, isItActive }) => {
  const buttonStyles =
    buttonType === "PRIMARY"
      ? ButtonStyle.primaryBtn
      : buttonType === "LINK"
      ? ButtonStyle.link
      : buttonType === "TAB"
      ? isItActive ? [ButtonStyle.tabButton, ButtonStyle.ActiveTab] :  ButtonStyle.tabButton
      : ButtonStyle.button;
  const textStyles =
    buttonType === "PRIMARY"
      ? ButtonStyle.primaryBtnText
      : buttonType === "LINK"
      ? ButtonStyle.linkText
      : buttonType === "TAB"
      ? isItActive ? [ButtonStyle.tabButtonTxt, ButtonStyle.ActiveTabTxt] : ButtonStyle.tabButtonTxt
      : ButtonStyle.buttonText;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={textStyles}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
