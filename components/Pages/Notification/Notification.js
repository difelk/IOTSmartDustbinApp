import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import Footer from "../../Footer/Footer";

export default function Notification() {
  return (
    <>
      <View style={styles.center}>
        <Text>Notification</Text>
      </View>

      <Footer txt={"Notification"} />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    minHeight: "100%",
    alignItems: 'center',
    paddingBottom: 60,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  
});
