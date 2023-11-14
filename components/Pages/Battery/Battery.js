import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";

export default function Battery() {
  const [batteryDetails, setBatteryDetails] = useState([]);
  const [error, setError] = useState(null);

  const ipAddress = "192.168.8.100";

  useEffect(() => {
    fetch(`http://${ipAddress}:3000/battery`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setBatteryDetails(dataArray);
        setError(null); // Clear any previous error on success
        console.log("Updated state:", dataArray);
      })
      .catch((error) => {
        setError(error); // Set error state in case of fetch failure
        console.error("Error:", error);
      });
  }, []);

  console.log("batteryDetails - ", batteryDetails);

  return (
    <>
      <View style={BatteryStyle.mainWrapper}>
        {error ? (
          <Text>Error fetching data. Please try again.</Text>
        ) : (
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
                <Text>Percentage</Text>
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
        )}
      </View>
      <Footer txt={"Battery"} />
    </>
  );
}
