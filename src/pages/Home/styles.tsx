import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
  background-color: #f0f0f5;
`;
export const Title = styled.Text`
  font-size: 38px;
  line-height: 56px;
  font-family: 'Roboto-Bold';
  font-weight: bold;
`;

export const SearchContainer = styled.View`
  margin-top: 32px;
`;

export const SearchField = styled.TextInput`
  height: 64px;
  padding: 0px 24px;
  color: #3a3a3a;
  border-radius: 5px;
  border: 2px solid #ffffff;
  background-color: #ffffff;
  font-size: 16px;
  font-family: 'Roboto-Bold';
`;

export const SearchButton = styled.TouchableOpacity`
  background-color: #04d361;
  height: 64px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 16px;
`;

export const SearchButtonText = styled.Text`
  color: #ffffff;
  font-weight: bold;
  font-size: 16px;
  font-family: 'Roboto-Regular';
`;
