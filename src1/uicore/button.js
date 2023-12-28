
import {
  Image,

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';
import { ActivityIndicator, Keyboard } from 'react-native';
import PropTypes from 'prop-types';
import { useState } from 'react';

export let loadingButton = () => {}

function Button({ textButton, onPresss }) {
  const [loading, setLoading] = useState(false)
  loadingButton = setLoading
  return (
      loading ? <ActivityIndicator /> :

      <View style={styles.container}>

        <TouchableOpacity style={styles.button} onPress={() => { onPresss(), Keyboard.dismiss() }}>
          <Text style={styles.textButton}>{textButton}</Text>

        </TouchableOpacity>
      </View>
  )
}

Button.propTypes = {
  textButton: PropTypes.string,
  onPresss: PropTypes.func
}


const styles = StyleSheet.create({
  container: {
    marginTop: 30
  },
  button: {
    height: 50,
    width: 240,
    borderRadius: 5,
    backgroundColor: '#008F33',
    marginTop: 4,
    justifyContent: 'center',
    alignItems: 'center',

  },
  textButton: {
    color: '#fff',
    fontWeight: '500'
  },



});

export default Button;