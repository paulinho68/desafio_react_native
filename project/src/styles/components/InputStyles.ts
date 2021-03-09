import styled from 'styled-components/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

interface IconProps {
    marginRight?: string;
}

export const Container = styled.View`
    width: 100%;
    height: 40px;

    margin-bottom:30px;
    padding: 4px;

    display: flex;
    flex-direction:row;
    justify-content:center;
    align-items:center;
        
    border-bottom-width: 1px;
    border-bottom-color: #DCDCDC;
`;

export const TextInput = styled.TextInput`
    flex:1;
    font-family: 'OpenSans-Regular';
    padding: 4px;
`;

export const Icon = styled(FeatherIcon)`
    color: #1E319D;
    margin-right: ${(props: IconProps) => props.marginRight ? props.marginRight : '10px'};
`;

