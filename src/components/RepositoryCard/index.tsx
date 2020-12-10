import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {IRepository} from '../../pages/Home';
import {
  Chevron,
  RepositoryContainer,
  RepositoryDescription,
  RepositoryImage,
  RepositoryName,
  RepositoryTextContainer,
} from './styles';

interface IRepositoryCardProps extends IRepository {
  toggleRepository: (repository: IRepository) => Promise<void>;
}

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  full_name,
  description,
  owner,
  id,
  toggleRepository,
}) => {
  const navigation = useNavigation();

  const handleNavigateToDetails = useCallback(() => {
    navigation.navigate('Details', {full_name});
  }, [full_name, navigation]);

  const handleRemoveRepository = useCallback(async () => {
    await toggleRepository({full_name, description, owner, id});
  }, [description, full_name, id, owner, toggleRepository]);

  return (
    <RepositoryContainer
      onLongPress={handleRemoveRepository}
      onPress={handleNavigateToDetails}>
      <RepositoryImage source={{uri: owner.avatar_url}} />
      <RepositoryTextContainer showsVerticalScrollIndicator={false}>
        <RepositoryName>{full_name}</RepositoryName>
        <RepositoryDescription>{description}</RepositoryDescription>
      </RepositoryTextContainer>
      <Chevron name="chevron-right" size={24} />
    </RepositoryContainer>
  );
};

export default RepositoryCard;
