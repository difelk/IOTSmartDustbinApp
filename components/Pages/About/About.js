import React from "react";
import { View, Text, StyleSheet, ScrollView} from "react-native";
import AboutStyle from "./AboutStyle";
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";

export default function About() {
  return (
    <>
     <Header />
      <View style={styles.center}>
        {/* <Header /> */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <View style={styles.headerTxt}>
            <Text style={styles.topicTxt}>About</Text>
          </View>
          <View>
            <Text style={styles.subHeadTxt}>About Smart Dustbin App</Text>
          </View>
          <View>
            <Text style={styles.descTxt}>
            Welcome to the Smart Dustbin App, your innovative solution for efficient waste management. This application is designed to work seamlessly with Smart Dustbins equipped with cutting-edge technology, making garbage collection a breeze and maintaining cleanliness in public places, office areas, campuses, and more.
            </Text>
          </View>

          <View>
            <Text style={styles.subHeadTxt}>Purpose</Text>
          </View>
          <View>
            <Text style={styles.descTxt}>
            Our mission is to transform the way waste is managed, making it smarter, more convenient, and Eco-friendly. The Smart Dustbin App aims to address common challenges in waste management and revolutionize the user experience.
            </Text>
          </View>

          <View>
            <Text style={styles.subHeadTxt}>Key Features</Text>
          </View>
          <View>
            <Text style={styles.descTxt}>
            <Text style={styles.highlightText}>Automatic Lid Opening: </Text>
              With ultrasonic sensors, the Smart Dustbin App opens the lid automatically when someone approaches, eliminating the need for physical contact and enhancing hygiene.
            </Text>
            <Text style={styles.descTxt}>
            <Text style={styles.highlightText}>Fill Level Monitoring: </Text>
             The app continuously monitors the dustbin's fill level. When it's full or near capacity, a red LED indicator prevents overflow and alerts janitors to take action.
            </Text>
            <Text style={styles.descTxt}>
            <Text style={styles.highlightText}>Efficient Notifications: </Text>
              The app sends real-time notifications to janitors when the dustbin is full, ensuring timely and effective garbage collection.
            </Text>
          </View>

          <View>
            <Text style={styles.subHeadTxt}>How It Works</Text>
          </View>
          <View>
            <Text style={styles.descTxt}>
              1. Ultrasonic Sensors detect a user's presence near the dustbin, prompting automatic lid opening.
            </Text>
            <Text style={styles.descTxt}>
              1. Ultrasonic Sensors detect a user's presence near the dustbin, prompting automatic lid opening.
            </Text>
          </View>

          <View style={AboutStyle.headerSection}></View>
          </ScrollView>
        </View>
        
      <Footer txt={"About"}/>
    </>
  );
}

const styles = StyleSheet.create({
  center: {
    // alignItems: "center",
    flex: 1,
    minHeight: "100%",
    alignItems: 'flex-end',
    paddingBottom: 180,
    paddingLeft: 12,
    paddingRight: 12,
    paddingTop: 12,
  },
  scrollContainer: {
    flexGrow: 1,
    // paddingVertical: 20,
    // paddingHorizontal: 10,
  },
  headerTxt: {
    paddingTop: 30,
  },
  topicTxt: {
    fontSize: 22,
    fontWeight: '600',
  },
  subHeadTxt: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'left',
    paddingTop: 20,
  },
  descTxt: {
    fontSize: 14,
    paddingTop: 8,
    textAlign: 'justify',
  },
  highlightText: {
    fontWeight: '600', 
  },
});
