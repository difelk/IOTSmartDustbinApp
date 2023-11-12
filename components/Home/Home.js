import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  ImageBackground,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import HomeStyle from "./HomeStyle";
import global from "../../styles/global";
import IconButton from "../share/Button/IconButton";
import { colors } from "../../styles/constants";
import Header from "../Header/Header";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();
  const batteryIcon = require("../../assets/BatteryIcon.png");
  const binIcon = require("../../assets/BinIcon.png");
  const binCloseIcon = require("../../assets/BinCloseIcon.png");
  const binOpenIcon = require("../../assets/BinOpenIcon.png");
  const settingIcon = require("../../assets/SettingIcon.png");
  const aboutIcon = require("../../assets/AboutIcon.png");
  const notificationIcon = require("../../assets/mail.png");
  const existIcon = require("../../assets/ExistIcon.png");
  const crdbkgrnd = require("../../assets/card5.jpg");
  const crdbkgrnd2 = require("../../assets/card14.jpg");

  const navigation = useNavigation();
  const handleLidControlBtn = (screenName) => {
    // console.log("screenName - ", screenName);
  };

  const handleComponentControlBtn = (screenName) => {
    navigation.navigate(screenName);
  };

  return (
    <>
      <View style={global.container}>
        <ImageBackground
          source={crdbkgrnd2}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "100%",
          }}
        >
          <Header />
          <ScrollView>
            <View style={HomeStyle.mainWrapper}>
              <View>
                <View>
                  <Text style={HomeStyle.mainTitleTxt}>{t("LID_CONTROL")}</Text>
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
                    <View>
                      <Text style={HomeStyle.subTitleTxt}>
                        {t("CURRENT_STATUS")}
                      </Text>
                      <Text style={HomeStyle.whiteTxt}>{t("LID_CLOSE")}</Text>
                      <Text style={HomeStyle.subTitleTxt}>
                        {t("BATTERY_STATUS")}
                      </Text>
                      <View style={global.display_Flx_dir_row_align_center}>
                        <Image
                          source={batteryIcon}
                          style={HomeStyle.statusIcons}
                        />
                        <Text style={HomeStyle.whiteTxt}>67%</Text>
                      </View>

                      <Text style={HomeStyle.subTitleTxt}>
                        {t("BIN_STATUS")}
                      </Text>
                      <View style={global.display_Flx_dir_row_align_center}>
                        <Image source={binIcon} style={HomeStyle.statusIcons} />
                        <Text style={HomeStyle.whiteTxt}>20%</Text>
                      </View>
                    </View>
                    <View style={HomeStyle.lidBtnWrapper}>
                      <View style={HomeStyle.lidBtnClose}>
                        <IconButton
                          onPress={handleLidControlBtn}
                          buttonText={t("CLOSE_LID")}
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
                          buttonText={t("OPEN_LID")}
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

              <View style={HomeStyle.servicesTextWrapper}>
                <Text style={HomeStyle.servicesTex}>{t("MY_SERVICES")}</Text>
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
                    buttonText={t("BATTERY")}
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
                    buttonText={t("BIN")}
                    buttonIcon={binIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"BIN"}
                  />
                  <IconButton
                    onPress={() => handleComponentControlBtn("Settings")}
                    buttonText={t("SETTINGS")}
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
                    buttonText={t("ABOUT")}
                    buttonIcon={aboutIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                    btnType={"ABOUT"}
                  />
                  <IconButton
                    onPress={() => handleComponentControlBtn("Notification")}
                    buttonText={t("NOTIFICATION")}
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
                    buttonText={t("LOGOUT")}
                    buttonIcon={existIcon}
                    bgColor={"#1c7850"}
                    txtColor={colors.white}
                    width={55}
                    height={55}
                    btnSize={"LG"}
                  />
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
