import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import styles from './Estilo';

export default function Historia() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.topo}>
        <Text style={styles.rosa}>🌹</Text>
        <Text style={styles.kicker}>ERA UMA VEZ...</Text>
        <Text style={styles.titulo}>A Bela e a Fera</Text>
        <Text style={styles.subtitulo}>Uma história que floresce para além das aparências.</Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.numero}>I  ·  O CASTELO</Text>
        <Text style={styles.texto}>
          Bela era uma jovem curiosa e apaixonada por livros. Um dia, para salvar seu pai, ela chegou a um castelo misterioso, onde vivia uma Fera sob o efeito de um poderoso encantamento.
        </Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.numero}>II  ·  A ROSA ENCANTADA</Text>
        <Text style={styles.texto}>
          Uma rosa mágica marcava o tempo que restava para a Fera aprender a amar e também ser amada. No castelo, Bela conheceu objetos encantados e descobriu que havia muito mais naquela criatura do que sua aparência revelava.
        </Text>
      </View>

      <View style={styles.bloco}>
        <Text style={styles.numero}>III  ·  A MAGIA DO CORAÇÃO</Text>
        <Text style={styles.texto}>
          Com convivência, respeito e compreensão, Bela e a Fera aprenderam a enxergar um ao outro de verdade. A história lembra que a bondade e as escolhas podem transformar até os destinos mais sombrios.
        </Text>
      </View>
      
      <Text style={styles.nota}>Fim? Nos contos encantados, a magia continua em quem os lê. ✨</Text>
    </ScrollView>
  );
}
