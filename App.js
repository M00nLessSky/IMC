import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  function calcularIMC() {
    const pesoNum = parseFloat(peso);
    const alturaNum = parseFloat(altura) / 100;
    if (!pesoNum || !alturaNum) {
      alert('Por favor, insira valores válidos!');
      return;
    }
    const resultado = pesoNum / (alturaNum * alturaNum);
    setImc(resultado.toFixed(2));
    
    if (resultado < 18.5) {
      setClassificacao("Abaixo do peso");
    }
    else if (resultado >= 18.5 && resultado <= 24.9) {
      setClassificacao("Peso saudável")
    }
    else if (resultado >= 25 && resultado <=29.9){
      setClassificacao("Sobrepeso")
    }
    else {
      setClassificacao("Obesidade")
    }
    
  }

  return (
    <View style={styles.container}>
      <Image source={require('./assets/logo.png')}
      style={{ width: 200, height: 200, marginBottom: 20 }}
      ></Image>
      <Text style={styles.titulo}>Calculadora de IMC</Text>
      <TextInput
        style={styles.input}
        placeholder='Peso (kg)'
        keyboardType='numeric'
        value={peso}
        onChangeText={setPeso}
      />
      <TextInput
        style={styles.input}
        placeholder='Altura (cm)'
        keyboardType='numeric'
        value={altura}
        onChangeText={setAltura}
      />
      <Button title='Calcular' onPress={calcularIMC} />
      {imc && (
        <Text style={styles.resultado}>IMC: {imc} - {classificacao}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 20 
  },
  titulo: { 
    fontSize: 24, 
    fontWeight: 'bold', 
    marginBottom: 20 
  },
  input: 
  { width: '80%', 
    height: 40, 
    borderWidth: 1, 
    borderColor: '#ccc', 
    marginBottom: 10, 
    padding: 10, 
    borderRadius: 5 
  },
  resultado: { 
    marginTop: 20, 
    fontSize: 18, 
    fontWeight: 'bold' 
  }
});