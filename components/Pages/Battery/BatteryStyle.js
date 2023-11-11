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

  mainTitleTxt: {
    fontSize: 15,
    color: colors.header2,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
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
