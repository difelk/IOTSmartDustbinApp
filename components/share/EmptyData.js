import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default function EmptyData({ type, title, description, width, height }) {
  const NOTIFICATION = require("../../assets/no_data_notification.png");
  const EMPTY_DATA = require("../../assets/no_data.png");

  const [emptyDataObj, setEmptyDataObj] = useState({
    icon: null,
    title: null,
    description: null,
  });

  useEffect(() => {
    switch (type) {
      case "NOTIFICATION":
        setEmptyDataObj({
          icon: NOTIFICATION,
          title: title,
          description: description,
        });
        break;
      case "EMPTY_DATA":
        setEmptyDataObj({
          icon: EMPTY_DATA,
          title: title,
          description: description,
        });
        break;
      default:
        break;
    }
  }, [type, title, description]);

  return (
    <View style={styles.center}>
      <Image
        source={emptyDataObj.icon}
        style={[
          styles.noticeIcon,
          { width: width ?? 50, height: height ?? 50 },
        ]}
      />
      <Text style={{ fontSize: 16, color: "gray", fontWeight: 600 }}>
        {emptyDataObj.title}
      </Text>
      <Text style={{ fontSize: 12, color: "gray" }}>
        {emptyDataObj.description}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  center: {
    display: "flex",
    flexDirection: "column",
    justifyContent: 'center',
    alignItems: 'center',
    padding: 18,
    width: "100%",
    marginTop: 20,
  },
  noticeIcon: {
    display: "flex",
  },
});
