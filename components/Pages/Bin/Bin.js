import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import ip from "../../../config/ipAddress.json";
import BinStyle from "./BinStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function Bin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [binDetails, setBinDetails] = useState([]);
  useEffect(() => {
    setIsLoading(true);
    fetch(`http://${ip.ipAdress}:3000/bin`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setBinDetails(dataArray);
        setError(null);
        // console.log("Updated state:", dataArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error:", error);
        setIsLoading(false);
      });
  }, []);

  console.log('binDetails - ', binDetails);

  return (
    <>
      <Header />
      <View style={BinStyle.mainWrapper}>
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
          {binDetails.map((data) => (
              <View style={BinStyle.dataBody} key={data.date + data.time}>
                <View style={BinStyle.dataBodyCol}>
                  <Text>{data.date}</Text>
                </View>
                <View style={BinStyle.dataBodyCol}>
                  <Text>{data.time}</Text>
                </View>
                <View style={BinStyle.dataBodyCol}>
                  <Text>{data.status}</Text>
                </View>
              </View>
          ))}
        </View>
      </View>
      <Footer txt={"Bin"} />
    </>
  );
}
