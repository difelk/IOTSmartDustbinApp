import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Footer from "../../Footer/Footer";

export default function EditProfile() {
  
  return (
    <>
    <View style={styles.editprofleWrapper}>
      <Text>Edit Profile</Text>
    </View>
     <Footer />
     </>
  );
}
const styles = StyleSheet.create({
  editprofleWrapper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    padding: 18,
    width: "100%",
    marginTop: 20,
  },
});
