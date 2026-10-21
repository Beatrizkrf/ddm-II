import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

import styles from './Estilo';

const personagens = [
  { emoji: '🌻', nome: 'Bela', papel: 'A leitora corajosa', descricao: 'Inteligente, curiosa e gentil, não julga alguém apenas pela aparência.' },
  { emoji: '🦁', nome: 'Fera', papel: 'O príncipe encantado', descricao: 'Precisa aprender a ter empatia, controlar seu orgulho e demonstrar bondade.' },
  { emoji: '🕯️', nome: 'Lumière', papel: 'O castiçal', descricao: 'Elegante e animado, tenta manter a esperança viva dentro do castelo.' },
  { emoji: '🕰️', nome: 'Horloge', papel: 'O relógio', descricao: 'Organizado e cuidadoso, preocupa-se com as regras e com os outros moradores.' },
  { emoji: '🫖', nome: 'Madame Samovar', papel: 'A chaleira encantada', descricao: 'Carinhosa e acolhedora, oferece conselhos e conforto nos momentos difíceis.' },
];

export default function Personagens() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.rosa}>✨</Text>
      <Text style={styles.titulo}>Quem vive no castelo?</Text>
      <Text style={styles.subtitulo}>Cada personagem tem um papel especial nesta história.</Text>

      {personagens.map((p) => (
        <View style={styles.card} key={p.nome}>
          <View style={styles.icone}>
            <Text style={styles.emoji}>{p.emoji}</Text>
          </View>
          <View style={styles.conteudo}>
            <Text style={styles.nome}>{p.nome}</Text>
            <Text style={styles.papel}>{p.papel}</Text>
            <Text style={styles.descricao}>{p.descricao}</Text>
          </View>
        </View>
      ))}
      <Text style={styles.rodape}>A verdadeira magia está no coração. 🌹</Text>
    </ScrollView>
  );
}