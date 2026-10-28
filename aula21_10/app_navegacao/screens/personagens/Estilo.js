import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingBottom: 30,
    backgroundColor: '#101D31',
  },

  rosa: {
    fontSize: 39,
    textAlign: 'center',
    marginTop: 8,
  },

  titulo: {
    color: '#F8E9BE',
    fontSize: 27,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 8,
  },

  subtitulo: {
    color: '#D4D4CE',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 9,
    marginBottom: 20,
  },

  card: {
    flexDirection: 'row',
    backgroundColor: '#F7F0DF',
    padding: 14,
    borderRadius: 16,
    marginBottom: 12,
    alignItems: 'center',
  },

  icone: {
    width: 58,
    height: 58,
    backgroundColor: '#E9DDBD',
    borderRadius: 29,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 13,
  },

  emoji: {
    fontSize: 30,
  },

  conteudo: {
    flex: 1,
  },

  nome: {
    color: '#23364A',
    fontSize: 18,
    fontWeight: 'bold',
  },

  papel: {
    color: '#8E2438',
    fontWeight: 'bold',
    fontSize: 12,
    marginTop: 2,
    marginBottom: 5,
  },

  descricao: {
    color: '#4E514F',
    lineHeight: 20,
    fontSize: 13,
  },

  rodape: {
    color: '#E5C46A',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 12,
  },
});

export default styles;