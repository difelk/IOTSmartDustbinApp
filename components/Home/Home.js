import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Dimensions,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeStyle from "./HomeStyle";
import global from "../../styles/global";
import IconButton from "../share/Button/IconButton";
import { colors } from "../../styles/constants";
import MyButton from "../share/Button/Button";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
// import { ScrollView } from "react-native-gesture-handler";
// import MyButton from "../share/Button/Button";

export default function Home() {
  const batteryIcon = require("../../assets/BatteryIcon.png");
  const binIcon = require("../../assets/BinIcon.png");
  const binCloseIcon = require("../../assets/BinCloseIcon.png");
  const binOpenIcon = require("../../assets/BinOpenIcon.png");
  const settingIcon = require("../../assets/SettingIcon.png");
  const aboutIcon = require("../../assets/AboutIcon.png");
  const notificationIcon = require("../../assets/mail.png");
  const existIcon = require("../../assets/ExistIcon.png");
  // const mailIcon = require("../../assets/MailIcon.png");
  const crdbkgrnd = require("../../assets/card5.jpg");
  const crdbkgrnd2 = require("../../assets/card9.jpg");

  const navigation = useNavigation();

  const handleOnClick = (value) => {};
  const handleLidControlBtn = (screenName) => {
    console.log("screenName - ", screenName);
  };

  const handleComponentControlBtn = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
     
        <View style={global.container}>
        <ImageBackground
        source={crdbkgrnd2}
        style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100%'}}
      >
          <Header />
          <ScrollView>
            <View style={HomeStyle.mainWrapper}>
              <View>
                <View>
                  <Text style={HomeStyle.mainTitleTxt}>LID Control</Text>
                  <View style={HomeStyle.stripRuleTop}></View>
                </View>
                <View style={{ margin: 5 }}></View>
                <View style={HomeStyle.greenboxShadow}>
                  <ImageBackground
                    source={crdbkgrnd}
                    resizeMode="cover"
                    style={HomeStyle.greenBox}
                    borderRadius={10}
                  >
                    {/* <View style={HomeStyle.greenBox}> */}
                    <View>
                      <Text style={HomeStyle.subTitleTxt}>Current Status</Text>
                      <Text style={HomeStyle.whiteTxt}>LID CLOSED</Text>
                      <Text style={HomeStyle.subTitleTxt}>Battery Status</Text>
                      <View style={global.display_Flx_dir_row_align_center}>
                        <Image
                          source={batteryIcon}
                          style={HomeStyle.statusIcons}
                        />
                        <Text style={HomeStyle.whiteTxt}>67%</Text>
                      </View>

                      <Text style={HomeStyle.subTitleTxt}>Bin Status</Text>
                      <View style={global.display_Flx_dir_row_align_center}>
                        <Image source={binIcon} style={HomeStyle.statusIcons} />
                        <Text style={HomeStyle.whiteTxt}>20%</Text>
                      </View>
                    </View>
                    <View style={HomeStyle.lidBtnWrapper}>
                      <View style={HomeStyle.lidBtnClose}>
                        <IconButton
                          onPress={handleLidControlBtn}
                          buttonText={"CLOSE LID"}
                          buttonIcon={binCloseIcon}
                          bgColor={"#3cb89b"}
                          txtColor={colors.white}
                          width={55}
                          height={55}
                          btnSize={"LG"}
                          btnType={"LID"}
                        />
                      </View>
                      <View style={HomeStyle.lidBtnOpen}>
                        <IconButton
                          onPress={handleLidControlBtn}
                          buttonText={"OPEN LID"}
                          buttonIcon={binOpenIcon}
                          bgColor={"#3cb89b"}
                          txtColor={colors.white}
                          width={55}
                          height={55}
                          btnSize={"LG"}
                          btnType={"LID"}
                        />
                      </View>
                    </View>
                  </ImageBackground>
                </View>
              </View>

              <View style={
                    HomeStyle.servicesTextWrapper}>
                <Text style={HomeStyle.servicesTex}>My Services</Text>
                <View style={HomeStyle.stripRuleBottom}></View>
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
                    buttonText={"BATTERY"}
                    buttonIcon={batteryIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"BATTERY"}
                  />
                  <IconButton
                    onPress={() => handleComponentControlBtn("Bin")}
                    buttonText={"BIN"}
                    buttonIcon={binIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"BIN"}
                  />
                  <IconButton
                    onPress={() => handleComponentControlBtn("Battery")}
                    buttonText={"SETTINGS"}
                    buttonIcon={settingIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
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
                    buttonText={"ABOUT"}
                    buttonIcon={aboutIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"ABOUT"}
                  />
                  <IconButton
                    onPress={() => handleComponentControlBtn("Bin")}
                    buttonText={"Notification"}
                    buttonIcon={notificationIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"NOTIFICATION"}
                  />
                   <IconButton
                    onPress={() => handleComponentControlBtn("Battery")}
                    buttonText={"LOGOUT"}
                    buttonIcon={existIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    // btnType={'LOGOUT'}
                  />
                </View>
              </View>

              {/* <View style={{ margin: 10 }}></View> */}

              {/* <View
                style={[
                  global.display_Flx_dir_row_align_center,
                  global.justify_between,
                ]}
              >
                <View
                  style={[
                    global.display_Flx,
                    global.dir_col,
                    global.align_start,
                    global.justify_between,
                    global.mg20,
                  ].join(" ")}
                >
                  <IconButton
                    onPress={() => handleComponentControlBtn("About")}
                    buttonText={"ABOUT"}
                    buttonIcon={aboutIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"ABOUT"}
                  />
                  <View style={{ margin: 10 }}></View>
                  <IconButton
                    onPress={() => handleComponentControlBtn("Battery")}
                    buttonText={"LOGOUT"}
                    buttonIcon={existIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    // btnType={'LOGOUT'}
                  />
                </View>
                <View
                  style={{
                    width: "62%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <View
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <View>
                        <Text
                          style={{
                            fontSize: 14,
                            fontWeight: "600",
                            marginRight: 16,
                          }}
                        >
                          NOTIFICATION
                        </Text>
                      </View>
                      <View>
                        <MyButton
                          onPress={handleOnClick}
                          buttonText={"View All"}
                          buttonType={"LINK"}

                        />
                      </View>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      width: "100%",
                      backgroundColor: "#6749de",
                      borderRadius: 10,
                      padding: 8,
                      marginTop: 15,
                      marginBottom: 8,
                    }}
                  >
                    <View style={{ marginRight: 16 }}>
                      <Image
                        source={mailIcon}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                    <View>
                      <Text style={{color: 'white'}}>Battery Low</Text>
                      <Text style={{color: 'white'}}>2023/10/29 18:30</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      width: "100%",
                      backgroundColor: "#6749de",
                      borderRadius: 10,
                      padding: 8,
                      marginTop: 12,
                      marginBottom: 8,
                    }}
                  >
                    <View style={{ marginRight: 16 }}>
                      <Image
                        source={mailIcon}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                    <View>
                      <Text style={{color: 'white'}}>Battery Low</Text>
                      <Text style={{color: 'white'}}>2023/10/29 18:30</Text>
                    </View>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",

                      width: "100%",
                      backgroundColor: "#6749de",
                      borderRadius: 10,
                      padding: 8,
                      marginTop: 12,
                      marginBottom: 8,
                    }}
                  >
                    <View style={{ marginRight: 16 }}>
                      <Image
                        source={mailIcon}
                        style={{ width: 25, height: 25 }}
                      />
                    </View>
                    <View>
                      <Text style={{color: 'white'}}>Battery Low</Text>
                      <Text style={{color: 'white'}}>2023/10/29 18:30</Text>
                    </View>
                  </View>
                </View>
              </View> */}
            </View>
          </ScrollView>
          </ImageBackground>
        </View>
    
      <Footer />
    </>
  );
}
