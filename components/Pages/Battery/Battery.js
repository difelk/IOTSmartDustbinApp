import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import BatteryStyle from "./BatteryStyle";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import Loader from "../../share/Loader";
import AlertBox from "../../share/AlertBox";
import ip from "../../../config/ipAddress.json";
import Header from "../../Header/Header";
import MyButton from "../../share/Button/Button";
import CustomeLineCharts from "../../share/Charts/CustomLineCharts";
import CalendarPicker from "react-native-calendar-picker";
import RadioButton from "../../share/Button/RadioButton";

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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const [batteryStats, setBatteryStats] = useState({
    maxPercentage: null,
    minPercentage: null,
    averageDrop: null,
  });

  const [batteryDropStats, setBatteryDropStats] = useState({
    batteryDrop: null,
    dropDuration: null,
    highestPercentage: null,
    lowestPercentage: null,
  });
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [
      {
        data: [],
        color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
        strokeWidth: 2,
      },
    ],
  });

  function formatDate(inputDate, type) {
    const originalDate = new Date(inputDate);

    const year = originalDate.getFullYear().toString().slice(2);
    const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
    const day = originalDate.getDate().toString().padStart(2, "0");
    const hours = originalDate.getHours().toString().padStart(2, "0");
    const minutes = originalDate.getMinutes().toString().padStart(2, "0");
    switch (type) {
      case "ALL":
        return `${year}-${month}-${day} ${hours}:${minutes}`;
      case "MONTH":
        return `${month}`;
      case "YEAR":
        return `${year}`;
      case "WEEK":
        return `${day}`;
      case "DAY":
        return `${hours}:${minutes}`;
    }
  }

  const options = [
    { label: "Today", value: "today" },
    { label: "Yesterday", value: "yesterday" },
    { label: "Last Week", value: "lastWeek" },
    // { label: "Last Month", value: "lastMonth" },
  ];

  const [selectedAnalysistOption, setSelectedAnalysistOption] = useState(
    options[0]
  );

  const handleSelectOption = (option) => {
    setSelectedAnalysistOption(option);
  };


  const handleAnalysisData = (data, startDate, endDate) => {
    let formattedData = data.sort((a, b) => {
      return new Date(a.current_Date_Time) - new Date(b.current_Date_Time);
    });
  
    formattedData = formattedData.filter((entry) => {
      const entryDate = new Date(entry.current_Date_Time);
      return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
    });
  
    const newChartData = {
      labels: formattedData.map((entry) => formatDate(entry.current_Date_Time, "DAY")),
      datasets: [
        {
          data: formattedData.map((entry) => parseInt(entry.Battery_Percentage.replace("%", "")) || 0),
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };
  
    setChartData(newChartData);
  };
  

  // const handleAnalysisData = (data, startDate, endDate) => {
  //   let formattedData = data.sort((a, b) => {
  //     return new Date(a.current_Date_Time) - new Date(b.current_Date_Time);
  //   });
  
  //   formattedData = formattedData.filter((entry) => {
  //     const entryDate = new Date(entry.current_Date_Time);
  //     return entryDate >= new Date(startDate) && entryDate <= new Date(endDate);
  //   });
  
  //   const weeksData = {};
  
  //   formattedData.forEach((entry) => {
  //     const weekNumber = getWeekNumber(entry.current_Date_Time);
  //     if (!weeksData[weekNumber]) {
  //       weeksData[weekNumber] = [];
  //     }
  
  //     weeksData[weekNumber].push(parseInt(entry.Battery_Percentage.replace("%", "")) || 0);
  //   });
  
  //   const weekLabels = Object.keys(weeksData).map((weekNumber) => {
  //     return `Week ${weekNumber}`;
  //   });
  
  //   const newChartData = {
  //     labels: weekLabels,
  //     datasets: [
  //       {
  //         data: weekLabels.map((weekNumber) => {
  //           const weekData = weeksData[weekNumber.replace("Week ", "")];
  //           if (weekData && weekData.length > 0) {
  //             return weekData[weekData.length - 1]; // Show the last recorded percentage for each week
  //           } else {
  //             return 0; // If no data for the week, show 0
  //           }
  //         }),
  //         color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
  //         strokeWidth: 2,
  //       },
  //     ],
  //   };
  //   setChartData(newChartData);
  // };
  
  // const getWeekNumber = (date) => {
  //   const d = new Date(date);
  //   d.setHours(0, 0, 0, 0);
  //   d.setDate(d.getDate() + 4 - (d.getDay() || 7));
  //   const yearStart = new Date(d.getFullYear(), 0, 1);
  //   const weekNumber = Math.ceil(((d - yearStart) / 86400000 + 1) / 7);
  //   return weekNumber;
  // };
  

  const getBatteryData = () => {
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
        const sortedArray = dataArray.map((entry) => ({
          ...entry,
          current_Date_Time: new Date(entry.current_Date_Time),
        }));
        sortedArray.sort((a, b) => b.current_Date_Time - a.current_Date_Time);

        setBatteryDetails(sortedArray);
        getLatestBatteryDrop(sortedArray);
        setError(null);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error:", error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    getBatteryData();
  }, []);

  useEffect(() => {
    handleAnalysisData(batteryDetails, startDate, endDate);
  }, [batteryDetails, selectedAnalysistOption, startDate, endDate]);

  const handleStartDateChange = (date) => {
    const formattedStartDate = new Date(date).toISOString().split("T")[0];
    setStartDate(formattedStartDate);
    updateBatteryStats(formattedStartDate, endDate);
  };

  const handleEndDateChange = (date) => {
    const formattedEndDate = new Date(date).toISOString().split("T")[0];
    setEndDate(formattedEndDate);
    updateBatteryStats(startDate, formattedEndDate);
  };

  const openStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
    setShowEndDatePicker(false);
  };

  const openEndDatePicker = () => {
    setShowStartDatePicker(false);
    setShowEndDatePicker(!showEndDatePicker);
  };

  const updateBatteryStats = (start, end) => {
    const filteredData = batteryDetails.filter((entry) => {
      const entryDate = new Date(entry.current_Date_Time);
      const startDate = new Date(start);
      const endDate = new Date(end);

      const isSameDay =
        entryDate >= startDate &&
        entryDate <= new Date(endDate.getTime() + 86400000);

      return isSameDay;
    });
    if (filteredData.length > 0) {
      const maxPercentage = Math.max(
        ...filteredData.map((entry) => parseInt(entry.Battery_Percentage))
      );
      const minPercentage = Math.min(
        ...filteredData.map((entry) => parseInt(entry.Battery_Percentage))
      );
      const totalDrop =
        parseInt(filteredData[0].Battery_Percentage) -
        parseInt(filteredData[filteredData.length - 1].Battery_Percentage);
      const averageDrop = totalDrop / filteredData.length;

      setBatteryStats({
        maxPercentage,
        minPercentage,
        averageDrop,
      });
    } else {
      setBatteryStats({
        maxPercentage: null,
        minPercentage: null,
        averageDrop: null,
      });
    }
  };

  const getLatestBatteryDrop = (batteryData) => {
    const sortedEntries = batteryData.sort(
      (a, b) => new Date(b.current_Date_Time) - new Date(a.current_Date_Time)
    );

    let latestLowPercentageEntry = null;
    let latestHighPercentageEntry = null;
    let lowestPercentage = Infinity;

    for (const entry of sortedEntries) {
      const currentPercentage = parseInt(entry.Battery_Percentage);

      if (currentPercentage < lowestPercentage) {
        lowestPercentage = currentPercentage;
        latestLowPercentageEntry = entry;
      }

      if (currentPercentage > lowestPercentage && !latestHighPercentageEntry) {
        latestHighPercentageEntry = entry;
      }

      if (latestLowPercentageEntry && latestHighPercentageEntry) {
        break; // Stop once both lowest and highest are found
      }
    }

    if (latestLowPercentageEntry && latestHighPercentageEntry) {
      // Calculate the time difference and drop
      const highPercentage = parseInt(
        latestHighPercentageEntry.Battery_Percentage
      );
      const lowPercentage = lowestPercentage;
      const highPercentageTime = new Date(
        latestHighPercentageEntry.current_Date_Time
      );
      const lowPercentageTime = new Date(
        latestLowPercentageEntry.current_Date_Time
      );
      const dropDurationInMilliseconds = lowPercentageTime - highPercentageTime;
      const dropDurationInSeconds = Math.floor(
        dropDurationInMilliseconds / 1000
      );

      const hours = Math.floor(dropDurationInSeconds / 3600);
      const minutes = Math.floor((dropDurationInSeconds % 3600) / 60);
      const seconds = dropDurationInSeconds % 60;

      // return {
      //   highestPercentage: highPercentage,
      //   lowestPercentage,
      //   batteryDrop: highPercentage - lowPercentage,
      //   dropDuration: `${hours}hrs ${minutes}min ${seconds}sec`,

      // };
      setBatteryDropStats({
        highestPercentage: highPercentage,
        lowestPercentage,
        batteryDrop: highPercentage - lowPercentage,
        dropDuration: `${hours}hrs ${minutes}min ${seconds}sec`,
      });
    } else {
      setBatteryDropStats(null);
      // return null;
    }
  };


  const getStyleAccordngData = (data) => {
    const fixedData = parseInt(data.Battery_Percentage.replace("%", ""));
    if (fixedData >= 80) {
      return {
        classType: BatteryStyle.fullBattery,
        statusClass: BatteryStyle.fullBatteryStatus,
        icon: batteryIcon80To100,
      };
    } else if (fixedData >= 60 && fixedData < 80) {
      return {
        classType: BatteryStyle.normalBattery,
        statusClass: BatteryStyle.normalBatteryStatus,
        icon: batteryIcon60To80,
      };
    } else if (fixedData >= 30 && fixedData < 60) {
      return {
        classType: BatteryStyle.belowNormalBattery,
        statusClass: BatteryStyle.belowNormalBatteryStatus,
        icon: batteryIcon30,
      };
    } else if (fixedData >= 0 && fixedData < 30) {
      return {
        classType: BatteryStyle.dangBattery,
        statusClass: BatteryStyle.dangBatteryStatus,
        icon: batteryIcon0,
      };
    }
  };

  const handleRefresh = () => {
    getBatteryData();
  };

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
                  <Text style={BatteryStyle.lardgeTxt}>
                    {batteryDetails.length
                      ? batteryDetails[
                          batteryDetails.length - 1
                        ].Battery_Percentage.replace("%", "")
                      : isLoading
                      ? "Loading..."
                      : ""}
                  </Text>
                  <Text style={BatteryStyle.perc}> {isLoading ? "" : "%"}</Text>
                </View>
                <View style={{ position: "relative" }}>
                  <View style={BatteryStyle.graphpercBorder} />
                  {batteryDetails.length ? (
                    <View
                      style={{
                        width:batteryDetails.length ? getPercentageWidth(
                          parseInt(
                            batteryDetails[
                              batteryDetails.length - 1
                            ].Battery_Percentage.replace("%", "")
                          )
                        ) : '',
                        ...BatteryStyle.graphperLength,
                      }}
                    />
                  ) : (
                    ""
                  )}
                </View>
              </View>
              <View style={BatteryStyle.refreshBtn}>
                <View style={{ display: "flex", flexDirection: "row" }}>
                  <Text style={{ color: "#ffffff", paddingLeft: 20 }}>
                    Location: ground floor kitchen
                  </Text>
                </View>
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
                  batteryDetails
                    .slice()
                    .reverse()
                    .map((data, index) => (
                      <View
                        style={BatteryStyle.columnItem}
                        key={`${data.current_Date_Time}`}
                      >
                        <View style={BatteryStyle.columnItemDetails}>
                          <View style={BatteryStyle.columnItemGroupDetails}>
                            <Text style={BatteryStyle.columnItemDetailHeader}>
                              Status:{" "}
                            </Text>
                            <Text
                              style={getStyleAccordngData(data).statusClass}
                            >
                              {data.Battery_Percentage}
                            </Text>
                            {data.Battery_Percentage < 30 ? (
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
                          >{`${data.current_Date_Time}`}</Text>
                        </View>
                        <View style={BatteryStyle.statusIconWrapper}>
                          <Image
                            source={getStyleAccordngData(data).icon}
                            style={[
                              BatteryStyle.statusIcon,
                              { width: 35, height: 35 },
                            ]}
                          />
                          {
                            <View
                              style={getStyleAccordngData(data).classType}
                            />
                          }
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
                    <View
                      style={{
                        width: "100%",
                        borderRadius: 8,
                        padding: 8,
                        backgroundColor: "#364650",
                        marginBottom: 16,
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <Text
                        style={{
                          color: "#ffffff",
                          fontSize: 20,
                          fontWeight: 600,
                          marginBottom: 8,
                        }}
                      >
                        Recent Power Drop
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 6,
                        }}
                      >
                        <Text style={{ color: "#ffffff" }}>
                          Drop by: {batteryDropStats.batteryDrop}%
                        </Text>
                        <Text style={{ color: "#ffffff" }}>
                          Duration of Drop: {batteryDropStats.dropDuration}
                        </Text>
                        <Text style={{ color: "#ffffff" }}>
                          Duration from: {batteryDropStats.highestPercentage}%
                          to {batteryDropStats.lowestPercentage}%
                        </Text>
                      </View>
                    </View>
                    <View style={BatteryStyle.containerDate}>
                      <View>
                        <TouchableOpacity
                          onPress={openStartDatePicker}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ width: 70 }}>Start Date: </Text>
                          <Text
                            style={{
                              padding: 8,
                              borderRadius: 8,
                              backgroundColor: "#30a9f0",
                              color: "#ffffff",
                              fontWeight: 600,
                            }}
                          >
                            {startDate
                              ? startDate.toString()
                              : "Select Start Date"}
                          </Text>
                        </TouchableOpacity>

                        {showStartDatePicker && (
                          <CalendarPicker
                            onDateChange={handleStartDateChange}
                          />
                        )}

                        <TouchableOpacity
                          onPress={openEndDatePicker}
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            marginTop: 4,
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ width: 70 }}>End Date:</Text>
                          <Text
                            style={{
                              padding: 8,
                              borderRadius: 8,
                              backgroundColor: "#ee9a21",
                              color: "#ffffff",
                              fontWeight: 600,
                            }}
                          >
                            {endDate ? endDate.toString() : "Select End Date"}
                          </Text>
                        </TouchableOpacity>

                        {showEndDatePicker && (
                          <CalendarPicker onDateChange={handleEndDateChange} />
                        )}
                      </View>
                      {!showStartDatePicker && !showEndDatePicker ? (
                        <View
                          style={{
                            backgroundColor: "#09bfc5",
                            padding: 8,
                            marginLeft: 8,
                            borderRadius: 8,
                            color: "#ffffff",
                          }}
                        >
                          <Text style={{ color: "#ffffff" }}>
                            Max Battery Level: {batteryStats.maxPercentage}
                          </Text>
                          <Text style={{ color: "#ffffff" }}>
                            Min Battery Level: {batteryStats.minPercentage}
                          </Text>
                          <Text style={{ color: "#ffffff" }}>
                            Avergage Battery Drop:{" "}
                            {batteryStats?.averageDrop?.toFixed(2)}
                          </Text>
                        </View>
                      ) : (
                        ""
                      )}
                    </View>

                    {analysBatteryData.labels.length > 0 &&
                    analysBatteryData.datasets[0].data.length > 0 ? (
                      <>
                        <View
                          style={{
                            marginBottom: 12,
                            width: "100%",
                            position: "relative",
                          }}
                        >
                          <Text style={{ color: "gray" }}>Graph View</Text>
                          <Text
                            style={{
                              position: "absolute",
                              width: 290,
                              height: 1,
                              backgroundColor: "#cbcdcf",
                              left: 75,
                              top: 12,
                            }}
                          >
                            Graph View
                          </Text>
                        </View>
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
                            {/* <View style={BatteryStyle.filterWrapper}>
                              <View>
                                <RadioButton
                                  options={options}
                                  selectedOption={selectedAnalysistOption}
                                  onSelect={handleSelectOption}
                                />
                              </View>
                            </View> */}
                          </ScrollView>
                          {chartData.datasets[0].data.length > 0 ? (
                            <CustomeLineCharts
                              data={chartData}
                              width={350}
                              height={220}
                              yLabel=""
                              borderRadius={16}
                              backgroundGFrom="#ffffff"
                              backgroundGTo="#ffffff"
                            />
                          ) : (
                            ""
                          )}
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
