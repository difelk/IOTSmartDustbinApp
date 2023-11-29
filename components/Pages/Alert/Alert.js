import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function AlertPage() {
  const [formValues, setFormValues] = useState({
    BinFull: "",
    BatterLow: "",
    CustomMsg: "",
  });

  const handleButtonPress = () => {
    console.log("pressed!");
  };

  console.log("Form Values: ", formValues);
  return (
    <>
      <Header />
      <View style={styles.editprofleWrapper}>
        <View style={styles.parentBox}>
          <View style={styles.buttonsBox}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

            <Text style={styles.pageTxt}>Alert Page</Text>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.contentBox}>
            <Text style={styles.headerTxt}>Bin Full</Text>
            <TextInput
              onChangeText={(value) => setFormValues({ ...formValues, BinFull: value })}
              style={styles.inputTxt}
              placeholder="Ex: Bin is full"
            />
            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>Battery Low</Text>
            <TextInput
              onChangeText={(value) => setFormValues({ ...formValues, BatterLow: value })}
              style={styles.number}
              placeholder="Ex: Battery is low"
            />
            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>Custom Message</Text>
            <TextInput
              onChangeText={(value) => setFormValues({ ...formValues, CustomMsg: value })}
              style={styles.inputTxt}
              placeholder="Ex: Custome Message"
            />

            <Text style={styles.errMsg}></Text>
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
    flexDirection: "column",
    padding: 18,
    width: "100%",
    marginTop: 20,
  },
  pageTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  parentBox: {
    display: "flex",
    flexDirection: "column",
    padding: 16,
  },
  buttonsBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    padding: 8,
    borderRadius: 4,
  },
  cancelBtnText: {
    color: "#130E82",
    fontSize: 16,
  },
  saveBtnText: {
    color: "#6E6666",
    fontSize: 16,
  },
  imageBox: {
    margin: 12,
    alignItems: "center",
  },
  icon: {
    width: 70,
    height: 70,
  },
  contentBox: {
    margin: 12,
  },
  headerTxt: {
    color: "#000000",
    fontWeight: "600",
    marginBottom: 12,
  },
  inputTxt: {
    color: "#3266B4",
    fontWeight: "400",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  passwordtxt: {
    color: "#3266B4",
    fontWeight: "400",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  number: {
    color: "#3266B4",
    fontWeight: "400",
    borderBottomWidth: 1,
    borderBottomColor: "gray",
  },
  errMsg: {
    fontSize: 12,
    color: "red",
    marginBottom: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },
});
