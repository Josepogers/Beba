import { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import styled from "styled-components";

const smileIcon = require("../../assets/smile.png");
const sadIcon = require("../../assets/sad.png");

// const View = styled(View)({
//   flexDirection: "row",
//   justifyContent: "center",
//   alignItems: "center",
//   height: 90,
//   gap: 5,
// });

type GreetingProps = {
  consumo: number;
};

const Greeting = ({ consumo }: GreetingProps) => {
  return (
    <View>
      <TrocarHumor consumo={consumo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    height: 90,
    gap: 5,
  },
  icon: {
    height: 50,
    width: 50,
  },
});

const TrocarHumor = ({ consumo }: { consumo: number }) => {
  if (consumo >= 2 && consumo <= 3) {
    return (
      <View>
        <Text>Parabéns, você está mais saudável hoje</Text>
        <Image source={smileIcon} style={styles.icon} />
      </View>
    );
  }
  if (consumo < 2) {
    return (
      <View>
        <Text>Você precisa beber mais água!</Text>
        <Image source={sadIcon} style={styles.icon} />
      </View>
    );
  }
  return (
    <View>
      <Text>Você está bebendo muita agua!</Text>
      <Image source={sadIcon} style={styles.icon} />
    </View>
  );
};

export { Greeting };
