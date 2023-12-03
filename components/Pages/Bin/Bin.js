import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import ip from "../../../config/ipAddress.json";
import BinStyle from "./BinStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import MyButton from "../../share/Button/Button";
import Loader from "../../share/Loader";

export default function Bin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [binDetails, setBinDetails] = useState([]);

  const refreshIcon = require("../../../assets/refresh.png");

  const binIcon80To100 = require("../../../assets/empty-battery-status-80-to-100.png");
  const binIcon60To80 = require("../../../assets/empty-battery-status-60.png");
  const binIcon30 = require("../../../assets/empty-battery-status-30.png");
  const binIcon0 = require("../../../assets/empty-battery-status-0.png");
  const noticeIcon = require("../../../assets/noticeIcon.png");

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

  // console.log("binDetails - ", binDetails);

  const getStyleAccordngData = (data) => {
    if (data.percentage >= 80) {
      return {
        classType: BinStyle.fullBin,
        statusClass: BinStyle.fullBinStatus,
        icon: binIcon80To100,
      };
    } else if (data.percentage >= 60 && data.percentage < 80) {
      return {
        classType: BinStyle.normalBin,
        statusClass: BinStyle.normalBinStatus,
        icon: binIcon60To80,
      };
    } else if (data.percentage >= 30 && data.percentage < 60) {
      return {
        classType: BinStyle.belowNormalBin,
        statusClass: BinStyle.belowNormalBinStatus,
        icon: binIcon30,
      };
    } else if (data.percentage >= 0 && data.percentage < 30) {
      return {
        classType: BinStyle.dangBin,
        statusClass: BinStyle.dangBinStatus,
        icon: binIcon0,
      };
    } else {
      return {
        classType: "",
        statusClass: "",
        icon: "",
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
      <ScrollView style={BinStyle.mainWrapper}>
        {error ? (
          <AlertBox type={error ? "ERROR" : ""} description={error} />
        ) : (
          ""
        )}
        {error ? (
          <Text>Error fetching data. Please try again.</Text>
        ) : (
          <View>
            <View style={BinStyle.currentStatus}>
              <Text style={BinStyle.currentStatusTitle}>
                Current Bin Status
              </Text>
              <View style={BinStyle.currentStatusDisplay}>
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "baseline",
                  }}
                >
                  <Text style={BinStyle.lardgeTxt}>80</Text>
                  <Text style={BinStyle.perc}>%</Text>
                </View>
                <View style={{ position: "relative" }}>
                  <View style={BinStyle.graphpercBorder} />
                  <View
                    style={{
                      width: getPercentageWidth(80),
                      ...BinStyle.graphperLength,
                    }}
                  />
                </View>
              </View>
              <View style={BinStyle.refreshBtn}>
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
              <View style={BinStyle.tabBtnWraper}>
                <MyButton
                  onPress={() => handleTabChange("HISTORY")}
                  buttonText={"Bin Status"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "HISTORY"}
                />
                <MyButton
                  onPress={() => handleTabChange("LID")}
                  buttonText={"Lid Status"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "LID"}
                />
                <MyButton
                  onPress={() => handleTabChange("ANALYSIS")}
                  buttonText={"Bin Analysis"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "ANALYSIS"}
                />
              </View>
            </View>

            <View style={BinStyle.columnWrap}>
              {!isLoading ? (
                activeTab === "HISTORY" ? (
                  binDetails.map((data, index) => (
                    <View
                      style={BinStyle.columnItem}
                      key={`${data.date}-${data.time}-${index}`}
                    >
                      <View style={BinStyle.columnItemDetails}>
                        {/* <View style={BinStyle.columnItemGroupDetails}>
                          <Text style={BinStyle.columnItemDetailHeader}>
                            Status:{" "}
                          </Text>
                          <Text style={getStyleAccordngData(data).statusClass}>
                            {data.status}
                          </Text>
                          {data.status < 30 ? (
                            <Image
                              source={noticeIcon}
                              style={[
                                BinStyle.noticeIcon,
                                { width: 23, height: 23 },
                              ]}
                            />
                          ) : (
                            ""
                          )}
                        </View> */}
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text style={BinStyle.columnItemDetailHeader}>
                            Fill Level:{" "}
                          </Text>
                          <Text style={getStyleAccordngData(data).statusClass}>
                            {data.percentage}%
                          </Text>
                        </View>
                        <Text
                          style={BinStyle.columnItemDetailSubHeader}
                        >{`${data.date} ${data.time}`}</Text>
                      </View>
                      <View style={BinStyle.statusIconWrapper}>
                        <Image
                          source={getStyleAccordngData(data).icon}
                          style={[
                            BinStyle.statusIcon,
                            { width: 35, height: 35 },
                          ]}
                        />
                        <View style={getStyleAccordngData(data).classType} />
                      </View>
                    </View>
                  ))
                ) : activeTab === "LID" ? (
                  binDetails.map((data, index) => (
                    <View
                      style={BinStyle.columnItem}
                      key={`${data.date}-${data.time}-${index}`}
                    >
                      <View style={BinStyle.columnItemDetails}>
                        <View style={BinStyle.columnItemGroupDetails}>
                          <Text style={BinStyle.columnItemDetailHeader}>
                            Status:{" "}
                          </Text>
                          <Text style={getStyleAccordngData(data).statusClass}>
                            {data.status}
                          </Text>
                          {data.status < 30 ? (
                            <Image
                              source={noticeIcon}
                              style={[
                                BinStyle.noticeIcon,
                                { width: 23, height: 23 },
                              ]}
                            />
                          ) : (
                            ""
                          )}
                        </View>

                        <Text
                          style={BinStyle.columnItemDetailSubHeader}
                        >{`${data.date} ${data.time}`}</Text>
                      </View>
                      <View style={BinStyle.statusIconWrapper}>
                        <Image
                          source={getStyleAccordngData(data).icon}
                          style={[
                            BinStyle.statusIcon,
                            { width: 35, height: 35 },
                          ]}
                        />
                        <View style={getStyleAccordngData(data).classType} />
                      </View>
                    </View>
                  ))
                ) : (
                  <View>
                    <Text>Simple jack</Text>
                  </View>
                )
              ) : (
                <Loader />
              )}
            </View>
          </View>
        )}
      </ScrollView>
      <Footer txt={"Bin"} />
    </>
  );
}
