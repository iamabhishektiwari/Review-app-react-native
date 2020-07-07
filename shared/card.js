import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function Card(props) {
  return (
    <View style={styles.Card}>
      <View style={styles.cardComponent}>{props.children}</View>
    </View>
  );
}

const styles = StyleSheet.create({
  Card: {
    borderRadius: 6,
    elevation: 3,
    backgroundColor: "#fff",
    shadowOffset: { width: 1, height: 1 },
    shadowColor: "#333",
    shadowOpacity: 0.3,
    shadowRadius: 2,
    marginHorizontal: 4,
    marginVertical: 4,
  },
  cardComponent: {
    marginHorizontal: 18,
    marginVertical: 10,
  },
});
