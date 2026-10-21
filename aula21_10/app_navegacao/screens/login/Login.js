import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, Pressable, ScrollView } from 'react-native';

import styles from './Estilo';

export default function Login({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    navigation.replace('Home');
  }

  return (
    <View style={styles.container}>
    <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
      <Text style={styles.rosa}>🌹</Text>
      <Text style={styles.selo}>UM CONTO ENCANTADO</Text>
      <Text style={styles.titulo}>A Bela e a Fera</Text>
      <Text style={styles.subtitulo}>Entre em um mundo onde a magia mora no coração.</Text>

      <View style={styles.card}>
        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#9A958A"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#9A958A"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <Pressable style={styles.botao} onPress={entrar}>
          <Text style={styles.textoBotao}>ENTRAR NO CASTELO  ✦</Text>
        </Pressable>
        
      </View>
      <Text style={styles.rodape}>“A beleza está naquilo que aprendemos a amar.”</Text>
    </ScrollView>
      

    </View>
  );
}