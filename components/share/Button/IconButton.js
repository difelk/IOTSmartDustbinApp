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
    case "NOTIFICATIONUNREAD":
      buttonClass = ButtonStyle.notifyUnreadBtn;
      break;
    case "LOGOUT":
      buttonClass = ButtonStyle.logoutBtn;
      break;

    case "FOOTER":
      buttonClass = ButtonStyle.footerIconBtn;
      break;

    case "LIDCONTROL":
      buttonClass = ButtonStyle.widthBtnIconLeft;
      break;
    case "":
      buttonClass = ButtonStyle.normalIconBtn;
      break;
  }

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonClass}>
        {btnType === "NOTIFICATIONUNREAD" ? <View style={{width: 12, height: 12, backgroundColor: 'red', borderRadius: 50, position: 'absolute', top: 5, right: 5}}></View> : ''}
        <Image source={buttonIcon} style={{ width: width, height: height }} />
        {buttonText !== "" ? (
          <Text
            style={
              btnType === "LID" || btnType === "LIDCONTROL"
                ? {
                    color: "#000000",
                    marginTop: 0,
                    marginLeft: 4,
                    fontWeight: "700",
                  }
                : { color: "#191952", fontWeight: "700", marginTop: 16 }
            }
          >
            {buttonText}
          </Text>
        ) : (
          ""
        )}
      </View>
    </TouchableOpacity>
  );
};

export default IconButton;
