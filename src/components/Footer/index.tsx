import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';

const Footer: React.FC = () => {
  return (
    <TouchableOpacity style={styles.container}>
      <Feather style={styles.icon} name="linkedin" color="#2867b2" size={16} />
      <Text style={{color: '#3d3d4d', fontFamily: 'Roboto_Regular'}}>
        Matheus Sunderhus
      </Text>
    </TouchableOpacity>
  );
};

// exemplo de como usar a criação de estilos nativa do React Native.
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  icon: {
    marginRight: 10,
  },
});

export default Footer;
