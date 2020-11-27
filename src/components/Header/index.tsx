import React, {useCallback} from 'react';
import {Alert, Image, Text, View} from 'react-native';
import {
  GoBackButton,
  GoBackContainer,
  GoBackText,
  HeaderContainer,
} from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImage from '../../assets/logo.png';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface IHeaderProps {
  showGoBack?: boolean;
}

const Header: React.FC = () => {
  const handleGoBack = useCallback(() => {
    Alert.alert('voltar:)');
  }, []);

  return (
    <HeaderContainer>
      <Image source={logoImage} />
      <GoBackContainer>
        <Icon name="chevron-left" size={14} color="#3d3d4d" />
        <GoBackButton onPress={handleGoBack}>
          <GoBackText>Voltar</GoBackText>
        </GoBackButton>
      </GoBackContainer>
    </HeaderContainer>
  );
};

export default Header;
