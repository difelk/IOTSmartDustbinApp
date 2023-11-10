import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AboutStyle from "./AboutStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function About() {
  return (
    <>
      <View style={styles.center}>
        <Header />
        <View>
          <View style={styles.headerTxt}>
            <Text>About</Text>
          </View>

          <View style={AboutStyle.headerSection}></View>
        </View>
      </View>
      <Footer />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    alignItems: "center",
    minHeight: "100%",
  },
  headerTxt: {
    paddingTop: 30,
  },
});
