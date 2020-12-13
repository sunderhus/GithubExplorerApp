import React, {useCallback, useMemo, useState} from 'react';
import * as Animatable from 'react-native-animatable';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import RepositoryCard from '../../components/RepositoryCard';
import {useFavoriteRepository} from '../../hooks/repository';
import api from '../../service/api';
import {
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
  id: number;
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

  const {
    favoritesRepositories,
    toggleCachedRepository,
    addRepository,
  } = useFavoriteRepository();

  const handleAddRepository = useCallback(async () => {
    if (searchText.length === 0) {
      setErrorFeedback('Informe um repositório');
      return;
    }

    try {
      setErrorFeedback('');
      const response = await api.get<IRepository>(`repos/${searchText}`);
      const {id, owner, description, full_name} = response.data;
      await addRepository({
        id,
        description,
        full_name,
        owner: {avatar_url: owner.avatar_url, login: owner.login},
      });
      setSearchText('');
    } catch (error) {
      setErrorFeedback(
        'Repositório não encontrado. Verifique o nome/repositório usados.',
      );
    }
  }, [addRepository, searchText]);

  const renderItem = useCallback(
    (repository: IRepository) => {
      return (
        <Animatable.View
          animation="fadeInLeft"
          duration={300}
          easing="ease-in-cubic"
          useNativeDriver>
          <RepositoryCard
            {...repository}
            toggleRepository={toggleCachedRepository}
          />
        </Animatable.View>
      );
    },
    [toggleCachedRepository],
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

        <SearchButton
          onPress={handleAddRepository}
          disabled={searchText.length <= 0}>
          <SearchButtonText>Adicionar</SearchButtonText>
        </SearchButton>
      </SearchContainer>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <RepositoriesList
          data={favoritesRepositories}
          keyExtractor={({full_name}, index) => String(`${full_name}-${index}`)}
          renderItem={({item}) => renderItem(item)}
          ItemSeparatorComponent={() => renderSeparator}
        />
      </ScrollView>

      <Footer />
    </Container>
  );
};

export default Home;
