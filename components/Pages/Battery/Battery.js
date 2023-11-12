import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";

export default function Battery() {
  const [batteryDetails, setBatteryDetails] = useState([]);

  const ipAddress = "192.168.8.101";
  useEffect(() => {
    fetch(`http://${ipAddress}:3000/battery`)
      .then((response) => response.json())
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setBatteryDetails(dataArray);
        console.log("Updated state:", dataArray);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <>
      <View style={BatteryStyle.mainWrapper}>
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

          {batteryDetails && batteryDetails.map((data, index) => (
              <View
                style={BatteryStyle.dataBody}
                key={`${data.date}-${data.time}-${index}`}
              >
                <View style={BatteryStyle.dataBodyCol}>
                  <Text>{data.date}</Text>
                </View>
                <View style={BatteryStyle.dataBodyCol}>
                  <Text>{data.time}</Text>
                </View>
                <View style={BatteryStyle.dataBodyCol}>
                  <Text>{data.percentage}%</Text>
                </View>
              </View>
            ))}
        </View>
      </View>
      <Footer txt={"Battery"} />
    </>
  );
}
