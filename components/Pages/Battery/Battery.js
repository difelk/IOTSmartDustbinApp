import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import Loader from "../../share/Loader";

export default function Battery() {
  const refreshIcon = require("../../../assets/refresh.png");
  const [batteryDetails, setBatteryDetails] = useState([]);
  const [error, setError] = useState(null);
  const batteryIcon80To100 = require("../../../assets/empty-battery-status-80-to-100.png");
  const batteryIcon60To80 = require("../../../assets/empty-battery-status-60.png");
  const batteryIcon30 = require("../../../assets/empty-battery-status-30.png");
  const batteryIcon0 = require("../../../assets/empty-battery-status-0.png");
  const noticeIcon = require("../../../assets/noticeIcon.png");
  const [isLoading, setIsLoading] = useState(false);

  const ipAddress = "192.168.8.100";

  useEffect(() => {
    setIsLoading(true);
    fetch(`http://${ipAddress}:3000/battery`)
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

  const getPercentageWidth = (percentage) => {
    return (percentage / 100) * 300;
  }

  return (
    <>
      <View style={BatteryStyle.mainWrapper}>
        <Text style={BatteryStyle.pageName}>HOME > BATTERY</Text>
        {error ? (
          <Text>Error fetching data. Please try again.</Text>
        ) : (
          <View>
            <View style={BatteryStyle.currentStatus}>
              <Text style={BatteryStyle.currentStatusTitle}>
                Current Battery Status
              </Text>
              <View style={BatteryStyle.currentStatusDisplay}>
                <View  style={{display: 'flex', flexDirection: 'row', alignItems: 'baseline'}}>
                  <Text style={BatteryStyle.lardgeTxt}>80</Text>
                  <Text style={BatteryStyle.perc}>%</Text>
                </View>
                <View style={{position: 'relative'}}>
                  <View style={BatteryStyle.graphpercBorder} />
                  <View
                    style={{ width: getPercentageWidth(80), ...BatteryStyle.graphperLength }}
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

            <View style={BatteryStyle.headerTxt}>
              <Text style={BatteryStyle.mainTitleTxt}>Battery History</Text>
            </View>

            {/* <View style={BatteryStyle.headerSection}>
              <View style={BatteryStyle.headerCol}>
                <Text>Date</Text>
              </View>
              <View style={BatteryStyle.headerCol}>
                <Text>Time</Text>
              </View>
              <View style={BatteryStyle.headerCol}>
                <Text>Percentage</Text>
              </View>
            </View> */}

            <View style={BatteryStyle.columnWrap}>
              {!isLoading ? (
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
                <Loader />
              )}
            </View>

            {/* {batteryDetails &&
              batteryDetails.map((data, index) => (
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
              ))} */}
          </View>
        )}
      </View>
      <Footer txt={"Battery"} />
    </>
  );
}
