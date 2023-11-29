import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";

export default function AlertBox({ type, description }) {
  const infoIcon = require("../../assets/info.png");
  const successIcon = require("../../assets/checked.png");

  let alertProps = { ClassName: null, Icon: null, HeaderText: "" };

  switch (type) {
    case "INFO":
      alertProps.ClassName = styles.infoBox;
      alertProps.Icon = infoIcon;
      alertProps.HeaderText = "Information";
      break;
    case "SUCCESS":
      alertProps.ClassName = styles.successBox;
      alertProps.Icon = successIcon;
      alertProps.HeaderText = "Success";
      break;
    case "WARNING":
      alertProps.ClassName = styles.warningBox;
      alertProps.Icon = infoIcon;
      alertProps.HeaderText = "Warning";
      break;
    case "ERROR":
      alertProps.ClassName = styles.errorBox;
      alertProps.Icon = infoIcon;
      alertProps.HeaderText = "Error";
      break;
    default:
      alertProps.ClassName = styles.hide;
      break;
  }

  return (
    <>
      <View style={styles.alertWrapper}>
        <View style={[styles.contentBox, alertProps.ClassName]}>
          <View style={styles.imgBox}>
            <Image source={alertProps.Icon} style={styles.icon} />
          </View>
          <View style={styles.textBox}>
            <Text style={styles.headerTxt}>{alertProps.HeaderText}</Text>
            <Text style={styles.desc}>{description}</Text>
          </View>
        </View>
      </View>
    </>
  );
}
const styles = StyleSheet.create({
  alertWrapper: {
    display: "flex",
    flexDirection: "column",
    padding: 18,
    width: "100%",
    marginTop: 20,
  },
  contentBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 8,
    padding: 12,
    paddingLeft: 20,
  },
  imageBox: {
    alignItems: "center",
  },
  icon: {
    width: 40,
    height: 40,
    marginRight: 24,
  },
  textBox: {},
  headerTxt: {
    color: "#FFFFFF",
    fontSize: 16,
    marginBottom: 2,
  },
  desc: {
    width: 200,
    color: "#FFFFFF",
    fontSize: 12,
  },
  infoBox: {
    backgroundColor: "#35c4fc",
  },
  successBox: {
    backgroundColor: "#75d00f",
  },
  warningBox: {
    backgroundColor: "#ffb70a",
  },
  errorBox: {
    backgroundColor: "#f33950",
  },
  hide: {
    display: "none",
  },
});
