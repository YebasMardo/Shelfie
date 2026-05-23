import { StyleSheet, Text, View, useColorScheme } from "react-native";
import { Colors } from "../constants/Colors";
import React from "react";
import { Link } from "expo-router";
import ThemedView from "../components/ThemedView";
import ThemedText from "../components/ThemedText";
import Spacer from "../components/Spacer";

export default function About() {
  const colorScheme = useColorScheme()
  const theme = Colors[colorScheme] ?? Colors.light
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={styles.title} title={true}>About</ThemedText>
      <Spacer height={10} />
      <Link href={'/'} style={styles.link}><ThemedText>Back home</ThemedText></Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  },
  link: {
    borderBottomWidth: 1
  }
});
