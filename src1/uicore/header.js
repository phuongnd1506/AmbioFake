import { TouchableOpacity } from "react-native";
import {
  Image,

  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,

  useColorScheme,
  View,
} from 'react-native';
import SvgComponent from "../asset/SVG/SvgComponent";


function Header({textHeader, onBackPress }) {
  return (
    <View>
      <View style={styles.header}>

        <SvgComponent style={{ width: 100, height: 100, color: '#fff', fontWeight: 'bold' }}
          onPress={onBackPress}
        />


        <Text style={styles.textHeader}>{textHeader}</Text>
        <Text></Text>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({

  header: {
    height: 54,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 14,
    // marginBottom: 706

  },
  backArrow: {
    color: '#fff',


    fontWeight: 'bold',
    fontSize: 40
  },
  textHeader: {
    color: '#fff',
    marginRight: 25,
    fontSize: 16,
    fontWeight: '600',

  },



});

export default Header;