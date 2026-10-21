import React from 'react';
import { View, Text, Pressable, StyleSheet, ScrollView } from 'react-native';

import styles from './Estilo';

export default function Home() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.emoji}>🏰</Text>
        <Text style={styles.kicker}>SEJA BEM-VINDA</Text>
        <Text style={styles.titulo}>Um mundo de magia espera por você</Text>
        <Text style={styles.descricao}>
          Entre no castelo encantado e descubra uma história sobre coragem, gentileza e amor além das aparências.
        </Text>
        <Text style={styles.rosa}>🌹</Text>
      </View>

      <Text style={styles.secao}>Explore o conto</Text>
      <Pressable style={styles.card} onPress={() => navigation.navigate('História')}>
        <Text style={styles.cardIcone}>📖</Text>
        <View style={styles.cardTexto}>
          <Text style={styles.cardTitulo}>A história</Text>
          <Text style={styles.cardDescricao}>Descubra como começou a magia do castelo.</Text>
        </View>
        <Text style={styles.seta}>›</Text>
      </Pressable>

      <Pressable style={styles.card} onPress={() => navigation.navigate('Personagens')}>
        <Text style={styles.cardIcone}>✨</Text>
        <View style={styles.cardTexto}>
          <Text style={styles.cardTitulo}>Personagens</Text>
          <Text style={styles.cardDescricao}>Conheça os moradores mais inesquecíveis.</Text>
        </View>
        <Text style={styles.seta}>›</Text>
      </Pressable>

      <Text style={styles.rodape}>UM CLÁSSICO SOBRE OLHAR ALÉM DAS APARÊNCIAS</Text>
    </ScrollView>
  );
}


