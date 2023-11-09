import { StyleSheet } from "react-native";
import { colors } from "../../styles/constants";

export default StyleSheet.create({
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    backgroundColor: colors.backgroundColor2,
    padding: 16,
    paddingBottom: 50,
  },
  subTitleTxt: {
    fontSize: 12,
    color: colors.subTxt1,
    marginTop: 8,
    marginBottom: 8,
  },

  mainTitleTxt: {
    fontSize: 15,
    color: colors.header2,
    fontWeight: "600",
    marginTop: 8,
    marginBottom: 8,
  },
  greenBox: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    backgroundColor: "#3AE199",
    padding: 16,
    borderRadius: 8,
    marginBottom: 26,
  },
  homeBtnsList: {
    display: "none",
    marginBottom:50,
    paddingBottom:50,
    height:100,

  },
  whiteTxt: {
    color: colors.white,
    fontSize: 15,
    fontWeight: "600",
  },
  lidBtnWrapper: {
    display: "flex",
    flexDirection: "row",
  },
  lidBtnClose: {
    marginRight: 8,
  },
  lidBtnOpen: {
    marginLeft: 8,
  },
  statusIcons: {
    width: 26,
    height: 26,
    marginRight: 8,
  },
});
