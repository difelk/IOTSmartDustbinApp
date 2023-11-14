import React, { useState } from "react";
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from "react-native";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import { colors } from "../../../styles/constants";

export default function Notification() {
  const notificationIcon = require("../../../assets/MailIcon.png");
  const deleteBinIcon = require("../../../assets/deleteIcon.png");
  const handleDeleteBtn = (value) => {};

  const data = [
    {
      ID: 1,
      Title: "Battery Low",
      DateTime: "2023/10/29 18:30",
      Desc: "Battery Percentage: 20% Only 6 hours of battery power remaining. Please recharge for uninterrupted operation.",
    },
    {
      ID: 2,
      Title: "Bin Empty",
      DateTime: "2023/10/30 15:30",
      Desc: "Battery Percentage: 20% Only 6 hours of battery power remaining. Please recharge for uninterrupted operation.",
    },
    {
      ID: 3,
      Title: "Bin Full",
      DateTime: "2023/10/32 10:30",
      Desc: "Battery Percentage: 20% Only 6 hours of battery power remaining. Please recharge for uninterrupted operation.",
    },
  ];

  const [selectedId, setSelectedId] = useState();
  const handlePress = (id)=>{
    setSelectedId(id);
  }
  return (
    <>
      <View style={styles.center}>
        <Text style={styles.topicTxt}>Notification</Text>

        {data.map((item) => (
          <TouchableOpacity onPress={()=>handlePress(item.ID)} key={item.ID}>
          <View style={styles.parentBox}>
            <View style={styles.notificationBox}>
              <View style={styles.iconBox}>
                <Image source={notificationIcon} style={styles.icon} />
              </View>
              <View style={styles.textBox}>
                <Text style={styles.headerTxt}>{item.Title}</Text>
                <Text style={styles.subTxt}>{item.DateTime}</Text>
              </View>
            </View>
            <View style={selectedId == item.ID ? styles.collapseBox : [styles.collapseBox, styles.displayHide]}>
              <Text style={styles.notifyDetails}>{item.Desc}</Text>
              <IconButton
                key={1}
                onPress={() => handleDeleteBtn(1)}
                buttonText={""}
                buttonIcon={deleteBinIcon}
                bgColor={"#FFFFFF"}
                txtColor={"#FFFFFF"}
                width={25}
                height={25}
                btnSize={"SM"}
                btnType={""}
              />
            </View>
          </View>
          </TouchableOpacity>
        ))}
      </View>

      <Footer txt={"Notification"} />
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    flex: 1,
    minHeight: "100%",
    alignItems: "center",
    paddingBottom: 60,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 50,
    backgroundColor: "#EBEBEB",
  },
  topicTxt: {
    fontSize: 20,
    fontWeight: "600",
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  parentBox: {
    display: "flex",
    flexDirection: "column",
    // marginBottom: 4,
    padding: 10,
  },
  notificationBox: {
    display: "flex",
    flexDirection: "row",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    width: 350,
  },
  iconBox: {
    marginRight: 20,
  },
  icon: {
    width: 30,
    height: 30,
  },
  textBox: {
    display: "flex",
    flexDirection: "column",
    fontSize: 14,
    fontWeight: "800",
  },
  headerTxt: {
    color: "#6F6969",
    fontWeight: "600",
  },
  subTxt: {
    color: "#B8B6B6",
    fontWeight: "600",
  },
  collapseBox: {
    padding: 12,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: "#F4F4F4",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  notifyDetails: {
    color: "#978A8A",
    fontWeight: "300",
    textAlign: "justify",
    width: 260,
  },
  displayHide: {
    display: "none",
  },
});
