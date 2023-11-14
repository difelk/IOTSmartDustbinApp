import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../../styles/constants";

export default StyleSheet.create({
  
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: Colors.backgroundColor2,
    paddingTop: 60,
    paddingLeft: 12,
    paddingRight: 8,
  },

  pageName:{
    display:'flex',
    alignItems: 'flex-start',
    color: '#b97ae5',
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 20,

  },

  currentStatusTitle: {
    color: "#ffffff",
    marginTop: 20,
  },

  currentStatus: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#4e6bf2",
    padding: 8,
    borderRadius: 4,
    marginBottom: 15,
    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 20,
      },
      android: {
        shadowColor: "black",
        elevation: 20,
      },
    }),
  },

  currentStatusDisplay: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },

  mainTitleTxt: {
    fontSize: 15,
    color: colors.header2,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },

  lardgeTxt: {
    fontSize: 70,
    fontWeight: "700",
    color: "#ffffff",
  },

  perc: {
    fontSize: 15,
    color: "#ffffff",
  },

  refreshBtn: {
    display: "flex",
    width: "100%",
    alignItems: "flex-end",
    marginRight: 18,
  },

  headerSection: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  headerCol: {
    width: 120,
    padding: 8,
    textAlign: "center",
    backgroundColor: colors.backgroundColor1,
    borderLeftColor: colors.white,
  },

  dataBody: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },

  dataBodyCol: {
    width: 120,
    padding: 8,
    textAlign: "center",
    backgroundColor: colors.backgroundColor2,
    borderLeftColor: colors.white,
  },
});
