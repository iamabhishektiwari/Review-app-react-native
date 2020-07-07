import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { globalStyles } from "../styles/global";
import { FlatList, TouchableOpacity } from "react-native-gesture-handler";
import Card from "../shared/card";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    { title: "Mai hoon na", rating: 3, body: "fuck all movie", key: "1" },
    {
      title: "Jaani dusman",
      rating: 4,
      body: "best movie of all time",
      key: "2",
    },
    { title: "Naagin", rating: 2, body: "fuck all movie", key: "3" },
    { title: "ABCD", rating: 3, body: "Average", key: "4" },
  ]);

  const navigateHandler = () => {
    //navigation.navigate("ReviewDetails");
    navigation.push("ReviewDetails");
  };
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Card>
              <Text style={globalStyles.titleText}>{item.title}</Text>
            </Card>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
