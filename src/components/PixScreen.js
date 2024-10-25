import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function PixScreen() {
  const [value, setValue] = useState('');
  const navigation = useNavigation();
  const route = useRoute();

  const { accountBalance = 0, setAccountBalance } = route.params || {};


  const handleWithdrawMoney = () => {
    const parsedValue = parseFloat(value);
    if (!isNaN(parsedValue)) {
      if (parsedValue > accountBalance) {
        alert("Saldo insuficiente para essa operação.");
      } else {
        setAccountBalance(prevBalance => prevBalance - parsedValue);
        navigation.goBack();
      }
    } else {
      alert("Por favor, insira um valor válido.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Adicionar ou Retirar Dinheiro via Pix</Text>
      
      <View style={styles.balanceContainer}>
        <Text style={styles.label}>Saldo disponível:</Text>
        <Text style={styles.balance}>R$ {accountBalance.toFixed(2)}</Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Digite o valor"
        placeholderTextColor="#ccc"
        keyboardType="numeric"
        value={value}
        onChangeText={setValue}
      />

      <View style={styles.buttonContainer}>
        
        <TouchableOpacity style={styles.button} onPress={handleWithdrawMoney}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    color: 'white',
  },
  balanceContainer: {
    marginBottom: 20,
  },
  label: {
    color: '#fff',
    fontSize: 16,
  },
  balance: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    width: '80%',
    padding: 10,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 5,
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: "white"
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '80%',
  },
  button: {
    backgroundColor: '#8E31D0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginHorizontal: 10,
    flex: 1,
    margin: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});