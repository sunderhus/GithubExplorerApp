import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const RepositoryContainer = styled.TouchableOpacity`
    padding: 16px;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: #ffffff;
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
