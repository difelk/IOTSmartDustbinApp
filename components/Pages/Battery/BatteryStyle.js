import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import { colors } from "../../../styles/constants";

export default StyleSheet.create({
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: Colors.backgroundColor2,
    paddingTop: 16,
    paddingLeft: 12,
    paddingRight: 8,
    paddingBottom: 50,
    marginBottom: 60,
  },

  pageName: {
    display: "flex",
    alignItems: "flex-start",
    color: "#b97ae5",
    fontSize: 16,
    fontWeight: "500",
    marginBottom: 20,
  },

  currentStatusTitle: {
    color: "#FFFFFF",
  },

  currentStatus: {
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#6E33D3",
    padding: 8,
    borderRadius: 8,
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

  graphpercBorder: {
    width: 300,
    padding: 8,
    backgroundColor: "#cae5fd",
    borderRadius: 10,
  },
  graphperLength: {
    backgroundColor: "#0f8af9",
    padding: 8,
    borderRadius: 10,
    position: "absolute",
  },

  currentStatusDisplay: {
    display: "flex",
    flexDirection: "column",
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
    color: "#FFFFFF",
  },

  perc: {
    fontSize: 15,
    color: "#FFFFFF",
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

  // new styles

  columnWrap: {
    display: "flex",
    flexDirection: "column",
    marginTop: 12,
  },
  columnItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 12,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: "#F9F9F9",
    backgroundColor: "#ffffff",
  },
  columnItemDetails: {
    display: "flex",
    flexDirection: "column",
  },
  columnItemGroupDetails: {
    display: "flex",
    flexDirection: "row",
  },
  columnItemDetailHeader: {
    fontSize: 16,
    fontWeight: "600",
    paddingBottom: 4,
  },
  columnItemDetailHeaderStatus: {
    backgroundColor: "#78E587",
    padding: 12,
    borderRadius: 8,
    width: 12,
    fontSize: 16,
  },
  columnItemDetailSubHeader: {
    fontSize: 12,
    color: "gray",
    marginTop: 4,
  },
  statusIconWrapper: {
    position: "relative",
  },
  statusIcon: {
    transform: [{ rotate: "-90deg" }],
  },
  noticeIcon: {
    marginLeft: 8,
  },
  fullBatteryStatus: {
    width: 120,
    backgroundColor: "#78E587",
    borderRadius: 10,
    padding: 4,
    marginLeft: 10,
    color: "white",
    fontWeight: "600",
  },
  normalBatteryStatus: {
    width: 80,
    backgroundColor: "#3FC3F4",
    borderRadius: 10,
    padding: 4,
    marginLeft: 10,
    color: "white",
    fontWeight: "600",
  },
  belowNormalBatteryStatus: {
    width: 50,
    backgroundColor: "#EBB37A",
    borderRadius: 10,
    padding: 4,
    marginLeft: 10,
    color: "white",
    fontWeight: "600",
  },
  dangBatteryStatus: {
    width: 35,
    backgroundColor: "#F57FA3",
    borderRadius: 10,
    padding: 4,
    marginLeft: 10,
    color: "white",
    fontWeight: "600",
  },
  fullBattery: {
    width: 10,
    height: 24.8,
    backgroundColor: "#78E587",
    position: "absolute",
    bottom: 4,
    right: 12.5,
  },
  normalBattery: {
    width: 10,
    height: 20,
    backgroundColor: "#3FC3F4",
    position: "absolute",
    bottom: 4,
    right: 12.5,
  },

  belowNormalBattery: {
    width: 10,
    height: 10,
    backgroundColor: "#EBB37A",
    position: "absolute",
    bottom: 4,
    right: 12.5,
  },

  dangBattery: {
    width: 10,
    height: 2,
    backgroundColor: "#F57FA3",
    position: "absolute",
    bottom: 4,
    right: 12.5,
  },

  tabBtnWraper: {
    backgroundColor: "#ffffff",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 8,
    borderRadius: 50,
    maxWidth: 275,
  },

  filterWrapper: {
    // width: 360,
    marginBottom: 8,
    display: "flex",
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: "center",
  },
});
