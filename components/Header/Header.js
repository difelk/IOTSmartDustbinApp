import React from "react";
import { View, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import HeaderStyle from "./HeaderStyle";
import MyButton from "../share/Button/Button";

export default function Header() {
  const navigation = useNavigation();
  const handleOnClick = (screenName) => {
    // console.log(value);
    navigation.navigate(screenName);
  };

  return (
    <View style={HeaderStyle.headerWrapper}>
      <View style={HeaderStyle.profileDetails}>
        <View style={HeaderStyle.profilePicSection}></View>
        <View style={HeaderStyle.profilePicTextSection}>
          <Text style={HeaderStyle.name}>Dilshan Fernando</Text>
          <Text style={HeaderStyle.title}>Admin</Text>
        </View>
      </View>
      <View>
        <View>
          <MyButton
            onPress={() => handleOnClick('EDITPROFILE')}
            buttonText={"View Profile"}
            buttonType={"PRIMARY"}
          />
        </View>
      </View>
    </View>
  );
}
