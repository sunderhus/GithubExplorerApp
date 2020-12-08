import React, {useCallback, useMemo, useState} from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import api from '../../service/api';
import {
  Chevron,
  Container,
  Error,
  RepositoriesList,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryImage,
  RepositoryName,
  RepositoryTextContainer,
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
  const [repositories, setRepositories] = useState<IRepository[]>([
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻, Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
    {
      full_name: 'sunderhus/GithubExplorer',
      description:
        'Projeto ReactJS + Integração com API + Local Storage API 🚀👨‍💻',
      owner: {
        login: 'matheus',
        avatar_url: 'https://avatars3.githubusercontent.com/u/44003532?v=4',
      },
    },
  ]);

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

  const renderItem = ({description, owner, full_name}: IRepository) => {
    return (
      <RepositoryContainer>
        <RepositoryImage source={{uri: owner.avatar_url}} />
        <RepositoryTextContainer showsVerticalScrollIndicator={false}>
          <RepositoryName>{full_name}</RepositoryName>
          <RepositoryDescription>{description}</RepositoryDescription>
        </RepositoryTextContainer>
        <Chevron name="chevron-right" size={24} />
      </RepositoryContainer>
    );
  };

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
          renderItem={({item}) => renderItem(item)}
          ItemSeparatorComponent={() => renderSeparator}
        />
      </ScrollView>

      <Footer />
    </Container>
  );
};

export default Home;
