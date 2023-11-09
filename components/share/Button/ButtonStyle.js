import { StyleSheet } from 'react-native';
import { colors } from '../../../styles/constants';

export default StyleSheet.create({
  primaryBtn: {
    minWidth: 80,
    // height: 50,
    padding: 12,
    borderRadius: 8,
    backgroundColor: colors.primary,
    fontSize:12,
    color:'red',
  },
  buttonText: {
    backgroundColor: colors.black,
  }, 
  primaryBtnText: {
    color: colors.white,
    textAlign: 'center',
    fontSize: 14,
    fontWeight:'700',
  },
  button: {
    backgroundColor: colors.black,
  },
  buttonText: {
    backgroundColor: colors.black,
  },
  iconBtnLg:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width:92,
    height:92,
    borderRadius: 8,
    backgroundColor:colors.header1
  },
  iconBtnMD:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width:50,
    height:50,
    borderRadius: 8,
    backgroundColor:colors.header1
  },
  iconBtnSM:{
    display:'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent:'center',
    width:30,
    height:30,
    borderRadius: 8,
    backgroundColor:colors.header1
  },
});
