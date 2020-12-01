import styled from 'styled-components/native';

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
  margin-left: 10px;
`;

export const GoBackText = styled.Text`
  font-size: 16px;
  font-weight: bold;
  color: rgb(168, 168, 179);
`;
