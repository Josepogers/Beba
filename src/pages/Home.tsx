import { StatusBar } from "expo-status-bar";
import { useState, useEffect } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { Greeting } from "../components/Greeeting";
import { ModalNameQuestion } from "../components/ModalNameQuestion";

// import { Button } from '../components/button';
export default function Home() {
  const [consumo, setConsumo] = useState<number>(0);
  //const [humor, setHumor] = useState<string>('')
  function addAgua() {
    setConsumo(consumo + 1);
    console.log(consumo);
  }
  function removerAgua() {
    if (consumo > 0) {
      setConsumo(consumo - 1);
      console.log(consumo);
    }
  }
  return (
    <View style={styles.container}>
      <StatusBar style="dark" backgroundColor="" />
      <Greeting consumo={consumo} />
      <Text>Consumo: {consumo}L</Text>
      <Text>Seu objetivo é beber 2L</Text>
      <View style={{ rowGap: 20 }}>
        {/* <Button title="Adicionar" onPress={() => addAgua()} />
        <Button title="Remover" onPress={() => removerAgua()} /> */}
        <Button title="Beber" onPress={() => addAgua()} />
        <Button title="Remover" onPress={() => removerAgua()} />
      </View>
      <ModalNameQuestion />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  greeting: {
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
