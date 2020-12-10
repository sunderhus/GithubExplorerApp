import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/FontAwesome';

export const HeaderContainer = styled.View`
  justify-content: space-between;
  align-items: center;
  flex-flow: row;
  padding: 20px 0px;
`;

export const GoBackContainer = styled.View`
  flex-flow: row;
  align-items: center;
`;

export const GoBackButton = styled.TouchableOpacity`
  margin-left: 8px;
  flex-flow: row;
  align-items: center;
  justify-content: center;
`;
export const GoBackIcon = styled(Icon)`
  margin-right: 10px;
`;
export const GoBackText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgb(168, 168, 179);
`;
