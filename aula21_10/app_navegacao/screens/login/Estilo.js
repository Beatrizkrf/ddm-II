import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#101D31',
  },

  rosa: {
    fontSize: 66,
    textAlign: 'center',
    marginBottom: 6,
  },

  selo: {
    color: '#E5C46A',
    letterSpacing: 4,
    textAlign: 'center',
    fontSize: 11,
    marginBottom: 10,
  },

  titulo: {
    color: '#F8E9BE',
    fontSize: 34,
    fontWeight: 'bold',
    textAlign: 'center',
  },

  subtitulo: {
    color: '#D3D0C7',
    textAlign: 'center',
    lineHeight: 22,
    marginTop: 12,
    marginBottom: 25,
  },

  card: {
    backgroundColor: '#F7F0DF',
    padding: 22,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#D9B95F',
  },

  label: {
    color: '#24364A',
    fontWeight: 'bold',
    marginBottom: 7,
  },

  input: {
    backgroundColor: '#FFFDF7',
    color: '#24364A',
    borderWidth: 1,
    borderColor: '#D9CDAF',
    borderRadius: 10,
    height: 48,
    paddingHorizontal: 13,
    marginBottom: 17,
  },

  botao: {
    backgroundColor: '#8E2438',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 2,
  },

  textoBotao: {
    color: '#FFF4D5',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  rodape: {
    color: '#D9CDAF',
    textAlign: 'center',
    fontStyle: 'italic',
    marginTop: 24,
    lineHeight: 21,
  },
});
export default styles;