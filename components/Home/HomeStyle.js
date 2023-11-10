import { StyleSheet } from "react-native";
import { colors } from "../../styles/constants";

export default StyleSheet.create({
  mainWrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    // backgroundColor: colors.backgroundColor2,
    padding: 16,
    paddingBottom: 50,
  },
  subTitleTxt: {
    fontSize: 12,
    color: colors.backgroundColor1,
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
    // backgroundColor: "#3AE199",
    padding: 16,
    borderRadius: 8,
    marginBottom: 26,

    ...Platform.select({
      ios: {
        shadowColor: "blue",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        shadowColor: "green",
        elevation:10,
      },
    }),
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
  greenboxShadow:{
    ...Platform.select({
      ios: {
        shadowColor: "black",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
      },
      android: {
        elevation: 8,
      },
    }),
  }
});
