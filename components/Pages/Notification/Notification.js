import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import ip from "../../../config/ipAddress.json";
import Footer from "../../Footer/Footer";
import IconButton from "../../share/Button/IconButton";
import Header from "../../Header/Header";
import EmptyData from "../../share/EmptyData";
import Loader from "../../share/Loader";

export default function Notification() {
  const notificationIcon = require("../../../assets/MailIcon.png");
  const deleteBinIcon = require("../../../assets/deleteIcon.png");

  const [selectedId, setSelectedId] = useState();
  const [notificationsData, setNotificationsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handlePress = async (id) => {
    setSelectedId(id);

    await fetch(`http://${ip.ipAdress}:3000/notifications/view/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
    });
    getNotificationData();
  };

  const handleDeleteBtn = async (id) => {
    await fetch(`http://${ip.ipAdress}:3000/notifications/delete/${id}`, {
      method: "DELETE",
    });
    getNotificationData();
  };

  const getNotificationData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch(`http://${ip.ipAdress}:3000/notifications`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
  
      const responseBody = await response.text();
      if (responseBody.trim() !== "") {
        const notifications = JSON.parse(responseBody);
        setNotificationsData(notifications);
      } else {
        setNotificationsData([]);
      }
  
      setIsLoading(false);
    } catch (error) {
      console.error("Error fetching notifications:", error);
      setIsLoading(false);
    }
  };
  

  useEffect(() => {
    getNotificationData();
  }, []);

  return (
    <>
      <Header />
      {isLoading ? (
        <Loader />
      ) : (
        <View style={styles.center}>
          <Text style={styles.topicTxt}>Notification</Text>

          {notificationsData && Object.keys(notificationsData).length ? (
            Object.keys(notificationsData).map((notificationId) => {
              const item = notificationsData[notificationId];
              return (
                <TouchableOpacity
                  onPress={() => handlePress(notificationId)}
                  key={notificationId}
                >
                  <View style={styles.parentBox}>
                    <View
                      style={
                        item.view
                          ? styles.notificationBox
                          : [
                              styles.notificationBox,
                              styles.unreadNotificationBox,
                            ]
                      }
                    >
                      <View style={styles.iconBox}>
                        <Image source={notificationIcon} style={styles.icon} />
                      </View>
                      <View style={styles.textBox}>
                        <Text style={styles.headerTxt}>
                          {item.Notification_Title}
                        </Text>
                        <Text style={styles.subTxt}>
                          {item.current_Date_Time}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={
                        selectedId === notificationId
                          ? styles.collapseBox
                          : [styles.collapseBox, styles.displayHide]
                      }
                    >
                      <Text style={styles.notifyDetails}>
                        {item.Notification_Description}
                      </Text>
                      <IconButton
                        key={1}
                        onPress={() => handleDeleteBtn(notificationId)}
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
              );
            })
          ) : (
            <View
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmptyData
                type={"NOTIFICATION"}
                title={"Empty Notifications"}
                description={
                  "Oops! It seems like there are no new notifications for you at the moment."
                }
              />
            </View>
          )}
        </View>
      )}

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
    paddingTop: 12,
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
  unreadNotificationBox: {
    backgroundColor: "#3c28a01a",
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
