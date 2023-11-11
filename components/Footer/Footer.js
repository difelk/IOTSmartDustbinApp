import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Footer() {
    return (
        <View style={styles.footer}>
          <Text>Home Icon</Text>
          <Text>Help</Text>
          <Text>bug</Text>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
        footer: {
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#4869EA',
          padding: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginLeft: 20,
          marginRight: 20,
          borderTopLeftRadius: 8,
          borderTopRightRadius: 8,
          ...Platform.select({
            android: {
              elevation: 8,
            },
            ios: {
              shadowColor: '#000',
              shadowOffset: { width: 0, height: 2 },
              shadowOpacity: 0.3,
              shadowRadius: 4,
            },
          }),
        },
      });