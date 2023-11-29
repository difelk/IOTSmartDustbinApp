import React from "react";
import { View, Text, StyleSheet, Image, TextInput } from "react-native";
import Footer from "../../Footer/Footer";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function EditProfile() {
  const profilePic = require("../../../assets/user.png");

  const handleButtonPress = () => {
    console.log("pressed!");
  };

  return (
    <>
      <View style={styles.editprofleWrapper}>
        <View style={styles.parentBox}>
          <View style={styles.buttonsBox}>
            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.cancelBtnText}>Cancel</Text>
            </TouchableOpacity>

            <Text style={styles.pageTxt}>Edit Profile</Text>

            <TouchableOpacity style={styles.button} onPress={handleButtonPress}>
              <Text style={styles.saveBtnText}>Save</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.imageBox}>
            <Image source={profilePic} style={styles.icon} />
          </View>
          <View style={styles.contentBox}>
            <Text style={styles.headerTxt}>Email</Text>
            <TextInput
              style={styles.inputTxt}
              placeholder="Ex: ilmeedesilva@gmail.com"
            />
            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>Password</Text>
            <TextInput
              style={styles.passwordtxt}
              placeholder="Enter Password"
              secureTextEntry={true}
            />
            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>Contact Number</Text>
            <TextInput
              style={styles.number}
              placeholder="Ex: 0777123123"
              keyboardType="numeric"
            />
            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>City</Text>
            <TextInput style={styles.inputTxt} placeholder="Ex: Colombo" />

            <Text style={styles.errMsg}></Text>

            <Text style={styles.headerTxt}>Country</Text>
            <TextInput style={styles.inputTxt} placeholder="Ex: Sri Lanka" />

            <Text style={styles.errMsg}></Text>
          </View>
        </View>
      </View>
      <Footer />
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
