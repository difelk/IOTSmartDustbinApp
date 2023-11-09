import React from "react";
import { View, Text} from "react-native";
import BinStyle from "./BinStyle";
import Header from "../../Header/Header";



export default function Bin() {


  return (
    <View style={BinStyle.mainWrapper}>
      <Header />
      <View>
        <View style={BinStyle.headerTxt}>
          <Text style={BinStyle.mainTitleTxt}>Bin History</Text>
        </View>

        <View style={BinStyle.headerSection}>
          <View style={BinStyle.headerCol}>
            <Text>Date</Text>
          </View>
          <View style={BinStyle.headerCol}>
            <Text>Time</Text>
          </View>
          <View style={BinStyle.headerCol}>
            <Text>Bin Status</Text>
          </View>
        </View>

        <View style={BinStyle.dataBody}>
          <View style={BinStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>Open</Text>
          </View>
        </View>

        <View style={BinStyle.dataBody}>
          <View style={BinStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>closed</Text>
          </View>
        </View>
        <View style={BinStyle.dataBody}>
          <View style={BinStyle.dataBodyCol}>
            <Text>2023-11-09</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>18:13</Text>
          </View>
          <View style={BinStyle.dataBodyCol}>
            <Text>Emptied</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
