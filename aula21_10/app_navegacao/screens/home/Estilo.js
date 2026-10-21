import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 32,
    backgroundColor: '#101D31',
    flexGrow: 1,
  },

  hero: { 
    backgroundColor: '#1A3048',
    borderRadius: 22,
    padding: 23,
    borderWidth: 1,
    borderColor: '#B99A4D',
    alignItems: 'center',
    marginBottom: 26,
  },

  emoji: {
    fontSize: 52,
    marginBottom: 8,
  },

  kicker: {
    color: '#E5C46A',
    letterSpacing: 3,
    fontSize: 11,
    marginBottom: 10,
  },

  titulo: {
    color: '#F8E9BE',
    fontSize: 27,
    lineHeight: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  descricao: {
    color: '#D6D7D5',
    textAlign: 'center',
    lineHeight: 23,
    marginTop: 13,
  },

  rosa: {
    fontSize: 32,
    marginTop: 14,
  },

  secao: {
    color: '#F8E9BE',
    fontSize: 21,
    fontWeight: 'bold',
    marginBottom: 13,
  },

  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F0DF',
    padding: 16,
    borderRadius: 15,
    marginBottom: 12,
  },

  cardIcone: {
    fontSize: 29,
    marginRight: 13,
  },

  cardTexto: {
    flex: 1,
  },

  cardTitulo: {
    color: '#23364A',
    fontSize: 17,
    fontWeight: 'bold',
    marginBottom: 4,
  },

  cardDescricao: {
    color: '#5B5A54',
    lineHeight: 19,
  },

  seta: {
    color: '#8E2438',
    fontSize: 30,
    paddingLeft: 8,
  },

  rodape: {
    color: '#BDA96D',
    textAlign: 'center',
    letterSpacing: 1.4,
    fontSize: 9,
    marginTop: 18,
  },
});

export default styles;