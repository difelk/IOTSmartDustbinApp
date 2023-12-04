import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import Loader from "../../share/Loader";
import AlertBox from "../../share/AlertBox";
import ip from "../../../config/ipAddress.json";
import Header from "../../Header/Header";
import MyButton from "../../share/Button/Button";
import CustomeLineCharts from "../../share/Charts/CustomLineCharts";
import DropDownPicker from "react-native-dropdown-picker";

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
      },
    ],
  });
  const [error, setError] = useState(null);
  const batteryIcon80To100 = require("../../../assets/empty-battery-status-80-to-100.png");
  const batteryIcon60To80 = require("../../../assets/empty-battery-status-60.png");
  const batteryIcon30 = require("../../../assets/empty-battery-status-30.png");
  const batteryIcon0 = require("../../../assets/empty-battery-status-0.png");
  const noticeIcon = require("../../../assets/noticeIcon.png");
  const [isLoading, setIsLoading] = useState(false);

  const [sortByopen, setSortByOpen] = useState(false);
  const [selectedMainSortvalue, setSelectedMainSortvalue] = useState(2);
  // const [mainSortItems, setMainSortItems] = useState([
  //   { label: "January", value: 1 },
  //   { label: "February", value: 2 },
  //   { label: "March", value: 3 },
  //   { label: "April", value: 4 },
  //   { label: "May", value: 5 },
  //   { label: "June", value: 6 },
  //   { label: "July", value: 7 },
  //   { label: "August", value: 8 },
  //   { label: "September", value: 9 },
  //   { label: "October", value: 10 },
  //   { label: "November", value: 11 },
  //   { label: "December", value: 12 },
  // ]);
  const [mainSortItems, setMainSortItems] = useState([
    { label: "Years", value: 1 },
    { label: "Months", value: 2 },
    { label: "Days", value: 3 },
  ]);

  const handleAnalysisData = (values) => {};

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
        handleAnalysisData(dataArray);
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
      <ScrollView style={BatteryStyle.mainWrapper}>
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
                  <View
                    style={{
                      flex: 1,
                      justifyContent: "center",
                      alignItems: "center",
                      marginBottom: 12,
                      paddingBottom: 8,
                    }}
                  >
                    {analysBatteryData.labels.length > 0 &&
                    analysBatteryData.datasets[0].data.length > 0 ? (
                      <>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            width: "100%",
                          }}
                        >
                          <ScrollView
                            horizontal={true}
                            style={{ zIndex: 20, width: "100%" }}
                          >
                            <View style={BatteryStyle.filterWrapper}>
                              <Text>Sort By: </Text>
                              <View
                                style={{
                                  zIndex: 50,
                                  height: sortByopen
                                    ? mainSortItems.length > 3
                                      ? mainSortItems.length * 25
                                      : mainSortItems.length * 55
                                    : "auto",
                                }}
                              >
                                <DropDownPicker
                                  open={sortByopen}
                                  value={selectedMainSortvalue}
                                  items={mainSortItems}
                                  setOpen={setSortByOpen}
                                  setValue={setSelectedMainSortvalue}
                                  setItems={setMainSortItems}
                                  onSelectItem={(value) =>
                                    console.log("value - ", value)
                                  }
                                  style={{ width: 200, zIndex: 10, height: 50 }}
                                  placeholder={selectedMainSortvalue ?? "Month"}
                                />
                              </View>
                            </View>

                            
                          </ScrollView>
                          <View
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              marginTop: 4,
                              marginBottom: 4,
                            }}
                          >
                            <View
                              style={{
                                padding: 8,
                                backgroundColor: "#ffffff",
                                borderRadius: 10,
                                margin: 8,
                              }}
                            >
                              <Text>{selectedMainSortvalue ? mainSortItems.find(i => i.value === selectedMainSortvalue).label : ''}</Text>
                            </View>
                          </View>
                          <CustomeLineCharts
                            data={analysBatteryData}
                            width={350}
                            height={220}
                          />
                        </View>
                      </>
                    ) : (
                      <Text>No Data To Show</Text>
                    )}
                  </View>
                )
              ) : (
                <Loader />
              )}
            </View>
          </View>
        )}
      </ScrollView>
      <Footer txt={"Battery"} />
    </>
  );
}
