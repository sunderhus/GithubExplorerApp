import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RepositoryCard from '../../components/RepositoryCard';
import api from '../../service/api';
import {
  Chevron,
  Container,
  Error,
  RepositoriesList,
  SearchButton,
  SearchButtonText,
  SearchContainer,
  SearchField,
  Separator,
  Title,
} from './styles';

export interface IRepository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

const Home: React.FC = () => {
  const [searchText, setSearchText] = useState('');
  const [errorFeedback, setErrorFeedback] = useState('');
  const [repositories, setRepositories] = useState<IRepository[]>([]);

  const handleSubmit = useCallback(async () => {
    console.log(searchText);
    if (searchText.length === 0) {
      setErrorFeedback('Informe um repositório');
      return;
    }

    try {
      setErrorFeedback('');
      const response = await api.get<IRepository>(`repos/${searchText}`);
      const repository = response.data;

      setRepositories([...repositories, repository]);
      setSearchText('');
    } catch (error) {
      setErrorFeedback(
        'Repositório não encontrado. Verifique o nome/repositório usados.',
      );
    }
  }, [searchText]);

  const removeRepositoryCard = (position: number) => {
    const filteredRepositories = repositories.filter((repository, index) => {
      if (index !== position) {
        return repository;
      }
    });

    setRepositories(filteredRepositories);
  };

  const renderItem = useCallback(
    (repository: IRepository, index: number) => {
      return (
        <RepositoryCard
          {...repository}
          index={index}
          updateFunction={removeRepositoryCard}
        />
      );
    },
    [removeRepositoryCard],
  );

  const renderSeparator = useMemo(() => {
    return <Separator />;
  }, []);

  return (
    <Container>
      <Header />
      <Title>Explore repositórios no github.</Title>

      <SearchContainer>
        <SearchField
          placeholder="Digite o nome do repositório"
          placeholderTextColor="#777777"
          defaultValue={searchText}
          onChangeText={setSearchText}
        />
        {!!errorFeedback && (
          <Error
            animation="zoomInDown"
            useNativeDriver
            duration={1200}
            easing="ease-in-cubic">
            {errorFeedback}
          </Error>
        )}

        <SearchButton onPress={handleSubmit}>
          <SearchButtonText>Pesquisar</SearchButtonText>
        </SearchButton>
      </SearchContainer>

      <ScrollView horizontal>
        <RepositoriesList
          data={repositories}
          keyExtractor={({full_name}, index) => String(`${full_name}-${index}`)}
          renderItem={({item, index}) => renderItem(item, index)}
          ItemSeparatorComponent={() => renderSeparator}
        />
      </ScrollView>

      <Footer />
    </Container>
  );
};

export default Home;
