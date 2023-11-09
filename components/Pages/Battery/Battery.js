import React from "react";
import { View, Text } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Header from "../../Header/Header";

export default function Battery() {
  return (
    <View style={BatteryStyle.mainWrapper}>
      <Header />
      <View>
        <View style={BatteryStyle.headerTxt}>
          <Text style={BatteryStyle.mainTitleTxt}>Battery History</Text>
        </View>

        <View style={BatteryStyle.headerSection}>
          <View style={BatteryStyle.headerCol}>
            <Text>Date</Text>
          </View>
          <View style={BatteryStyle.headerCol}>
            <Text>Time</Text>
          </View>
          <View style={BatteryStyle.headerCol}>
            <Text>percentage</Text>
          </View>
        </View>

        <View style={BatteryStyle.dataBody}>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>25%</Text>
          </View>
        </View>

        <View style={BatteryStyle.dataBody}>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>25%</Text>
          </View>
        </View>
        <View style={BatteryStyle.dataBody}>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BatteryStyle.dataBodyCol}>
            <Text>25%</Text>
          </View>
        </View>


      </View>
    </View>
  );
}
