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
  updateFunction(index: number): void;
  index: number;
}

const RepositoryCard: React.FC<IRepositoryCardProps> = ({
  full_name,
  description,
  owner,
  index,
  updateFunction,
}) => {
  const navigation = useNavigation();

  const handleNavigateToDetails = useCallback(() => {
    navigation.navigate('Details', {owner, full_name});
  }, [full_name, navigation, owner]);

  return (
    <RepositoryContainer
      onLongPress={() => updateFunction(index)}
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
