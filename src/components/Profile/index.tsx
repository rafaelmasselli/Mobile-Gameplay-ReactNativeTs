import React from "react";
import { View, Text } from "react-native";
import { styles } from "./style";

export function Profile() {
  <View style={styles.container}>
    <View>
      <View style={styles.user}>
        <Text style={styles.greeting}>Ola, </Text>
        <Text style={styles.username}>Rafael</Text>
      </View>
      <Text style={styles.message}>Hoje e dia de vitoria</Text>
    </View>
  </View>;
}
