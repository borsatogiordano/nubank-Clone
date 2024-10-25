import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "../ThemeContext";

const footerItems = [
  {
    id: "1",
    icon: require("../images/icone-pix.png"),
    label: "Pix",
    onPress: (navigation, accountBalance, setAccountBalance) =>
      navigation.navigate("PixScreen", { accountBalance, setAccountBalance }),
  },
  {
    id: "2",
    icon: require("../images/icone-barcode.png"),
    label: "Pagar",
  
  },
  {
    id: "3",
    icon: require("../images/icone-amigos.png"),
    label: "Indicar amigos",
  
  },
  {
    id: "4",
    icon: require("../images/icon-transferencia.png"),
    label: "Transferir",
  },
];

export default function HomeLogada() {
  const { isDarkMode, toggleTheme } = useTheme();
  const [showValues, setShowValues] = useState(false);
  const [accountBalance, setAccountBalance] = useState(575.67);
  const navigation = useNavigation();

  const toggleValues = () => {
    setShowValues(!showValues);
  };

  const renderTabItem = ({ item }) => (
    <TouchableOpacity
      style={[styles.tabItem, isDarkMode && styles.tabItemDark]}
      onPress={() => item.onPress(navigation, accountBalance, setAccountBalance)}
    >
      <Image source={item.icon} />
      <Text style={[styles.itemFooterText, isDarkMode && styles.itemFooterTextDark]}>{item.label}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.container]}>
      <View style={styles.row}>
        <Text style={[styles.boasVindas]}>
          Olá, Giordano
        </Text>
        <View style={styles.containerIcones}>
          <TouchableOpacity style={styles.elipseIcone} onPress={toggleValues}>
            <Ionicons
              name={showValues ? "eye-off-outline" : "eye-outline"}
              size={25}
              color="white"
            />
          </TouchableOpacity>
          <TouchableOpacity style={styles.elipseIcone} onPress={toggleTheme}>
            <Ionicons name="settings-outline" size={27} color="white" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={[ styles.containerContas, isDarkMode && styles.containerContasDark]}>
        <View style={styles.tituloContas}>
          <Image source={require("../images/icone-cartao.png")} />
          <Text style={[styles.textoConta2, isDarkMode && styles.textoConta2Dark]}>
            Cartão de Crédito
          </Text>
        </View>
        <Text style={[styles.textoConta, isDarkMode && styles.textoContaDark]}>
          Fatura atual
        </Text>
        {showValues ? (
          <Text style={[styles.valorConta, isDarkMode && styles.valorContaDark]}>R$ 1.234,56</Text>
        ) : (
          <View style={styles.censurado1}></View>
        )}

        <TouchableOpacity style={styles.pagarButton} onPress={() => {}}>
          <Text style={styles.pagarButtonText}>PAGAR</Text>
        </TouchableOpacity>
      </View>

      <View style={[ styles.containerContas, isDarkMode && styles.containerContasDark]}>
        <View style={styles.tituloContas}>
          <Image source={require("../images/icone-moedinhas.png")} />
          <Text style={[styles.textoConta2, isDarkMode && styles.textoConta2Dark]}>
            Conta
          </Text>
        </View>
        <Text style={[styles.textoConta, isDarkMode && styles.textoContaDark]}>
          Saldo disponível
        </Text>
        {showValues ? (
          <Text style={[styles.valorConta, isDarkMode && styles.valorContaDark]}>
            R$ {accountBalance.toFixed(2)}
          </Text>
        ) : (
          <View style={styles.censurado2}></View>
        )}
      </View>

      <View style={styles.containerFooter}>
        <FlatList
          data={footerItems}
          renderItem={renderTabItem}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.tabContainer}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#830AD1",
    paddingTop: 60,
  },
  containerIcones: {
      flexDirection: "row",
    },
    elipseIcone: {
        justifyContent: "center",
        alignItems: "center",
        width: 48,
        height: 48,
        backgroundColor: "#8E31D0",
        borderRadius: 100,
        marginHorizontal: 5,
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "90%",
    },
    boasVindas: {
        width: 200,
        height: 27,
        fontStyle: "normal",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 27,
        letterSpacing: 2,
        color: "#fff",
    },
    boasVindasDark: {
        color: "#fff",
    },
  containerContas: {
      width: 329,
      height: 200,
      backgroundColor: "#FFFFFF",
      borderRadius: 4,
      justifyContent: "center",
      alignItems: "flex-start",
      paddingLeft: 25,
    },
    containerContasDark: {
      backgroundColor: "#121212",
    },
    containerFooter: {
        flexDirection: "row",
  },
  tabContainer: {
    paddingLeft: 5,
    paddingRight: 20,
  },
  tabItem: {
    width: 85,
    height: 85,
    backgroundColor: "#8E31D0",
    borderRadius: 3,
    marginLeft: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
  
  itemFooterText: {
    fontSize: 13,
    color: "#fff",
  },
  itemFooterTextDark: {
    color: "#ffffff",
  },
  censurado1: {
    backgroundColor: "#F2F2F2",
    width: 282,
    height: 49,
  },
  censurado2: {
    backgroundColor: "#F2F2F2",
    width: 282,
    height: 29,
  },
  textoConta: {
    width: 150,
    height: 17,
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: 14,
    lineHeight: 17,
    letterSpacing: 1,
    color: "rgba(0, 0, 0, .6)",
    marginVertical: 15,
  },
  textoContaDark: {
    color: "#D3D3D3",
  },
  textoConta2: {
    fontWeight: "500",
    fontSize: 16,
    lineHeight: 17,
    letterSpacing: 0.5,
    color: "rgba(0, 0, 0, .6)",
    marginLeft: 15,
  },
  textoConta2Dark: {
    color: "#D3D3D3",
  },
  tituloContas: {
    flexDirection: "row",
  },
  valorConta: {
    fontSize: 25,
    fontWeight: "bold",
    color: "black",
  },
  valorContaDark: {
    color: "#ffffff",
  },
  pagarButton: {
    backgroundColor: "#8E31D0",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignItems: "center",
  },
  pagarButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
});