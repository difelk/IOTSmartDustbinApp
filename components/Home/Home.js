import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
// import { useFocusEffect } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import HomeStyle from "./HomeStyle";
import global from "../../styles/global";
import IconButton from "../share/Button/IconButton";
import { colors } from "../../styles/constants";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";
import ip from "../../config/ipAddress.json";

export default function Home() {
  const { t } = useTranslation();
  const batteryIcon = require("../../assets/empty-battery.png");
  const binIcon = require("../../assets/BinIcon.png");
  const binIconService = require("../../assets/binBlueIcon.png");
  const batteryIconService = require("../../assets/batteryBlueIcon.png");
  const binCloseIcon = require("../../assets/BinCloseIcon.png");
  const binOpenIcon = require("../../assets/BinOpenIcon.png");
  // const settingIcon = require("../../assets/SettingIcon.png");
  const settingIcon = require("../../assets/settingBlueIcon.png");
  // const aboutIcon = require("../../assets/AboutIcon.png");
  const aboutIcon = require("../../assets/infoBlueIcon.png");
  // const notificationIcon = require("../../assets/mail.png");
  // const notificationIcon = require("../../assets/mail.png");
  const notificationIcon = require("../../assets/bellBlueIcon.png");
  const display = require("../../assets/display.png");
  const existIcon = require("../../assets/existBlueIcon.png");
  const crdbkgrnd = require("../../assets/card5.jpg");
  const crdbkgrnd2 = require("../../assets/background007.jpg");
  const crdbkgrnd3 = require("../../assets/bkgrnd.jpg");
  const alertIcon = require("../../assets/alert.png");
  const nextIcon = require("../../assets/next.png");

  const [batteryLevel, setBatteryLevel] = useState(0)
  const [batteryData, setBatteryData] = useState([])
  const [binLevel, setBinLevel] = useState(0)
  const [binData, setBinData] = useState([])
  const [unreadNotificationCount, setUnreadNotificationCount] = useState(null);



  const getBatteryData = () => {
    // setIsLoading(true);
    fetch(`http://${ip.ipAdress}:3000/battery`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        setBatteryData(dataArray)
        if(dataArray.length){
          setBatteryLevel(parseInt(dataArray[dataArray.length - 1].Battery_Percentage));
        }
        
        // handleAnalysisData(dataArray);
        // setError(null);
        // console.log("Updated state:", dataArray);
        // setIsLoading(false);
      })
      .catch((error) => {
        // setError(error);
        console.error("Error:", error);
        // setIsLoading(false);
      });
  }


  const getNotificationData = async () => {
    try {
      const response = await fetch(`http://${ip.ipAdress}:3000/notifications`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const notifications = await response.json();
  
      const unreadNotifications = Object.values(notifications).filter(
        (item) => !item.view
      );

      const unreadCount = unreadNotifications.length;

      setUnreadNotificationCount(unreadCount);
    } catch (error) {
      console.error("Error fetching notifications:", error);
    }
  };


  
  useEffect(() => {
    getNotificationData();
  }, []);
  



  const getBinData = () => {
    // setIsLoading(true);
    fetch(`http://${ip.ipAdress}:3000/bin`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const dataArray = Array.isArray(data) ? data : [data];
        console.log("dataArray - ", dataArray);
        setBinData(dataArray)
        if(dataArray.length){
          setBinLevel(parseInt(dataArray[dataArray.length - 1].Battery_Percentage));
        }
        // setBinDetails(dataArray);
        // setError(null);
        // console.log("Updated state:", dataArray);
        // setIsLoading(false);
      })
      .catch((error) => {
        // setError(error);
        console.error("Error:", error);
        // setIsLoading(false);
      });
  };

    useEffect(() => {
      getBatteryData();
      getBinData();
    }, []); 


    // useFocusEffect(
    //   React.useCallback(() => {
    //   getBatteryData();
    //   getBinData();
    //   }, [])
    // );



    

  const navigation = useNavigation();
  const handleLidControlBtn = async (lidStatus) => {
    try {
      const response = await fetch(`http://${ip.ipAdress}:3000/lid/control`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ lidStatus }),
      });

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
    } catch (error) {
      console.error("Error controlling lid:", error);
    }

  };

  const handleComponentControlBtn = (screenName) => {
    navigation.navigate(screenName);
  };
  const handleNextBtn = (screenName) => {
    navigation.navigate(screenName);
  };

  const getDisplayBatteryLevel = () => {
 return   20/100 * batteryLevel
  }

  return (
    <>
      <View style={global.container}>
        <ImageBackground
          // source={crdbkgrnd2}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
            backgroundColor: "#edf0f9",
          }}
        >
          <Header />
          <ScrollView>
            <View style={HomeStyle.mainWrapper}>
              <View style={{ padding: 16 }}>
                <View>
                  <Text style={HomeStyle.mainTitleTxt}>{t("OVERVIEW")}</Text>
                </View>
                <View style={{ margin: 5 }}></View>
                <View style={HomeStyle.greenboxShadow}>
                  <ImageBackground
                    // source={crdbkgrnd}
                    resizeMode="cover"
                    style={HomeStyle.greenBox}
                    borderRadius={10}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        width: "100%",
                        marginBottom: 10,
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#87a1fc",
                            fontWeight: "700",
                          }}
                        >
                          Battery Status
                        </Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                            position: "relative",
                          }}
                        >
                          <View
                            style={{
                              width:getDisplayBatteryLevel(),
                              height: 9,
                              backgroundColor: "#ffffff",
                              position: "absolute",
                              top: 12.5,
                              left: 3,
                            }}
                          ></View>
                          <Image
                            source={batteryIcon}
                            style={HomeStyle.statusIcons}
                          />
                          <Text
                            style={{
                              fontSize:batteryLevel >= 0?  25 : 12,
                              color:batteryLevel >= 0? "#ffffff" : "#9ab2ff",
                              fontWeight: "700",
                            }}
                          >
                            {batteryLevel >= 0 ?  batteryLevel + " %" : "no data found"}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 12, color: "#9ab2ff" }}>
                           {batteryData.length ?  batteryData[batteryData.length-1]?.current_Date_Time : ''}
                          </Text>
                        </View>
                      </View>
                      <View>
                        <Text
                          style={{
                            fontSize: 16,
                            color: "#87a1fc",
                            fontWeight: "700",
                          }}
                        >
                          Bin Status
                        </Text>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            source={binIcon}
                            style={HomeStyle.statusIcons}
                          />
                          <Text
                            style={{
                              fontSize:binData.length ? 25 : 12,
                              color: binData.length ? "#ffffff" : "#9ab2ff",
                              fontWeight: "700",
                            }}
                          >
                            {console.log("binData - ", binData)}
                             {binData.length ?  binData[binData.length-1]?.Dustbin_Percentage: 'no data found'}
                          </Text>
                        </View>
                        <View
                          style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                          }}
                        >
                          <Text style={{ fontSize: 12, color: "#9ab2ff" }}>
                          {binData.length ?  binData[binData.length-1]?.current_Date_Time : ''}
                          </Text>
                        </View>
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
                      <View
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          width: "100%",
                        }}
                      >
                        <Text
                          style={{
                            textAlign: "center",
                            color: "#87a1fc",
                            fontWeight: "700",
                          }}
                        >
                          LID Control
                        </Text>
                      </View>
                      <View
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          alignItems: "center",
                          justifyContent: "center",
                          textAlign: "center",
                          // marginBottom: 15,
                          width: "100%",
                        }}
                      >
                        <IconButton
                          onPress={() => handleLidControlBtn("LID_CLOSE")}
                          buttonText={t("CLOSE_LID")}
                          buttonIcon={binCloseIcon}
                          bgColor={"#1c7850"}
                          txtColor={colors.white}
                          width={28}
                          height={28}
                          btnSize={"LG"}
                          btnType={"LIDCONTROL"}
                        />
                        <IconButton
                          onPress={() => handleLidControlBtn("LID_OPEN")}
                          buttonText={t("OPEN_LID")}
                          buttonIcon={binOpenIcon}
                          bgColor={"#1c7850"}
                          txtColor={colors.white}
                          width={28}
                          height={28}
                          btnSize={"LG"}
                          btnType={"LIDCONTROL"}
                        />
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>
              <View style={HomeStyle.middleSection}>
                <ImageBackground
                  source={crdbkgrnd3}
                  style={HomeStyle.mainBox}
                  borderRadius={15}
                >
                  <View style={HomeStyle.iconView}>
                    <Image source={display} style={HomeStyle.icon} />
                  </View>
                  <View style={HomeStyle.textView}>
                    <Text style={HomeStyle.headerTxt}>
                      Change Display Messages
                    </Text>
                    <Text style={HomeStyle.headerTxtSubText}>
                      Alerts, Notifications and Warnings messages
                    </Text>
                  </View>
                  <View style={HomeStyle.nextIcon}>
                    <TouchableOpacity>
                      {/* <Image source={nextIcon} style={HomeStyle.icon} /> */}
                      <IconButton
                        key={1}
                        onPress={() => handleNextBtn("AlertPage")}
                        buttonText={""}
                        buttonIcon={nextIcon}
                        bgColor={"#FFFFFF"}
                        txtColor={"#FFFFFF"}
                        width={25}
                        height={25}
                        btnSize={"SM"}
                        btnType={""}
                      />
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>

              <View style={HomeStyle.sectionTwo}>
                <View style={HomeStyle.servicesTextWrapper}>
                  <Text style={HomeStyle.servicesTex}>{t("MY_SERVICES")}</Text>
                </View>

                <View style={{ margin: 10 }}></View>

                <View style={global.homeBtnsList}>
                  <View
                    style={[
                      global.display_Flx_dir_row_align_center,
                      global.justify_between,
                    ]}
                  >
                    <IconButton
                      onPress={() => handleComponentControlBtn("Battery")}
                      buttonText={t("BATTERY")}
                      buttonIcon={batteryIconService}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={"BATTERY"}
                    />
                    <IconButton
                      onPress={() => handleComponentControlBtn("Bin")}
                      buttonText={t("BIN")}
                      buttonIcon={binIconService}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={"BIN"}
                    />
                    <IconButton
                      onPress={() => handleComponentControlBtn("Settings")}
                      buttonText={t("SETTINGS")}
                      buttonIcon={settingIcon}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={"SETTINGS"}
                    />
                  </View>
                </View>
                <View style={{ margin: 10 }}></View>

                <View style={global.homeBtnsList}>
                  <View
                    style={[
                      global.display_Flx_dir_row_align_center,
                      global.justify_between,
                    ]}
                  >
                    <IconButton
                      onPress={() => handleComponentControlBtn("About")}
                      buttonText={t("ABOUT")}
                      buttonIcon={aboutIcon}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={"ABOUT"}
                    />
                    
                    <IconButton
                      onPress={() => handleComponentControlBtn("Notification")}
                      buttonText={t("NOTIFICATION")}
                      buttonIcon={notificationIcon}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={unreadNotificationCount > 0 ? "NOTIFICATIONUNREAD" : "NOTIFICATION"}
                    />
                    <IconButton
                      onPress={() => handleComponentControlBtn("LOGOUT")}
                      buttonText={t("LOGOUT")}
                      buttonIcon={existIcon}
                      bgColor={"#1c7850"}
                      txtColor={colors.white}
                      width={35}
                      height={35}
                      btnSize={"LG"}
                      btnType={"LOGOUT"}
                    />
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </ImageBackground>
      </View>

      {/* <Footer /> */}
    </>
  );
}
