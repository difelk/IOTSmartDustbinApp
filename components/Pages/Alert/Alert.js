import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, Platform } from "react-native";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";
import MyButton from "../../share/Button/Button";

export default function AlertPage() {
  const [displayMsgs, setDisplayMsg] = useState([
    { batteryMsg: "", error: "" },
    { binMsg: "", error: "" },
    { otherMsg: "", error: "" },
    { batteryDeadMsg: "", error: "" },
    { binAlmostMsg: "", error: "" },
  ]);

  const handleDisplayMessage = (type) => {
    console.log("handleDisplayMessage - ", type);
    switch (type) {
      case "SAVE_BATTERY":
        break;
      case "SAVE_BIN":
        break;
      case "SAVE_OTHER":
        break;
      case "SAVE_BATTERY_DEAD":
        break;
      case "SAVE_BIN_ALMOST":
        break;
      default:
        break;
    }
  };

  const handleSaveMessage = (type) => {
    const lengthError = "Error: Message cannot be more than 16 words";

    switch (type) {
      case "SAVE_BATTERY":
        if (displayMsgs[0].batteryMsg && displayMsgs[0].batteryMsg.length > 16) {
          setDisplayMsg((prevMsgs) => [
            { ...prevMsgs[0], error: lengthError },
            ...prevMsgs.slice(1),
          ]);
        }
        break;
      case "SAVE_BIN":
        if (displayMsgs[1].binMsg && displayMsgs[1].binMsg.length > 16) {
          setDisplayMsg((prevMsgs) => [
            ...prevMsgs.slice(0, 1),
            { ...prevMsgs[1], error: lengthError },
            ...prevMsgs.slice(2),
          ]);
        }
        break;
      case "SAVE_OTHER":
        if (displayMsgs[2].otherMsg && displayMsgs[2].otherMsg.length > 16) {
          setDisplayMsg((prevMsgs) => [
            ...prevMsgs.slice(0, 2),
            { ...prevMsgs[2], error: lengthError },
          ]);
        }
        break;
        case "SAVE_BATTERY_DEAD":
          console.log("SAVE_BATTERY_DEAD - ", displayMsgs[3]);
          if (displayMsgs[3].batteryDeadMsg && displayMsgs[3].batteryDeadMsg.length > 16) {
            setDisplayMsg((prevMsgs) => [
              ...prevMsgs.slice(0, 3),
              { ...prevMsgs[3], error: lengthError },
              ...prevMsgs.slice(4),
            ]);
          }
          break;
      case "SAVE_BIN_ALMOST":
        if (displayMsgs[4].binAlmostMsg && displayMsgs[4].binAlmostMsg.length > 16) {
          setDisplayMsg((prevMsgs) => [
            ...prevMsgs.slice(0, 4),
            { ...prevMsgs[4], error: lengthError },
          ]);
        }
        break;
      default:
        break;
    }
  };

  const handleTxtChange = (value, type) => {
    switch (type) {
      case "BATTERY":
        setDisplayMsg((prevMsgs) => [
          { ...prevMsgs[0], batteryMsg: value, error: "" },
          ...prevMsgs.slice(1),
        ]);
        break;
      case "BIN":
        setDisplayMsg((prevMsgs) => [
          ...prevMsgs.slice(0, 1),
          { ...prevMsgs[1], binMsg: value, error: "" },
          ...prevMsgs.slice(2),
        ]);
        break;
      case "OTHER":
        setDisplayMsg((prevMsgs) => [
          ...prevMsgs.slice(0, 2),
          { ...prevMsgs[2], otherMsg: value, error: "" },
        ]);
        break;
      case "BATTERY_DEAD":
        setDisplayMsg((prevMsgs) => [
          ...prevMsgs.slice(0, 3),
          { ...prevMsgs[3], batteryDeadMsg: value, error: "" },
          ...prevMsgs.slice(3),
        ]);
        break;
      case "BIN_ALMOST":
        setDisplayMsg((prevMsgs) => [
          ...prevMsgs.slice(0, 4),
          { ...prevMsgs[4], binAlmostMsg: value, error: "" },
          ...prevMsgs.slice(4),
        ]);
        break;
      default:
        break;
    }
  };
  return (
    <>
      <Header />
      <View style={styles.center}>
        <View style={styles.messageAreaWrapper}>
          <View style={styles.messageBox}>
            <Text style={{ color: "#ffffff", fontWeight: 700 }}>
              Battery Dead Message
            </Text>
            <View style={styles.messageBoxCont}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Ex: Battery Dead"
                  onChangeText={(value) =>
                    handleTxtChange(value, "BATTERY_DEAD")
                  }
                />
                {displayMsgs[3].error && (
                  <Text style={styles.formError}>{displayMsgs[3].error}</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MyButton
                  onPress={() => handleSaveMessage("SAVE_BATTERY_DEAD")}
                  buttonText={"SAVE"}
                  buttonType={"SAVE_W_MT_5"}
                  style={{ marginBottom: 4 }}
                />
                <MyButton
                  onPress={() => handleDisplayMessage("SAVE_BATTERY_DEAD")}
                  buttonText={"Display Now"}
                  buttonType={"SAVE_W_MT_5"}
                />
              </View>
            </View>
          </View>
          <View style={styles.messageBox}>
            <Text style={{ color: "#ffffff", fontWeight: 700 }}>
              Battery Low Message
            </Text>
            <View style={styles.messageBoxCont}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Ex: Battery Low"
                  onChangeText={(value) => handleTxtChange(value, "BATTERY")}
                />
                {displayMsgs[0].error && (
                  <Text style={styles.formError}>{displayMsgs[0].error}</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MyButton
                  onPress={() => handleSaveMessage("SAVE_BATTERY")}
                  buttonText={"SAVE"}
                  buttonType={"SAVE_W_MT_5"}
                  style={{ marginBottom: 4 }}
                />
                <MyButton
                  onPress={() => handleDisplayMessage("SAVE_BATTERY")}
                  buttonText={"Display Now"}
                  buttonType={"SAVE_W_MT_5"}
                />
              </View>
            </View>
          </View>
          <View style={styles.messageBox}>
            <Text style={{ color: "#ffffff", fontWeight: 700 }}>
              Bin About to Full Message
            </Text>

            <View style={styles.messageBoxCont}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Ex: Bin is Almost Full"
                  onChangeText={(value) => handleTxtChange(value, "BIN_ALMOST")}
                />
                {displayMsgs[4].error && (
                  <Text style={styles.formError}>{displayMsgs[4].error}</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MyButton
                  onPress={() => handleSaveMessage("SAVE_BIN_ALMOST")}
                  buttonText={"SAVE"}
                  buttonType={"SAVE_W_MT_5"}
                  style={{ marginBottom: 4 }}
                />
                <MyButton
                  onPress={() => handleDisplayMessage("SAVE_BIN_ALMOST")}
                  buttonText={"Display Now"}
                  buttonType={"SAVE_W_MT_5"}
                />
              </View>
            </View>
          </View>
          <View style={styles.messageBox}>
            <Text style={{ color: "#ffffff", fontWeight: 700 }}>
              Bin Full Message
            </Text>

            <View style={styles.messageBoxCont}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Ex: Bin is Full"
                  onChangeText={(value) => handleTxtChange(value, "BIN")}
                />
                {displayMsgs[1].error && (
                  <Text style={styles.formError}>{displayMsgs[1].error}</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MyButton
                  onPress={() => handleSaveMessage("SAVE_BIN")}
                  buttonText={"SAVE"}
                  buttonType={"SAVE_W_MT_5"}
                  style={{ marginBottom: 4 }}
                />
                <MyButton
                  onPress={() => handleDisplayMessage("SAVE_BIN")}
                  buttonText={"Display Now"}
                  buttonType={"SAVE_W_MT_5"}
                />
              </View>
            </View>
          </View>
          <View style={styles.messageBox}>
            <Text style={{ color: "#ffffff", fontWeight: 700 }}>
              Custom Message
            </Text>
            <View style={styles.messageBoxCont}>
              <View
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextInput
                  style={styles.inputTxt}
                  placeholder="Ex: Alert Message"
                  onChangeText={(value) => handleTxtChange(value, "OTHER")}
                />
                {displayMsgs[2].error && (
                  <Text style={styles.formError}>{displayMsgs[2].error}</Text>
                )}
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                }}
              >
                <MyButton
                  onPress={() => handleSaveMessage("SAVE_OTHER")}
                  buttonText={"SAVE"}
                  buttonType={"SAVE_W_MT_5"}
                  style={{ marginBottom: 4 }}
                />
                <MyButton
                  onPress={() => handleDisplayMessage("SAVE_OTHER")}
                  buttonText={"Display Now"}
                  buttonType={"SAVE_W_MT_5"}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Footer txt={"AlertPage"} />
    </>
  );
}

const styles = StyleSheet.create({
  editprofleWrapper: {
    display: "flex",
    alignItems: "center",
    padding: 12,
  },
  messageAreaWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    // overflow: 'hidden'
  },
  messageBox: {
    width: 350,
    // minWidth: 320,

    padding: 12,
    backgroundColor: "#4878f5",
    borderRadius: 8,
    display: "flex",
    flexDirection: "column",
    marginTop: 8,
    marginBottom: 8,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "#191952",
        elevation: 2,
      },
    }),
  },
  messageBoxCont: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputTxt: {
    borderBottomWidth: 1,
    borderColor: "#ffffff",
    padding: 4,
    width: 150,
  },
  formError: {
    color: "red",
    fontSize: 14,
    width: 150,
    marginTop: 4,
  },
});
