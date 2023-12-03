import React from 'react';
import { View, StyleSheet } from 'react-native';
import { LineChart } from 'react-native-chart-kit';


export default function CustomeLineCharts({data, width, height, yLabel, borderRadius, backgroundGFrom, backgroundGTo}){

    return (
      <View style={styles.container}>
        <LineChart
          data={data}
          width={width ?? 300}
          height={height ?? 220}
          yAxisLabel={yLabel}
          chartConfig={{
            backgroundGradientFrom: '#ffffff',
            backgroundGradientTo: '#ffffff',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // axis and labels color
            style: {
              borderRadius:borderRadius ?? 16,
            },
          }}
        />
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  