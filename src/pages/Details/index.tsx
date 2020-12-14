import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import Header from '../../components/Header';
import {useFavoriteRepository} from '../../hooks/repository';
import api from '../../service/api';
import {
  Container,
  DashBoard,
  Description,
  ImageRepository,
  IssueCard,
  IssuesContainer,
  IssuesList,
  IssueTitle,
  IssueUser,
  Name,
  Separator,
  Stat,
  StatLabel,
  StatNumber,
  StatsContainer,
  TextsWrapper,
} from './styles';

interface DetailsRouteProps {
  full_name: string;
}

interface IDetailsRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
  stargazers_count: number;
  forks_count: number;
  open_issues_count: number;
}
export interface IIssue {
  id: number;
  title: string;
  html_url: string;
  user: {
    login: string;
  };
}

const Details: React.FC = () => {
  const route = useRoute();
  const [issues, setIssues] = useState<IIssue[]>([]);
  const [repository, setRepository] = useState<null | IDetailsRepository>(null);
  const {favoritesRepositories} = useFavoriteRepository();

  const findRepositoryFromCachedRepositories = useCallback(
    (targetName) => {
      return favoritesRepositories.find(
        (cachedRepository) => cachedRepository.full_name === targetName,
      );
    },
    [favoritesRepositories],
  );

  const loadRepositoryDetails = useCallback(async (repositoryName) => {
    api.get(`/repos/${repositoryName}`).then((response) => {
      setRepository(response.data as IDetailsRepository);
    });
    api.get(`/repos/${repositoryName}/issues`).then((response) => {
      setIssues(response.data);
    });
  }, []);

  useEffect(() => {
    const {full_name} = route.params as DetailsRouteProps;

    async function loadRepository() {
      await loadRepositoryDetails(full_name);
    }

    loadRepository();
  }, [
    favoritesRepositories,
    findRepositoryFromCachedRepositories,
    loadRepositoryDetails,
    route.params,
  ]);

  const renderItem = useCallback(({title, user}: IIssue) => {
    return (
      <IssueCard>
        <IssueTitle>{title}</IssueTitle>
        <IssueUser>{user.login}</IssueUser>
      </IssueCard>
    );
  }, []);

  const renderSeparator = useMemo(() => {
    return <Separator />;
  }, []);

  return (
    <Container>
      <Header showGoBack />
      {!!repository && (
        <DashBoard>
          <ImageRepository
            source={{
              uri: `${repository.owner.avatar_url}`,
            }}
          />
          <TextsWrapper>
            <Name>{repository.full_name}</Name>
            <Description>{repository.description}</Description>
          </TextsWrapper>
          <StatsContainer
            horizontal
            alwaysBounceHorizontal
            contentContainerStyle={{
              justifyContent: 'space-evenly',
            }}>
            <Stat>
              <StatNumber>{repository.stargazers_count}</StatNumber>
              <StatLabel>Stars</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>{repository.forks_count}</StatNumber>
              <StatLabel>Forks</StatLabel>
            </Stat>
            <Stat>
              <StatNumber>{repository.open_issues_count}</StatNumber>
              <StatLabel>Issues</StatLabel>
            </Stat>
          </StatsContainer>
        </DashBoard>
      )}
      {!!issues && (
        <IssuesContainer horizontal showsHorizontalScrollIndicator={false}>
          <IssuesList
            data={issues}
            keyExtractor={({id}, index) => String(`${id}-${index}`)}
            renderItem={({item}) => renderItem(item)}
            ItemSeparatorComponent={() => renderSeparator}
          />
        </IssuesContainer>
      )}
    </Container>
  );
};
export default Details;
