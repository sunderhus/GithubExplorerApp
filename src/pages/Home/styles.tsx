import {FlatList} from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import styled from 'styled-components/native';
import {IRepository} from '.';

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

export const Error = styled.Text`
  color: #c72828;
  margin: 8px 0px;
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
export const RepositoriesList = styled(
  FlatList as new () => FlatList<IRepository>,
)`
  margin-top: 16px;
  background-color: #ffffff;
  max-height: 330px;
  border-radius: 5px;
  margin-bottom: 16px;
`;

export const RepositoryContainer = styled.TouchableOpacity`
  padding: 16px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
export const RepositoryTextContainer = styled.ScrollView`
  margin-left: 16px;
  max-width: 65%;
  max-height: 84px;
`;

export const RepositoryName = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Bold';
`;

export const RepositoryDescription = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Normal';
  max-width: 200px;
  color: #a8a8b3;
`;

export const RepositoryImage = styled.Image`
  border-radius: 72px;
  height: 72px;
  width: 72px;
`;

export const Chevron = styled(Feather)`
  margin-left: 10px;
  color: #a8a8b3;
`;

export const Separator = styled.View`
  height: 8px;
  background-color: #f0f0f5;
`;
