import React, { useState } from 'react';
import { StyleSheet, StatusBar, SafeAreaView, SafeViewAndroid, View, Image, Text, TouchableOpacity, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useFonts, Poppins_700Bold } from '@expo-google-fonts/poppins';
import AppLoading from 'expo-app-loading';
import Button from './components/Button';

export default function App() {

  const salvar = () => {

  }
  const [sono] = useState([])
  const [sonoSelect, setSonoSelect] = useState([])
  const [inicio, setInicio] = useState(null)
  const [fim, setFim] = useState(null)
  const [showElement, setShowElement] = useState(false)
  const showOrHide = () => setShowElement(true)
  const [fontsLoaded] = useFonts({
    Poppins_700Bold,
  })

  if (!fontsLoaded) {
    <AppLoading />
  }

  return (
    <SafeAreaView>
      <StatusBar
        barStyle="dark-content"
        hidden={false}
        backgroundColor="#fff"
        translucent={false}
        networkActivityIndicatorVisible={true}
      />
      <View style={styles.header}>
        <Image
          source={require('./assets/minime.png')}
          style={{ width: 120, height: 120 }}
          resizeMode="contain"
        />
        <Image
          source={require('./assets/menu.png')}
          style={{ width: 60, height: 60 }}
          resizeMode="contain"
        />
      </View>

      <View style={styles.container}>
        <View style={styles.image}>
          <Image
            source={require('./assets/sono.png')}
            style={{ width: 500, height: 280 }}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={styles.main}>

        <View style={styles.registro}>
          <TouchableOpacity activeOpacity={.5} onPress={() => setShowElement(!showElement)}>
            <Image
              source={require('./assets/novoregistro.png')}
              style={{ width: 70, height: 100 }}
              resizeMode="contain"
            />
          </TouchableOpacity>
          <Text onPress={() => setShowElement(!showElement)} style={styles.tittlestext}>NOVO REGISTRO</Text>
        </View>

        {showElement ?

          <View style={styles.formulario}>
            <View style={styles.campos}>
            <TextInput style={[styles.campo, styles.placeholder]}
              placeholder="INÍCIO"
              onChangeText={value => setInicio(value)}
            />

            <TextInput style={[styles.campo, styles.placeholder]}
              placeholder="FIM"
              onChangeText={value => setFim(value)}
            />
            </View>

            <View style={styles.lista}>

              <Text style={styles.text}>O BEBÊ ACORDOU:</Text>


              <Picker
                style={styles.picker}
                selectedValue={sonoSelect}
                onValueChange={(itemValue) =>
                  setSonoSelect(itemValue)
                }>
                <Picker.Item style={styles.item} label="Muito" value="Muito" />
                <Picker.Item style={styles.item} label="Pouco" value="Pouco" />
                <Picker.Item style={styles.item} label="Não acordou" value="Não acordou" />
              </Picker>
            </View>

            <Button
              style={styles.textbutton} labelButton="SALVAR" onpress={salvar}
            />
          </View>

          : null}
        <View style={styles.cronometro}>
          <Image
            source={require('./assets/cronometro.png')}
            style={{ width: 70, height: 100 }}
            resizeMode="contain"
          />
          <Text style={styles.tittlestext}>CRONOMETRAR</Text>
        </View>
      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  header: {
    backgroundColor: '#fff',
    height: 75,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: "#000",
    justifyContent: 'space-between',
    paddingLeft: 12,
    paddingRight: 12,

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.40,
    shadowRadius: 2,
    elevation: 2,
  },

  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 250,
    flexDirection: 'row',
    backgroundColor: '#BFDBEC',
    borderBottomLeftRadius: 200,
    borderBottomRightRadius: 200,
  },

  main: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },

  registro: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  cronometro: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  tittlestext: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 30,
    margin: 20,
    color: '#99AFBD',
  },

  campos: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  campo: {
    width: 100,
    borderBottomColor: '#9A8FAF',
    borderBottomWidth: 2,
    borderBottomEndRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  text: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 25,
    margin: 20,
    color: '#99AFBD',
  },

  item: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    margin: 20,
    color: '#9A8FAF',
  },

  lista: {
    flexDirection: 'row'
  },

  picker: {
    width: 120,
    borderBottomColor: '#9A8FAF',
    borderBottomWidth: 2,
    borderBottomEndRadius: 3,
    borderBottomRightRadius: 3,
    borderBottomLeftRadius: 3,
  },

  placeholder: {
    fontFamily: 'Poppins_700Bold',
    fontSize: 20,
    margin: 20,
    color: '#99AFBD',
  },

  formulario: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
