import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import Loader from "../../share/Loader";
import AlertBox from "../../share/AlertBox";
import ip from "../../../config/ipAddress.json";
import Header from "../../Header/Header";
import MyButton from "../../share/Button/Button";
import CustomeLineCharts from "../../share/Charts/CustomLineCharts";

export default function Battery() {
  const refreshIcon = require("../../../assets/refresh.png");
  const [batteryDetails, setBatteryDetails] = useState([]);
  const [analysBatteryData, setAnalysBatteryData] = useState({
    labels: ["January", "February", "March", "April", "May", "June"],
    datasets: [
      {
        data: [20, 45, 28, 80, 99, 43],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`, // line color
        strokeWidth: 4, // line width
      }
    ],
  });
  const [error, setError] = useState(null);
  const batteryIcon80To100 = require("../../../assets/empty-battery-status-80-to-100.png");
  const batteryIcon60To80 = require("../../../assets/empty-battery-status-60.png");
  const batteryIcon30 = require("../../../assets/empty-battery-status-30.png");
  const batteryIcon0 = require("../../../assets/empty-battery-status-0.png");
  const noticeIcon = require("../../../assets/noticeIcon.png");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://${ip.ipAdress}:3000/battery`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setBatteryDetails(dataArray);
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

  const getStyleAccordngData = (data) => {
    if (data.percentage >= 80) {
      return {
        classType: BatteryStyle.fullBattery,
        statusClass: BatteryStyle.fullBatteryStatus,
        icon: batteryIcon80To100,
      };
    } else if (data.percentage >= 60 && data.percentage < 80) {
      return {
        classType: BatteryStyle.normalBattery,
        statusClass: BatteryStyle.normalBatteryStatus,
        icon: batteryIcon60To80,
      };
    } else if (data.percentage >= 30 && data.percentage < 60) {
      return {
        classType: BatteryStyle.belowNormalBattery,
        statusClass: BatteryStyle.belowNormalBatteryStatus,
        icon: batteryIcon30,
      };
    } else if (data.percentage >= 0 && data.percentage < 30) {
      return {
        classType: BatteryStyle.dangBattery,
        statusClass: BatteryStyle.dangBatteryStatus,
        icon: batteryIcon0,
      };
    }
  };

  const handleRefresh = () => {};

  const [activeTab, setActiveTab] = useState("HISTORY");
  const handleTabChange = (values) => {
    setActiveTab(values);
  };

  const getPercentageWidth = (percentage) => {
    return (percentage / 100) * 300;
  };

  return (
    <>
      <Header />
      <View style={BatteryStyle.mainWrapper}>
        {error ? (
          <AlertBox type={error ? "ERROR" : ""} description={error} />
        ) : (
          ""
        )}
        {error ? (
          <Text>Error fetching data. Please try again.</Text>
        ) : (
          <View>
            <View style={BatteryStyle.currentStatus}>
              <Text style={BatteryStyle.currentStatusTitle}>
                Current Battery Status
              </Text>
              <View style={BatteryStyle.currentStatusDisplay}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Text style={BatteryStyle.lardgeTxt}>80</Text>
                  <Text style={BatteryStyle.perc}>%</Text>
                </View>
                <View style={{ position: "relative" }}>
                  <View style={BatteryStyle.graphpercBorder} />
                  <View
                    style={{
                      width: getPercentageWidth(80),
                      ...BatteryStyle.graphperLength,
                    }}
                  />
                </View>
              </View>
              <View style={BatteryStyle.refreshBtn}>
                <IconButton
                  key={1}
                  onPress={() => handleRefresh()}
                  buttonText={""}
                  buttonIcon={refreshIcon}
                  bgColor={"#FFFFFF"}
                  txtColor={"#FFFFFF"}
                  width={25}
                  height={25}
                  btnSize={"SM"}
                  btnType={""}
                />
              </View>
            </View>

            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "100%",
              }}
            >
              <View style={BatteryStyle.tabBtnWraper}>
                <MyButton
                  onPress={() => handleTabChange("HISTORY")}
                  buttonText={"Battery History"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "HISTORY"}
                />
                <MyButton
                  onPress={() => handleTabChange("ANALYSIS")}
                  buttonText={"Battery Analysis"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "ANALYSIS"}
                />
              </View>
            </View>
            <View style={BatteryStyle.columnWrap}>
              {!isLoading ? (
                activeTab === "HISTORY" ? (
                  batteryDetails.map((data, index) => (
                    <View
                      style={BatteryStyle.columnItem}
                      key={`${data.date}-${data.time}-${index}`}
                    >
                      <View style={BatteryStyle.columnItemDetails}>
                        <View style={BatteryStyle.columnItemGroupDetails}>
                          <Text style={BatteryStyle.columnItemDetailHeader}>
                            Status:{" "}
                          </Text>
                          <Text style={getStyleAccordngData(data).statusClass}>
                            {data.percentage}%
                          </Text>
                          {data.percentage < 30 ? (
                            <Image
                              source={noticeIcon}
                              style={[
                                BatteryStyle.noticeIcon,
                                { width: 23, height: 23 },
                              ]}
                            />
                          ) : (
                            ""
                          )}
                        </View>
                        <Text
                          style={BatteryStyle.columnItemDetailSubHeader}
                        >{`${data.date} ${data.time}`}</Text>
                      </View>
                      <View style={BatteryStyle.statusIconWrapper}>
                        <Image
                          source={getStyleAccordngData(data).icon}
                          style={[
                            BatteryStyle.statusIcon,
                            { width: 35, height: 35 },
                          ]}
                        />
                        <View style={getStyleAccordngData(data).classType} />
                      </View>
                    </View>
                  ))
                ) : (
                   <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                   {analysBatteryData.labels.length > 0 && analysBatteryData.datasets[0].data.length > 0 ? 
                    <CustomeLineCharts data={analysBatteryData} width={350} height={220}/>
                  : <Text>No Data To Show</Text>
                  }
                  </View>
                )
              ) : (
                <Loader />
              )}
            </View>
          </View>
        )}
      </View>
      <Footer txt={"Battery"} />
    </>
  );
}
