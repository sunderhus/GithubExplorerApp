import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Linking, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
const heartBiting = {
  0: {
    opacity: 1,
    scale: 1,
  },
  0.25: {
    opacity: 1,
    scale: 1.15,
  },
  0.5: {
    opacity: 1,
    scale: 1,
  },
  0.75: {
    opacity: 1,
    scale: 1.15,
  },
  1: {
    opacity: 1,
    scale: 1,
  },
};
const Footer: React.FC = () => {
  const navigator = useNavigation();
  const AnimatedLinkedinIcon = Animatable.createAnimatableComponent(Feather);

  const handleGoToLinkedin = useCallback(() => {
    Linking.openURL('https://www.linkedin.com/in/matheus-sunderhus/');
  }, [Linking]);
  return (
    <View>
      <TouchableOpacity style={styles.container} onPress={handleGoToLinkedin}>
        <AnimatedLinkedinIcon
          animation={heartBiting}
          duration={3000}
          iterationCount={Infinity}
          useNativeDriver
          easing="ease-in-out"
          name="linkedin"
          color="#2867b2"
          size={16}
          style={styles.icon}
        />
        <Text style={{color: '#3d3d4d', fontFamily: 'Roboto_Regular'}}>
          Matheus Sunderhus
        </Text>
      </TouchableOpacity>
      <View style={styles.container}>
        <Text style={{color: '#3d3d4d', fontFamily: 'Roboto_Regular'}}>
          Full stack - Interprocess
        </Text>
      </View>
    </View>
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
