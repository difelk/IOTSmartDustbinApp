import { StyleSheet } from "react-native";
import { colors } from "../../styles/constants";

export default StyleSheet.create({
  headerWrapper: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 28,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 10,
    backgroundColor: "#4363eb",
  },
  logoIcon: {
    width: "90%",
    height: "90%",
  },
  name: {
    color: "#ffffff",
    fontSize: 15,
    fontWeight: "700",
  },
  title: {
    color: '#87a1fc',
    fontSize: 12,
    fontWeight: "500",
  },
  profileDetails: {
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
  },
  profilePicSection: {
      width: 50,
      height: 50,
      borderRadius: 25,
      // backgroundColor:'#ffffff',
      marginRight: 12,
      display:'flex',
      alignItems: 'center',
      justifyContent: 'center',
      ...Platform.select({
        ios: {
          shadowColor: "blue",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 20,
        },
        android: {
          shadowColor: "black",
          elevation:10,
        },
      }),
  },
  profilePicTextSection: {
    display: "flex",
    flexDirection: "column",
  },
});
