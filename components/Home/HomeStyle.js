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
    fontSize: 16,
    color: '#ffffff',
    fontWeight: "600",
    marginTop: 16,
    marginBottom:16,
  },
  stripRuleTop:{
    width:260,
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6d457',
    borderStyle: 'solid',
    padding: 10,
    position: 'absolute',
    right: 11,
    top: 7,
  },

  stripRuleBottom:{
    width:260,
    borderBottomWidth: 1,
    borderBottomColor: '#c6c6d457',
    borderStyle: 'solid',
    padding: 10,
    position: 'absolute',
    right: 5,
    top: -7,
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
        shadowRadius: 20,
      },
      android: {
        shadowColor: "black",
        elevation:20,
      },
    }),
  },
  homeBtnsList: {
    display: "none",
    marginBottom:50,
    paddingBottom:50,
    height:100,

  },
  servicesTextWrapper:{
    marginBottom: 20,
    marginTop:5,
  },
  servicesTex:{
      fontSize: 16,
      fontWeight:'600',
      color: '#ffffff',
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
