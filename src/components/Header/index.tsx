import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import logoImage from '../../assets/logo.png';
import {
  GoBackButton,
  GoBackContainer,
  GoBackText,
  HeaderContainer,
} from './styles';

interface IHeaderProps {
  showGoBack?: boolean;
}

const Header: React.FC<IHeaderProps> = ({showGoBack}) => {
  const navigation = useNavigation();
  const handleGoBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  return (
    <HeaderContainer>
      <Image source={logoImage} />
      {showGoBack && (
        <GoBackContainer>
          <Icon name="chevron-left" size={14} color="#3d3d4d" />
          <GoBackButton onPress={handleGoBack}>
            <GoBackText>Voltar</GoBackText>
          </GoBackButton>
        </GoBackContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
