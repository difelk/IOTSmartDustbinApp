import React from "react";
import {
  View,
  Text,
  StyleSheet,
} from "react-native";
import Footer from "../../Footer/Footer";
import Header from "../../Header/Header";

export default function AlertPage() {

  return (
    <>
    <Header/>
      <View style={styles.center}>
        <Text>ALERT PAGE</Text>
      </View>
      <Footer txt={"AlertPage"}/>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    alignItems: 'center',
    padding: 40,
  },
});
