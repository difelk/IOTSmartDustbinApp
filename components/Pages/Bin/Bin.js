import React, { useEffect, useState } from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import ip from "../../../config/ipAddress.json";
import BinStyle from "./BinStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import MyButton from "../../share/Button/Button";
import Loader from "../../share/Loader";
import CustomeLineCharts from "../../share/Charts/CustomLineCharts";
import CalendarPicker from "react-native-calendar-picker";
import AlertBox from "../../share/AlertBox";
import EmptyData from "../../share/EmptyData";

export default function Bin() {
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [binDetails, setBinDetails] = useState([]);
  const [binOutDetails, setBiOutnDetails] = useState([]);

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

  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [showStartDatePicker, setShowStartDatePicker] = useState(false);
  const [showEndDatePicker, setShowEndDatePicker] = useState(false);

  const handleStartDateChange = (date) => {
    const formattedStartDate = new Date(date).toISOString().split("T")[0];
    setStartDate(formattedStartDate);
    // updateBatteryStats(formattedStartDate, endDate);
  };

  const handleEndDateChange = (date) => {
    const formattedEndDate = new Date(date).toISOString().split("T")[0];
    setEndDate(formattedEndDate);
    // updateBatteryStats(startDate, formattedEndDate);
  };

  const openStartDatePicker = () => {
    setShowStartDatePicker(!showStartDatePicker);
    setShowEndDatePicker(false);
  };

  const openEndDatePicker = () => {
    setShowStartDatePicker(false);
    setShowEndDatePicker(!showEndDatePicker);
  };

  const refreshIcon = require("../../../assets/refresh.png");

  const binIcon80To100 = require("../../../assets/binIcon80To100.png");
  const binIcon60To80 = require("../../../assets/binIcon60To80.png");
  const binIcon30 = require("../../../assets/binIcon30.png");
  const binIcon0 = require("../../../assets/binIcon0.png");
  const noticeIcon = require("../../../assets/noticeIcon.png");

  const handleBinOutData = (data) => {
    const onlyInOutData = data.filter(
      (item) => item.Action && item.Action !== "DEFAULT"
    );

    const groupedInOutData = onlyInOutData.reduce(
      (acc, item) => {
        const lastBinIn = acc.lastBinIn;
        const lastBinOut = acc.lastBinOut;

        if (item.Action === "BIN_IN") {
          acc.lastBinIn = item;

          if (lastBinOut) {
            acc.result.push([lastBinOut, item]);
            acc.lastBinOut = null;
          }
        } else if (item.Action === "BIN_OUT") {
          acc.lastBinOut = item;

          if (lastBinIn) {
            acc.result.push([item, lastBinIn]);
            acc.lastBinIn = null;
          }
        }

        return acc;
      },
      { lastBinIn: null, lastBinOut: null, result: [] }
    ).result;

    setBiOutnDetails(groupedInOutData);
  };

  const [frequentBinFillDetails, setFrequentBinFillDetails] = useState({
    averageTime85To100: 0,
    averagePercentage85To100: 0,
    lowestDate: null,
    highestDate: null,
  });

  const handleFrequentBinFillData = (data) => {
    const state = {
      averageTime85To100: 0,
      averagePercentage85To100: 0,
      lowestDate: null,
      highestDate: null,
      binOutOccurrence: 0,
      binFillOccurrence: 0,
    };
  
    let count85To100 = 0;
    let sumTime85To100 = 0;
    let sumPercentage85To100 = 0;
  
    for (const entry of data) {
      const dustbinPercentage = parseFloat(entry.Dustbin_Percentage.replace("%", ""));
      const currentDateTime = new Date(entry.current_Date_Time);
  
      if (dustbinPercentage >= 85 && dustbinPercentage <= 100) {
        count85To100++;
        sumTime85To100 += currentDateTime.getTime();
        sumPercentage85To100 += dustbinPercentage;
        state.binFillOccurrence++;
      } else {
        state.binOutOccurrence++;
      }
  
      if (!state.lowestDate || currentDateTime < state.lowestDate) {
        state.lowestDate = currentDateTime;
      }
      if (!state.highestDate || currentDateTime > state.highestDate) {
        state.highestDate = currentDateTime;
      }
    }
  
    if (count85To100 > 0) {
      state.averageTime85To100 = sumTime85To100 / count85To100;
      state.averagePercentage85To100 = sumPercentage85To100 / count85To100;
    }
  
    const averageDateTime = new Date(state.averageTime85To100);
    const averageTimeHours = averageDateTime.getHours();
    const averageTimeMinutes = averageDateTime.getMinutes();
  
    state.averageTime85To100 = `${averageTimeHours}:${averageTimeMinutes}`;
  
    return state;
  };

  const getFrequentBinFillDetails = (binData) => {

    setFrequentBinFillDetails(handleFrequentBinFillData(binData));

  };

  const getBinData = () => {
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
        handleBinOutData(dataArray);
        setBinDetails(dataArray);
        // getLatestBinFilter(dataArray)
        getFrequentBinFillDetails(dataArray);
        setError(null);
        // console.log("Updated state:", dataArray);
        setIsLoading(false);
      })
      .catch((error) => {
        setError(error);
        console.error("Error:", error);
        setIsLoading(false);
      });
  };
  

  useEffect(() => {
    getBinData();
  }, []);

const [filteredOutData, setFilteredOutData] = useState()
  const filterOutDataAccordingToDateRange = (data, startDate, endDate) => {
    const filteredData = data.filter(item => {
      const currentDate = new Date(item.current_Date_Time);
      return currentDate >= new Date(startDate) && currentDate <= new Date(endDate);
    });
    setFilteredOutData(handleFrequentBinFillData(filteredData))
  };


  useEffect(() => {
    filterOutDataAccordingToDateRange(binDetails, startDate, endDate);
  }, [binDetails, startDate, endDate]);



  // console.log("binDetails - ", binDetails);

  const getStyleAccordngData = (data) => {
    const fixedData = parseInt(data.Dustbin_Percentage.replace("%", ""));
    if (fixedData >= 80) {
      return {
        classType: BinStyle.fullBin,
        statusClass: BinStyle.fullBinStatus,
        icon: binIcon80To100,
      };
    } else if (fixedData >= 60 && fixedData < 80) {
      return {
        classType: BinStyle.normalBin,
        statusClass: BinStyle.normalBinStatus,
        icon: binIcon60To80,
      };
    } else if (fixedData >= 30 && fixedData < 60) {
      return {
        classType: BinStyle.belowNormalBin,
        statusClass: BinStyle.belowNormalBinStatus,
        icon: binIcon30,
      };
    } else if (fixedData >= 0 && fixedData < 30) {
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
          data: formattedData.map((entry) => parseInt(entry.Dustbin_Percentage.replace("%", "")) || 0),
          color: (opacity = 1) => `rgba(134, 65, 244, ${opacity})`,
          strokeWidth: 2,
        },
      ],
    };
  
    setChartData(newChartData);
  };

  useEffect(() => {
    handleAnalysisData(binDetails, startDate, endDate);
  }, [binDetails,  startDate, endDate]);

  const handleRefresh = () => {
    getBinData();
  };

  const [activeTab, setActiveTab] = useState("HISTORY");
  const handleTabChange = (values) => {
    setActiveTab(values);
  };

  const getPercentageWidth = (percentage) => {
    return (percentage / 100) * 300;
  };

  const calculateClearedPercentage = (binOutPercentage, binInPercentage) => {
    const parsedBinOut = parseInt(binOutPercentage.replace("%", ""));
    const parsedBinIn = parseInt(binInPercentage.replace("%", ""));

    if (parsedBinIn > parsedBinOut) {
      return 100; // If Bin In percentage is greater, then 100% cleared
    }

    return (1 - parsedBinIn / parsedBinOut) * 100;
  };



  const getLatestBinFilter = (batteryData) => {
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

      setBatteryDropStats({
        highestPercentage: highPercentage,
        lowestPercentage,
        batteryDrop: highPercentage - lowPercentage,
        dropDuration: `${hours}hrs ${minutes}min ${seconds}sec`,
      });
    } else {
      setBatteryDropStats(null);
    }
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
                  <Text style={binDetails.length || isLoading ? BinStyle.lardgeTxt : {fontSize: 20, fontWeight: 600, color: '#ffffff', marginTop: 8, marginBottom: 8}}>
                    {binDetails.length
                      ? binDetails[
                          binDetails.length - 1
                        ].Dustbin_Percentage.replace("%", "")
                      : isLoading
                      ? "Loading..."
                      : "NO DATA TO DISPLAY"}
                  </Text>
                  {binDetails.length ? (
                    <Text style={BinStyle.perc}>%</Text>
                  ) : (
                    ""
                  )}
                </View>
                <View style={{ position: "relative" }}>
                  <View style={BinStyle.graphpercBorder} />
                  <View
                    style={{
                      width: binDetails.length
                        ? getPercentageWidth(
                            parseInt(
                              binDetails[
                                binDetails.length - 1
                              ].Dustbin_Percentage.replace("%", "")
                            )
                          )
                        : "",
                      ...BinStyle.graphperLength,
                    }}
                  />
                </View>
              </View>
              <View style={BinStyle.refreshBtn}>
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
              <View style={BinStyle.tabBtnWraper}>
                <MyButton
                  onPress={() => handleTabChange("HISTORY")}
                  buttonText={"Bin Status"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "HISTORY"}
                />
                <MyButton
                  onPress={() => handleTabChange("CLEANINING")}
                  buttonText={"Bin Cleaning"}
                  buttonType={"TAB"}
                  isItActive={activeTab === "CLEANINING"}
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
                binDetails.length ? 
                activeTab === "HISTORY" ? (
                  binDetails
                    .slice()
                    .reverse()
                    .map((data, index) => (
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
                            <Text
                              style={getStyleAccordngData(data).statusClass}
                            >
                              {data.Dustbin_Percentage}
                            </Text>
                          </View>
                          <Text
                            style={BinStyle.columnItemDetailSubHeader}
                          >{`${data.current_Date_Time}`}</Text>
                        </View>
                        <View style={BinStyle.statusIconWrapper}>
                          <Image
                            source={getStyleAccordngData(data).icon}
                            style={[
                              BinStyle.statusIcon,
                              { width: 36, height: 36 },
                            ]}
                          />
                          <View style={getStyleAccordngData(data).classType} />
                        </View>
                      </View>
                    ))
                ) : activeTab === "CLEANINING" ? (
                  binOutDetails.map((data, index) => (
                    <View
                      style={BinStyle.columnItem}
                      key={`${data.date}-${data.time}-${index}`}
                    >
                      <View style={BinStyle.columnItemDetails}>
                        <View style={BinStyle.columnItemGroupDetails}>
                          <Text style={BinStyle.columnItemDetailHeader}>
                            Bin Out Date:{" "}
                          </Text>
                          <Text /*style={getStyleAccordngData(parseInt(data[0].replace('%', '')) - parseInt(data[1].replace('%', ''))).statusClass}*/
                          >
                            {data[0].current_Date_Time}
                          </Text>

                          {/* {data.status < 30 ? (
                            <Image
                              source={noticeIcon}
                              style={[
                                BinStyle.noticeIcon,
                                { width: 23, height: 23 },
                              ]}
                            />
                          ) : (
                            ""
                          )} */}
                        </View>
                        <View
                          style={{ display: "flex", flexDirection: "column" }}
                        >
                          <Text>
                            {" "}
                            Previous Bin Level: {data[1].Dustbin_Percentage}
                          </Text>
                          <Text>
                            {" "}
                            After Bin Level: {data[0].Dustbin_Percentage}
                          </Text>
                          <Text>
                            {" "}
                            Bin Cleared:{" "}
                            {calculateClearedPercentage(
                              data[1].Dustbin_Percentage,
                              data[0].Dustbin_Percentage
                            )}
                            %
                          </Text>
                        </View>
                        {/* 
                        <Text
                          style={BinStyle.columnItemDetailSubHeader}
                        >{`${data.date} ${data.time}`}</Text> */}
                      </View>
                      {/* <View style={BinStyle.statusIconWrapper}>
                        <Image
                          source={getStyleAccordngData(data).icon}
                          style={[
                            BinStyle.statusIcon,
                            { width: 35, height: 35 },
                          ]}
                        />
                        <View style={getStyleAccordngData(data).classType} />
                      </View> */}
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
                        Bin Cleanup Summery
                      </Text>
                      <View
                        style={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: 16, // I changed this to 16 for better visibility
                        }}
                      >
                        <Text style={{ color: "#ffffff" }}>
                          Frequent Bin Fill Time:
                          {frequentBinFillDetails?.averageTime85To100}
                        </Text>
                        <Text style={{ color: "#ffffff" }}>
                        Percentage for Frequent Bin Fill:
                          {frequentBinFillDetails?.averagePercentage85To100.toFixed(2)}%
                        </Text>
                        <Text style={{ color: "#ffffff" }}>
                          Data from:
                          {frequentBinFillDetails?.highestDate?.toLocaleString()}{" "}
                          to
                          {frequentBinFillDetails?.lowestDate?.toLocaleString()}
                        </Text>
                      </View>
                    </View>
                    <View style={BinStyle.containerDate}>
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
                            Average Bin Fill Level: {filteredOutData?.averagePercentage85To100}%
                            {/* {batteryStats.maxPercentage} */}
                          </Text>
                          <Text style={{ color: "#ffffff" }}>
                         Out Occurrence Time:  {filteredOutData?.averageTime85To100}
                            {/* {batteryStats.minPercentage} */}
                          </Text>
                          <Text style={{ color: "#ffffff" }}>
                            Total Bin Fills: {filteredOutData?.binFillOccurrence}
                            {/* {batteryStats?.averageDrop?.toFixed(2)} */}
                          </Text>
                          <Text style={{ color: "#ffffff" }}>
                            Total Bin Outs: {filteredOutData?.binOutOccurrence}
                            {/* {batteryStats?.averageDrop?.toFixed(2)} */}
                          </Text>
                        </View>
                      ) : (
                        ""
                      )}
                    </View>

                    {
                      /*analysBatteryData.labels.length > 0 &&
                    analysBatteryData.datasets[0].data.length > 0*/ true ? (
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
                              {/* <View style={BinStyle.filterWrapper}>
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
                      )
                    }
                  </View>
                ) : <View style={{display:'flex', flexDirection: 'row', alignItems:'center', justifyContent: 'center', width: '100%', margin: '0 auto'}}>
                <EmptyData type={"EMPTY_DATA"} title={"No Bin Data to Display"} description={"no Bin data to display at the momment"}/>
              </View>
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
