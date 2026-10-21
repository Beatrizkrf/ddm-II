import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#101D31',
  },

  topo: {
    alignItems: 'center',
    paddingVertical: 20,
    marginBottom: 14,
  },

  rosa: {
    fontSize: 55,
  },

  kicker: {
    color: '#E5C46A',
    letterSpacing: 3,
    fontSize: 11,
    marginTop: 9,
  },

  titulo: {
    color: '#F8E9BE',
    fontSize: 31,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },

  subtitulo: {
    color: '#D4D4CE',
    textAlign: 'center',
    marginTop: 9,
    lineHeight: 22,
  },

  bloco: {
    backgroundColor: '#F7F0DF',
    borderRadius: 15,
    padding: 18,
    marginBottom: 13,
    borderLeftWidth: 4,
    borderLeftColor: '#C7A64D',
  },

  numero: {
    color: '#8E2438',
    fontSize: 11,
    fontWeight: 'bold',
    letterSpacing: 1.5,
    marginBottom: 9,
  },

  texto: {
    color: '#343B40',
    fontSize: 15,
    lineHeight: 24,
  },

  nota: {
    color: '#E5C46A',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 22,
    marginTop: 10,
  },
});

export default styles;