import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import ButtonStyle from './ButtonStyle';

const MyButton = ({ onPress, buttonText, buttonType }) => {
  const buttonStyles = buttonType === 'PRIMARY' ? ButtonStyle.primaryBtn : ButtonStyle.button;
  const textStyles = buttonType === 'PRIMARY' ? ButtonStyle.primaryBtnText : ButtonStyle.buttonText;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={buttonStyles}>
        <Text style={ButtonStyle.primaryBtnText}>{buttonText}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MyButton;
