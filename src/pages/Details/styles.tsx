import {FlatList} from 'react-native';
import styled from 'styled-components/native';
import {IIssue} from '.';

export const Container = styled.ScrollView`
  flex: 1;
  padding: 0px 20px;
  background-color: #f0f0f5;
`;
export const DashBoard = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;
export const TextsWrapper = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const ImageRepository = styled.Image`
  height: 100px;
  width: 100px;
  border-radius: 100px;
`;

export const Name = styled.Text`
  text-align: center;
  margin-top: 8px;
  font-size: 24px;
  color: #3a3a3a;
  font-family: 'Roboto-Bold';
`;
export const Description = styled(Name)`
  font-size: 18px;
  color: #777;
  font-family: 'Roboto-Regular';
`;

export const StatsContainer = styled.ScrollView`
  margin-top: 24px;
  flex: 1;
`;

export const Stat = styled.View`
  justify-content: center;
  align-items: center;
  padding: 16px;
`;

export const StatNumber = styled.Text`
  font-size: 36px;
  color: #3a3a3a;
  font-family: 'Roboto-Bold';
`;
export const StatLabel = styled.Text`
  font-size: 16px;
  color: #777;
  font-family: 'Roboto-Regular';
`;

export const IssuesContainer = styled.ScrollView`
  margin-top: 32px;
`;

export const IssuesList = styled(FlatList as new () => FlatList<IIssue>)`
  margin-top: 16px;
  max-height: 330px;
  border-radius: 5px;
  margin-bottom: 16px;
  height: 310px;
`;
export const Separator = styled.View`
  height: 8px;
  background-color: #f0f0f5;
`;

export const IssueCard = styled.View`
  padding: 16px;
  background-color: #ffffff;
  width: 100%;
`;

export const IssueTitle = styled.Text`
  font-size: 16px;
  flex: 1;
  max-width: 100%;
  font-family: 'Roboto-Bold';
`;
export const IssueUser = styled.Text`
  font-size: 16px;
  font-family: 'Roboto-Normal';
  max-width: 200px;
  color: #a8a8b3;
`;
