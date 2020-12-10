import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {Image} from 'react-native';
import logoImage from '../../assets/logo.png';
import {
  GoBackButton,
  GoBackContainer,
  GoBackIcon,
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
          <GoBackButton onPress={handleGoBack}>
            <GoBackIcon name="chevron-left" size={14} color="#3d3d4d" />
            <GoBackText>Voltar</GoBackText>
          </GoBackButton>
        </GoBackContainer>
      )}
    </HeaderContainer>
  );
};

export default Header;
