import React from "react";
import { View, Text } from "react-native";
import AboutStyle from "./AboutStyle";
import Header from "../../Header/Header";

export default function About() {
  return (
    <View style={AboutStyle.mainWrapper}>
      <Header />
      <View>
        <View style={AboutStyle.headerTxt}>
          <Text style={AboutStyle.mainTitleTxt}>About</Text>
        </View>

        <View style={AboutStyle.headerSection}></View>
      </View>
    </View>
  );
}
