import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>
           A Bela e a Fera 
        </Text>

        <ScrollView style={styles.scroll}>

          <Text style={styles.text}>
            Era uma vez,  uma jovem chamada Bela, que era conhecida por sua beleza, inteligência e bondade. Ela vivia com seu pai e suas irmãs, mas sua família perdeu toda a riqueza e precisou se mudar para uma pequena casa no campo. 
            {'\n\n'}
            Um dia, o pai de Bela se perdeu em uma floresta e encontrou um castelo misterioso. Ao entrar, conheceu uma terrível Fera. Antes de ir embora, ele pegou uma rosa para Bela, mas a Fera ficou furiosa e exigiu que ele pagasse pelo que havia feito.
            {'\n\n'}
            Para salvar seu pai, Bela decidiu ficar no castelo no lugar dele. No começo, ela tinha muito medo da Fera, mas, com o passar do tempo, percebeu que ela não era tão cruel quanto parecia. A Fera era solitária e tinha um bom coração.
            {'\n\n'}
            Bela e a Fera começaram a conversar e passaram a se conhecer melhor. Aos poucos, tornaram-se amigos e depois perceberam que sentiam algo muito mais forte um pelo outro. Bela aprendeu a enxergar além da aparência da Fera, enquanto ela aprendeu a ser mais gentil e carinhosa.
            {'\n\n'}
            Quando Bela precisou voltar para casa, percebeu o quanto sentia falta da Fera. Então decidiu retornar ao castelo. Ao encontrá-la muito triste e fraca, Bela declarou seu amor.
            {'\n\n'}
            Nesse momento, a maldição que havia transformado a Fera foi quebrada, e ela se tornou novamente um príncipe. Bela descobriu que sua bondade e seu amor verdadeiro haviam conseguido enxergar a pessoa que existia por trás daquela aparência assustadora.
            {'\n\n'}
            No final, Bela e o príncipe ficaram juntos e viveram felizes. A história ensina que a verdadeira beleza está no coração e que não devemos julgar alguém apenas pela sua aparência.
          </Text>

        </ScrollView>

        <Text style={styles.question}>
           O que você achou da história?
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Escreva aqui..."
          placeholderTextColor="#8b7b99"
        />

        <View style={styles.button}>
          <Button
            title="Enviar"
            color="#8B5E83"
            onPress={() => {}}
          />
        </View>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#2d2340',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },

  card: {
    width: '100%',
    maxWidth: 500,
    backgroundColor: '#FFF8E7',
    borderRadius: 20,
    padding: 20,
    borderWidth: 3,
    borderColor: '#C9A227',
    elevation: 8,
  },

  title: {
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    color: '#7B3F61',
    marginBottom: 15,
  },

  scroll: {
    maxHeight: 420,
  },

  text: {
    fontSize: 16,
    lineHeight: 25,
    color: '#44384A',
    textAlign: 'justify',
  },

  question: {
    marginTop: 18,
    marginBottom: 8,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#7B3F61',
  },

  input: {
    height: 45,
    borderWidth: 1,
    borderColor: '#C9A227',
    borderRadius: 10,
    paddingHorizontal: 12,
    backgroundColor: '#FFFFFF',
    color: '#44384A',
    marginBottom: 10,
  },

  button: {
    borderRadius: 10,
    overflow: 'hidden',
  },

});